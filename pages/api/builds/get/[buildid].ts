import { GetItemCommand } from "@aws-sdk/client-dynamodb";
import { NextApiRequest, NextApiResponse } from "next";
import { client } from "src/utils/dbclient";
import { unmarshall } from "@aws-sdk/util-dynamodb";

export const config = {
  runtime: "nodejs",
};

export default async function getBuild(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!req.query.buildid) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const buildid = req.query.buildid as string;
  if (buildid.length === 0) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const { Item: build } = await client.send(
    new GetItemCommand({
      TableName: process.env.TABLE_NAME,
      Key: {
        id: { S: buildid },
      },
    })
  );

  if (!build) {
    return res.status(404).json({ error: "Build not found" });
  }

  const { name, mdx, chatcode, timestamp, character } = unmarshall(build, {
    wrapNumbers: false,
  });
  return res.status(200).json({ name, mdx, chatcode, timestamp, character });
}
