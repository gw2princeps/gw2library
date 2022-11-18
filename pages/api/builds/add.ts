import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { encode } from "gw2e-chat-codes";
import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth/next";
import { convertMDX } from "src/lambda/index.mjs";
import { getBuildmeta } from "src/utils/chatcodes";
import { client } from "src/utils/dbclient";
import { v4 as uuidv4 } from "uuid";
import { authOptions } from "../auth/[...nextauth]";

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

  if (req.method !== "PUT") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  if (req.headers["content-type"] !== "application/json") {
    return res.status(415).json({ error: "Unsupported media type" });
  }

  const build = req.body;

  if (!build || !build.name || !build.character) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  let chatcode: string | false = "";
  try {
    const character =
      typeof build.character === "string"
        ? JSON.parse(build.character)
        : build.character;
    chatcode = encode("build", await getBuildmeta(character));
  } catch (e) {
    return res.status(400).json({ error: "Invalid character" });
  }

  console.log("Converting build to MDX...");

  const converted = await convertMDX(build.description);
  const id = uuidv4();

  const item = await client.send(
    new PutItemCommand({
      TableName: process.env.TABLE_NAME,
      Item: {
        id: { S: id },
        name: { S: build.name },
        character: { S: build.character },
        description: { S: build.description },
        chatcode: { S: chatcode || "" },
        mdx: { S: converted.code },
        timestamp: { N: Date.now().toString() },
        creator: { S: session.user?.sub },
      },
    })
  );

  if (item.$metadata.httpStatusCode !== 200) {
    return res.status(500).json({ error: "Internal server error" });
  }

  return res.status(201).json({ id });
}
