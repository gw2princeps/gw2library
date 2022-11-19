import Unautorized from "@/components/Unautorized";
import classes from "@/styles/PageAccountList.module.css";
import { useSession } from "next-auth/react";

import "@discretize/gw2-ui-new/dist/default_style.css";
import "@discretize/gw2-ui-new/dist/index.css";
import "@discretize/react-discretize-components/dist/index.css";
import "@discretize/typeface-menomonia";
import Table from "@/components/accountlist/table/Table";

export default function Page() {
  const { data: session } = useSession();

  if (!session) {
    return <Unautorized />;
  }

  return (
    <section className={classes.root}>
      <h1>My builds</h1>
      <Table />
    </section>
  );
}
