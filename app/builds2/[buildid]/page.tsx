import PageComponent from "./pagecomponent";

async function fetchData(buildId: string) {
  const response = await fetch(`${process.env.HOST}/api/builds/get/${buildId}`);
  const json = await response.json();
  return json;
}

export default async function Page({
  params,
}: {
  params?: any;
  children?: React.ReactNode;
}) {
  console.log("test");
  console.log(params);
  const data = await fetchData(params.buildid);
  return (
    <>
      <PageComponent {...data} />
    </>
  );
}
