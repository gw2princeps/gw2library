import { H2, H3, H4, H5, H6, HTMLTable } from "@blueprintjs/core";
import {
  Boon,
  Skill,
  Trait,
  Item,
  Attribute,
  Augmentation,
  Aura,
  Coin,
  Condition,
  MistlockInstability,
  Profession,
  Race,
  CommonEffect,
  ConsumableEffect,
  ControlEffect,
  Specialization,
  TraitLine,
} from "@discretize/gw2-ui-new";
import React from "react";

// @ts-ignore
const Table = (props: any) =>
  React.createElement(HTMLTable, { ...props, striped: true, bordered: true });

const components = {
  Boon,
  Skill,
  Trait,
  Item,
  Attribute,
  Augmentation,
  Aura,
  Coin,
  Condition,
  MistlockInstability,
  Profession,
  Race,
  CommonEffect,
  ConsumableEffect,
  ControlEffect,
  Specialization,
  TraitLine,
  BuildLink: () => null,
  Effect: () => null,
  Instability: MistlockInstability,
  table: Table,
  h1: H2,
  h2: H3,
  h3: H4,
  h4: H5,
  h5: H6,
  h6: H6,
  th: (props: any) => {
    if (props.children) {
      return React.createElement("th", {
        ...props,
        style: { fontWeight: "bold" },
      });
    }
    return null;
  },
  ul: (props: any) => {
    return React.createElement("ul", {
      ...props,
      class: "bp4-list",
    });
  },
  ol: (props: any) => {
    return React.createElement("ol", {
      ...props,
      class: "bp4-list",
    });
  },
};

export default components;
