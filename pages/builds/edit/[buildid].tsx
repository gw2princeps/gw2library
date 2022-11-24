import BuildForm, {
  FormContent,
  validateCharacter,
  validateGw2SkillsLink,
  validateOptimizerSettings,
} from "@/components/BuildForm";
import Layout from "@/components/Layout";
import { Button, Intent, NonIdealState } from "@blueprintjs/core";
import { Spinner } from "@discretize/gw2-ui-new";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import { Build } from "src/types/Build";
import { AppToaster } from "src/utils/toaster";
import useSWR, { useSWRConfig } from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function Page() {
  const router = useRouter();
  const { buildid } = router.query;
  const { mutate } = useSWRConfig();
  const { data, error } = useSWR<Build>(`/api/builds/get/${buildid}`, fetcher);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  if (error) {
    return <NonIdealState title="Error" description="An error occured" />;
  }

  if (!data) {
    return <Spinner />;
  }

  const { character, name, description, optimizerSettingsLink, gw2skillsLink } =
    data;

  const submit = (formContent: FormContent) => () => {
    console.log(validateCharacter(formContent.character));
    console.log(validateOptimizerSettings(formContent.optimizerSettingsLink));
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

    setSubmitStatus("loading");
    mutate("/api/account/list");
    fetch(`/api/builds/edit/${buildid}`, {
      method: "POST",
      body: JSON.stringify({
        ...formContent,
        character: JSON.parse(formContent.character),
      }),
    })
      .then(async (res) => {
        if (res.status === 200) {
          setSubmitStatus("success");
          AppToaster?.show({
            message: "Upload successful.",
            intent: "success",
          });
        } else {
          setSubmitStatus("error");
          AppToaster?.show({
            message: "Upload failed.",
            intent: "danger",
          });
        }
      })
      .catch(() => {
        setSubmitStatus("error");
        AppToaster?.show({
          message: "Upload failed: unknown error",
          intent: "danger",
        });
      });
  };

  let intent: Intent = "primary";
  if (submitStatus === "error") {
    intent = "danger";
  } else if (submitStatus === "success") {
    intent = "success";
  }

  return (
    <>
      <BuildForm
        BottomElement={(formContent, reset) => (
          <>
            <Button
              icon="tick"
              onClick={submit(formContent)}
              intent={intent}
              loading={submitStatus === "loading"}
            >
              Save changes
            </Button>
          </>
        )}
        initialData={{
          character: JSON.stringify(character),
          name,
          description,
          optimizerSettingsLink: optimizerSettingsLink || "",
          gw2skillsLink: gw2skillsLink || "",
        }}
      />
    </>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout widescreen hideFooter currentPageHeadline="Edit build">
      {page}
    </Layout>
  );
};
