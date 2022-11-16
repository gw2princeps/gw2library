import { Profession } from "@discretize/gw2-ui-new";
import { Character } from "@discretize/react-discretize-components";
import React from "react";

export interface Build {
  name: string;
  description: string;
  mdx: string;
  character: Character;
  chatcode: string;
  optimizerSettingsLink: string;
}

export interface Traits {
  lines: number[];
  selection: number[][];
}

export interface Character extends React.ComponentProps<typeof Character> {
  attributes: {
    specialization: React.ComponentProps<typeof Profession>["name"];
    profession: React.ComponentProps<
      typeof Character
    >["attributes"]["profession"];
    data: React.ComponentProps<typeof Character>["attributes"]["data"];
  };
  traits: Traits;
}
