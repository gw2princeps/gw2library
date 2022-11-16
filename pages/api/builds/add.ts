import { encode } from "gw2e-chat-codes";
import { NextRequest } from "next/server";
import { getBuildmeta } from "src/utils/chatcodes";

export default async function addBuild(req: NextRequest) {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }
  if (req.headers.get("content-type") !== "application/json") {
    return new Response("Unsupported Media Type", { status: 415 });
  }

  const build = await req.json();

  let chatcode = encode(
    "build",
    await getBuildmeta(JSON.parse(build.character))
  );

  console.log("Converting build to MDX...");

  const response = await fetch(process.env.MDX_CONVERTER_LAMBDA_URL || "", {
    method: "POST",
    body: build.description,
    headers: { "content-type": "text/plain" },
  });

  if (response.status !== 200) {
    return new Response("Internal Server Error", { status: 500 });
  }
  const json = await response.json();

  console.log("Adding build", {
    ...build,
    mdx: json.code,
    chatcode,
    timestamp: new Date().toISOString(),
  });

  // lets wait 2 seconds here
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = new Response(JSON.stringify({ message: "success" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
  return res;
}
