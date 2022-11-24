import { UpdateItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import { encode } from "gw2e-chat-codes";
import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { convertMDX } from "src/lambda/index.mjs";
import { Character } from "src/types/Build";
import { getBuildmeta } from "src/utils/chatcodes";
import { client } from "src/utils/dbclient";

export const config = {
  runtime: "nodejs",
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // @ts-ignore
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const build = JSON.parse(req.body);

  if (!req.query.buildid || !build || !build.name || !build.character) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  const buildid = req.query.buildid as string;

  let chatcode: string | false = "";
  let character: Character;
  try {
    character =
      typeof build.character === "string"
        ? JSON.parse(build.character)
        : build.character;
    const meta = await getBuildmeta(character);
    chatcode = encode("build", meta);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: "Invalid character" });
  }

  console.log("Converting build to MDX...");

  const converted = await convertMDX(build.description);

  const data = await client.send(
    new UpdateItemCommand({
      TableName: process.env.TABLE_NAME,
      ConditionExpression: "creator = :creator",
      ExpressionAttributeValues: {
        ":creator": { S: session.user.sub },
        ":name": { S: build.name },
        ":character": { M: marshall(character) },
        ":description": { S: build.description },
        ":chatcode": { S: chatcode || "" },
        ":mdx": { S: converted.code },
        ":optimizerSettingsLink": { S: build.optimizerSettingsLink },
        ":gw2skillsLink": { S: build.gw2skillsLink },
      },
      Key: {
        id: { S: buildid },
      },
      ExpressionAttributeNames: {
        "#name": "name",
        "#character": "character",
        "#description": "description",
        "#chatcode": "chatcode",
        "#mdx": "mdx",
        "#optimizerSettingsLink": "optimizerSettingsLink",
        "#gw2skillsLink": "gw2skillsLink",
      },
      UpdateExpression:
        "SET #name = :name, #description = :description, #character = :character, #chatcode = :chatcode, #mdx = :mdx, #optimizerSettingsLink = :optimizerSettingsLink, #gw2skillsLink = :gw2skillsLink",
    })
  );

  if (data.$metadata.httpStatusCode === 400) {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (data.$metadata.httpStatusCode !== 200) {
    return res.status(500).json({ error: "Internal server error" });
  }

  return res.status(200).json({ success: true });
}
