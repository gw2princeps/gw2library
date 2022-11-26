import { Button, Classes } from "@blueprintjs/core";
import { signIn, useSession } from "next-auth/react";

export default function Component(props: Record<string, any>): JSX.Element {
  const { data } = useSession();

  if (data) return <></>;

  return (
    <>
      <Button
        className={Classes.MINIMAL}
        onClick={() => {
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
