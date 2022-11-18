import { Button, Classes } from "@blueprintjs/core";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Component(): JSX.Element {
  const { data } = useSession();

  if (data) return <></>;

  return (
    <>
      <Button
        className={Classes.MINIMAL}
        onClick={() => signIn("gw2auth")}
        icon="log-in"
        text="Login"
      />
    </>
  );
}
