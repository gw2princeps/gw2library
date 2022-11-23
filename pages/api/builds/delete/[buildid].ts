import { DeleteItemCommand } from "@aws-sdk/client-dynamodb";
import { NextApiRequest, NextApiResponse } from "next";
import { client } from "src/utils/dbclient";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";

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

  if (req.method !== "DELETE") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!req.query.buildid) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // wait 2
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("amen");

  const buildid = req.query.buildid as string;
  if (buildid.length === 0) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const data = await client.send(
    new DeleteItemCommand({
      TableName: process.env.TABLE_NAME,
      ConditionExpression: "creator = :creator",
      ExpressionAttributeValues: {
        ":creator": { S: session.user.sub },
      },
      Key: {
        id: { S: buildid },
      },
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
