import { Switch } from "@blueprintjs/core";
import { Character } from "@discretize/react-discretize-components";
import React from "react";
import getProfessionImage from "src/utils/ProfessionImages";
import classes from "./Character.module.css";

const CustomCharacter = ({
  character,
}: {
  character: React.ComponentProps<typeof Character>;
}) => {
  // @ts-ignore
  const spec = character?.attributes?.specialization;

  return (
    <div className={classes.root}>
      <Character
        {...character}
        //@ts-ignore
        switchElement={Switch}
        //@ts-ignore
        imageElement={getProfessionImage(spec)}
      />
    </div>
  );
};

export default React.memo(CustomCharacter);
