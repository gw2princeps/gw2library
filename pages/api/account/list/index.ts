import { QueryCommand } from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "pages/api/auth/[...nextauth]";
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

  const data = await client.send(
    new QueryCommand({
      TableName: process.env.TABLE_NAME,
      IndexName: "creator-index",
      KeyConditionExpression: "creator = :creator",
      ExpressionAttributeValues: {
        ":creator": { S: session.user.sub },
      },
      ExpressionAttributeNames: {
        "#name": "name",
        "#id": "id",
        "#character": "character",
        "#timestamp": "timestamp",
      },
      ProjectionExpression: "#name, #id, #character, #timestamp",
      ScanIndexForward: false,
    })
  );

  if (data.Count === 0 && data.$metadata.httpStatusCode === 200) {
    return res.status(200).json([]);
  }

  if (data.$metadata.httpStatusCode !== 200) {
    return res.status(500).json({ error: "Internal server error" });
  }

  if (data?.Count || 0 > 0) {
    const items =
      data.Items?.map((item) => unmarshall(item, { wrapNumbers: false })) || [];
    return res.status(200).json(items);
  }
}
