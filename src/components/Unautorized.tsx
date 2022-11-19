import { NonIdealState } from "@blueprintjs/core";
import React from "react";
import LoginButton from "@/components/LoginButton";

const Unauthorized = () => (
  <div
    style={{
      marginTop: "30vh",
    }}
  >
    <NonIdealState
      title={"Unauthorized"}
      action={<LoginButton intent={"primary"} className={""} />}
      description="Log in to see your builds"
    />
  </div>
);

export default React.memo(Unauthorized);
