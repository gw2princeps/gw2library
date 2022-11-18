import { compile } from "@mdx-js/mdx";
import remarkGFM from "remark-gfm";
import remarkMDXGW2UI from "@discretize/remark-mdx-gw2ui";

async function convertMDX(mdx) {
  let startTime = new Date().getTime();

  const code = String(
    await compile(mdx, {
      outputFormat: "function-body",
      useDynamicImport: true,
      baseUrl: ".",
      providerImportSource: "@mdx-js/react",
      remarkPlugins: [remarkGFM, remarkMDXGW2UI],
    })
  );

  let endTime = new Date().getTime();
  let totalTime = endTime - startTime;

  return { code, time: totalTime };
}

const handler = async (event) => {
  if (event.headers["content-type"] !== "text/plain") {
    return {
      statusCode: 400,
      body: "Bad request",
    };
  }

  const convertedMdx = await convertMDX(event.body);

  const response = {
    statusCode: 200,
    body: JSON.stringify({ ...convertedMdx }),
  };
  return response;
};

export { handler, convertMDX };
