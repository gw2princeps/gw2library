import classes from "@/styles/AddBuildForm.module.css";
import {
  FormGroup,
  InputGroup,
  NonIdealState,
  TextArea,
} from "@blueprintjs/core";
import dynamic from "next/dynamic";
import React from "react";
import Character from "./character/Character";

import "@discretize/gw2-ui-new/dist/default_style.css";
import "@discretize/gw2-ui-new/dist/index.css";
import "@discretize/react-discretize-components/dist/index.css";
import "@discretize/typeface-menomonia";

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

const DynamicPreview = dynamic(() => import("./editor/Preview"), {
  ssr: false,
});

export interface BottomElement {
  BottomElement: (
    formContent: {
      name: string;
      optimizerSettingsLink: string;
      description: string;
      character: string;
    },
    reset: () => void
  ) => JSX.Element;
}

const BuildForm = ({ BottomElement }: BottomElement) => {
  const [name, setName] = React.useState("");
  const [optimizerSettingsLink, setOptimizerSettingsLink] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [character, setCharacter] = React.useState("");

  const currState = {
    name,
    optimizerSettingsLink,
    description,
    character,
  };

  const getIntent = (value: string, validator: (value: string) => boolean) => {
    if (value.length == 0) return "none";
    if (validator(value)) return "success";
    return "danger";
  };
  const reset = () => {
    setName("");
    setOptimizerSettingsLink("");
    setDescription("");
    setCharacter("");
  };

  return (
    <div className={classes.root}>
      <form className={classes.form}>
        <h1>Settings</h1>
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

        {BottomElement(currState, reset)}
      </form>

      <div className={classes.preview}>
        <h1>Preview</h1>
        {!character && !description && (
          <NonIdealState
            icon="eye-open"
            title="No preview available"
            description="Fill in the form to see a preview of your build."
          />
        )}
        {character && validateCharacter(character) && (
          <Character character={JSON.parse(character)} />
        )}
        <DynamicPreview mdx={description} />
      </div>
    </div>
  );
};

export default React.memo(BuildForm);
