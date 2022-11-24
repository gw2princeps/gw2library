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

export const validateOptimizerSettings = (settings: string) =>
  settings.length == 0 ||
  settings.startsWith("https://optimizer.discretize.eu/?s=");

export const validateCharacter = (character: string) => {
  if (character.length == 0) return true;
  try {
    const char = JSON.parse(character);
    return char.hasOwnProperty("attributes");
  } catch (e) {
    return false;
  }
};

export const validateGw2SkillsLink = (link: string) => {
  if (link.length == 0) return true;
  // http://en.gw2skills.net/editor/?PWFBk2l7lFwuYUsE2Ie2TrtPA-zRRYjhpG94zIVpQ6qA7OL9ftBA-e
  return link.includes(".gw2skills.net/editor/?");
};

const DynamicPreview = dynamic(() => import("./editor/Preview"), {
  ssr: false,
});

export type FormContent = {
  name: string;
  optimizerSettingsLink: string;
  gw2skillsLink: string;
  description: string;
  character: string;
};

export interface BottomElement {
  BottomElement: (formContent: FormContent, reset: () => void) => JSX.Element;
  initialData?: FormContent;
}

const BuildForm = ({
  BottomElement,
  initialData = {
    character: "",
    description: "",
    name: "",
    optimizerSettingsLink: "",
    gw2skillsLink: "",
  },
}: BottomElement) => {
  const [name, setName] = React.useState(initialData.name || "");
  const [optimizerSettingsLink, setOptimizerSettingsLink] = React.useState(
    initialData.optimizerSettingsLink || ""
  );
  const [gw2skillsLink, setGw2skillsLink] = React.useState(
    initialData.gw2skillsLink || ""
  );
  const [description, setDescription] = React.useState(
    initialData.description || ""
  );
  const [character, setCharacter] = React.useState(initialData.character || "");

  const currState = {
    name,
    optimizerSettingsLink,
    description,
    character,
    gw2skillsLink,
  };

  const getIntent = (value: string, validator: (value: string) => boolean) => {
    if (value?.length == 0) return "none";
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
          label="GW2Skills.net link"
          labelFor="gw2skills-input"
          labelInfo="(copy-paste)"
          helperText={
            validateGw2SkillsLink(gw2skillsLink)
              ? "Share your build on GW2Skills.net and copy the link here"
              : "Invalid link"
          }
        >
          <InputGroup
            id="gw2skills-input"
            placeholder="GW2Skills.net link"
            value={gw2skillsLink}
            onChange={(e) => setGw2skillsLink(e.target.value)}
            intent={getIntent(gw2skillsLink, validateGw2SkillsLink)}
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
