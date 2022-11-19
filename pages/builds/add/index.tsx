import AddBuildForm from "@/components/AddBuildForm";
import Unautorized from "@/components/Unautorized";
import { useSession } from "next-auth/react";
import React from "react";

export default function Page() {
  const { data: session } = useSession();

  if (!session) {
    return <Unautorized />;
  }

  return (
    <>
      <h1>Add a new build</h1>
      <AddBuildForm />
    </>
  );
}
