import { Classes, NonIdealState } from "@blueprintjs/core";
import classes from "@/styles/Home.module.css";
export default function Custom404() {
  return (
    <>
      <NonIdealState
        layout="horizontal"
        icon="error"
        title="404 - Page Not Found"
        description={"Your search query was not found on this website."}
        className={classes.wrapper}
      />
    </>
  );
}
