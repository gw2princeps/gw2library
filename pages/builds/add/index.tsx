import BuildForm, {
  FormContent,
  validateCharacter,
  validateGw2SkillsLink,
  validateOptimizerSettings,
} from "@/components/BuildForm";
import Layout from "@/components/Layout";
import Unautorized from "@/components/Unautorized";
import { Button } from "@blueprintjs/core";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { ReactElement } from "react";
import { AppToaster } from "src/utils/toaster";

function SubmitButton({
  formContent,
  reset,
}: {
  formContent: FormContent;
  reset: () => void;
}): JSX.Element {
  const [lastUploaded, setLastUploaded] = React.useState("");

  const [submitting, setSubmitting] = React.useState(false);

  const submit = () => {
    if (
      !validateCharacter(formContent.character) ||
      !validateOptimizerSettings(formContent.optimizerSettingsLink) ||
      !validateGw2SkillsLink(formContent.gw2skillsLink)
    ) {
      AppToaster?.show({
        message: "Invalid character or optimizer settings",
        intent: "danger",
      });
      return;
    }

    setSubmitting(true);
    fetch("/api/builds/add", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formContent),
    }).then(async (res) => {
      setSubmitting(false);
      const json = await res.json();
      if (res.status == 201) {
        setLastUploaded(json.id);
        reset();
        AppToaster?.show({
          message: "Upload successful.",
          intent: "success",
          isCloseButtonShown: true,
        });
      } else {
        AppToaster?.show({
          message: `Upload failed: ${json.error}`,
          intent: "danger",
          isCloseButtonShown: true,
        });
      }
    });
  };

  return (
    <>
      <Button
        intent={"primary"}
        text="Upload"
        icon="upload"
        onClick={submit}
        loading={submitting}
      />
      {lastUploaded && lastUploaded.length > 0 && (
        <Link href={`/builds/${lastUploaded}`}>
          <Button intent={"success"} text="Go to build" icon="upload" />
        </Link>
      )}
    </>
  );
}

export default function Page() {
  const { data: session } = useSession();

  if (!session) {
    return <Unautorized />;
  }

  return (
    <>
      <BuildForm
        BottomElement={(formContent, reset) => (
          <SubmitButton formContent={formContent} reset={reset} />
        )}
      />
    </>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout widescreen hideFooter currentPageHeadline="Add build">
      {page}
    </Layout>
  );
};
