import { H3 } from "@blueprintjs/core";
import { Specialization, TraitLine } from "@discretize/gw2-ui-new";
import React from "react";
import classes from "@/styles/Traits.module.css";
import { Traits } from "src/types/Build";

const Traits = ({ traits }: { traits: Traits }) => {
  return (
    <>
      {traits.lines.map((line, index) => (
        <div key={line} className={classes.linewrapper}>
          <H3 className={classes.specialization}>
            <Specialization id={line} />
          </H3>
          <TraitLine id={line} defaultSelected={traits.selection[index]} />
        </div>
      ))}
    </>
  );
};

export default React.memo(Traits);
