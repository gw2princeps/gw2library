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
};

export default components;
