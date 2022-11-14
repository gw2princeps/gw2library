import { compile } from "@mdx-js/mdx";

const handler = async (event) => {
  if (event.headers["content-type"] !== "text/plain") {
    return {
      statusCode: 400,
      body: "Bad request",
    };
  }

  let startTime = new Date().getTime();
  const code = String(
    await compile(event.body, {
      outputFormat: "function-body",
      useDynamicImport: true,
      baseUrl: ".",
      providerImportSource: "@mdx-js/react",
    })
  );
  let endTime = new Date().getTime();
  let totalTime = endTime - startTime;

  const response = {
    statusCode: 200,
    body: JSON.stringify({ time: totalTime, code: code }),
  };
  return response;
};

export { handler };
