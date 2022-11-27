import { Button, Classes } from "@blueprintjs/core";
import { signIn, useSession } from "next-auth/react";
import React from "react";

export default function Component(props: Record<string, any>): JSX.Element {
  const { data } = useSession();
  const [loading, setLoading] = React.useState(false);

  if (data) return <></>;

  return (
    <>
      <Button
        loading={loading}
        className={Classes.MINIMAL}
        onClick={() => {
          setLoading(true);
          if (process.env.NODE_ENV === "production") {
            return signIn("gw2auth");
          } else {
            return signIn();
          }
        }}
        icon="log-in"
        text="Login"
        {...props}
      />
    </>
  );
}
