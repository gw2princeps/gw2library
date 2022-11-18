import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.ACCESS_KEY || "",
    secretAccessKey: process.env.SECRET_KEY || "",
  },
  region: process.env.REGION,
});

export { client };
