import { Button, Classes } from "@blueprintjs/core";
import { useSession, signIn, signOut } from "next-auth/react";
import { ReactPropTypes } from "react";

export default function Component(props: Record<string, any>): JSX.Element {
  const { data } = useSession();

  if (data) return <></>;

  return (
    <>
      <Button
        className={Classes.MINIMAL}
        onClick={() => signIn("gw2auth")}
        icon="log-in"
        text="Login"
        {...props}
      />
    </>
  );
}
