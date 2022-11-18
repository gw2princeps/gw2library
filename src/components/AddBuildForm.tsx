import { Button, FormGroup, InputGroup, TextArea } from "@blueprintjs/core";
import React from "react";
import classes from "@/styles/AddBuildForm.module.css";
import { AppToaster } from "src/utils/toaster";
import Link from "next/link";

const validateOptimizerSettings = (settings: string) =>
  settings.length == 0 ||
  settings.startsWith("https://optimizer.discretize.eu/?s=");
const validateCharacter = (character: string) => {
  if (character.length == 0) return true;
  try {
    const char = JSON.parse(character);
    return char.hasOwnProperty("attributes");
  } catch (e) {
    return false;
  }
};

const AddBuildForm = function AddBuildForm() {
  const [name, setName] = React.useState("");
  const [optimizerSettingsLink, setOptimizerSettingsLink] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [character, setCharacter] = React.useState("");
  const [lastUploaded, setLastUploaded] = React.useState("");

  const [submitting, setSubmitting] = React.useState(false);

  const getIntent = (value: string, validator: (value: string) => boolean) => {
    if (value.length == 0) return "none";
    if (validator(value)) return "success";
    return "danger";
  };

  const submit = () => {
    setSubmitting(true);
    fetch("/api/builds/add", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        optimizerSettingsLink,
        description,
        character,
      }),
    }).then((res) => {
      setSubmitting(false);
      if (res.status == 201) {
        res.json().then((json) => setLastUploaded(json.id));
        setName("");
        setOptimizerSettingsLink("");
        setDescription("");
        setCharacter("");
        AppToaster?.show({
          message: "Upload successful.",
          intent: "success",
          isCloseButtonShown: true,
        });
      } else {
        AppToaster?.show({
          message: "Upload failed.",
          intent: "danger",
          isCloseButtonShown: true,
        });
      }
    });
  };

  return (
    <>
      <form className={classes.form}>
        <FormGroup
          label="Build name"
          labelFor="buildname-input"
          labelInfo="(required)"
        >
          <InputGroup
            id="buildname-input"
            placeholder="Build name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup
          label="Optimizer settings link"
          labelFor="optimizersettings-input"
          labelInfo="(copy-paste)"
          helperText={
            validateOptimizerSettings(optimizerSettingsLink)
              ? "Must be copied from the main optimizer site (first share button)"
              : "Invalid link"
          }
        >
          <InputGroup
            id="optimizersettings-input"
            placeholder="Optimizer settings link"
            value={optimizerSettingsLink}
            onChange={(e) => setOptimizerSettingsLink(e.target.value)}
            intent={getIntent(optimizerSettingsLink, validateOptimizerSettings)}
          />
        </FormGroup>

        <FormGroup
          label="Character"
          labelFor="character-input"
          helperText="Use the export to JSON button in the optimizer (JSON)"
        >
          <InputGroup
            id="character-input"
            placeholder="Character"
            value={character}
            onChange={(e) => setCharacter(e.target.value)}
            intent={getIntent(character, validateCharacter)}
          />
        </FormGroup>

        <FormGroup
          label="Description"
          labelFor="description-input"
          helperText={
            "You can use Markdown to format your description. For example, you can use **bold** or *italic* text, or [links](https://discretize.eu)."
          }
        >
          <TextArea
            growVertically={true}
            fill
            value={description}
            id="description-input"
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormGroup>

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
      </form>
    </>
  );
};

export default AddBuildForm;
