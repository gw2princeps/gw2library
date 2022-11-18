import { Button, Classes } from "@blueprintjs/core";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Component(): JSX.Element {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Button
        className={Classes.MINIMAL}
        onClick={() => signIn()}
        icon="log-in"
        text="Login"
      />
    </>
  );
}
