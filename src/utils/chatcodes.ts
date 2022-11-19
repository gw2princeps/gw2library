import { encode } from "gw2e-chat-codes";
import { BuildLinkMeta } from "gw2e-chat-codes/build/src/encode/encodeBuildLink";
import React from "react";
import { Character } from "src/types/Build";
import SPECIALIZATIONS from "./specializations.json" assert { type: "json" };

const PROFESSION_IDS = [
  "Guardian",
  "Warrior",
  "Engineer",
  "Ranger",
  "Thief",
  "Elementalist",
  "Mesmer",
  "Necromancer",
  "Revenant",
];

const reshape = (arr: number[]): number[][] => {
  const newArr = [];
  while (arr.length) newArr.push(arr.splice(0, 3));
  return newArr;
};

const getChoice = (major: number[], trait: number) => {
  const choice = major.indexOf(trait);
  if (choice === -1) {
    return 0;
  }
  return choice + 1;
};
const getChoices = (major: number[][], trait: number[]) => {
  return trait.map((t, index) => getChoice(major[index], t));
};

const getBuildmeta = async (character: Character): Promise<BuildLinkMeta> => {
  const specializations = character.traits.lines;
  const traits = character.traits.selection;

  const majors = specializations.map((specId) =>
    reshape(
      SPECIALIZATIONS.find((spec) => spec.id === specId)?.major_traits || []
    )
  );
  console.log(getChoices(majors[0], traits[0]));

  return {
    profession: PROFESSION_IDS.indexOf(character.attributes.profession),
    specialization1: specializations[0],
    specialization2: specializations[1],
    specialization3: specializations[2],
    traitChoices1: getChoices(majors[0], traits[0]),
    traitChoices2: getChoices(majors[1], traits[1]),
    traitChoices3: getChoices(majors[2], traits[2]),
    aquaticEliteSkill: 0,
    aquaticHealSkill: 0,
    aquaticUtilitySkill1: 0,
    aquaticUtilitySkill2: 0,
    aquaticUtilitySkill3: 0,
    terrestrialHealSkill: character.skills?.healId || 0,
    terrestrialUtilitySkill1: character.skills?.utility1Id || 0,
    terrestrialUtilitySkill2: character.skills?.utility2Id || 0,
    terrestrialUtilitySkill3: character.skills?.utility3Id || 0,
    terrestrialEliteSkill: character.skills?.eliteId || 0,
  };
};

export { getBuildmeta };
