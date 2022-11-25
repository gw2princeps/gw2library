import { H1, Tag } from "@blueprintjs/core";
import { Profession } from "@discretize/gw2-ui-new";
import React from "react";
import classes from "@/styles/BuildHeader.module.css";

const BuildHeader = ({
  specialization,
  timestamp,
  name,
}: {
  specialization: React.ComponentProps<typeof Profession>["name"];
  timestamp: string;
  name: string;
}) => {
  const [localeTimestamp, setLocaleTimestamp] = React.useState(
    new Date(timestamp).toUTCString()
  );

  React.useEffect(() => {
    setLocaleTimestamp(new Date(timestamp).toLocaleString());
  }, [timestamp]);

  return (
    <div className={classes.root}>
      <H1>
        {specialization ? (
          <Profession name={specialization} disableText />
        ) : undefined}{" "}
        {name}
      </H1>

      <Tag round minimal>
        {localeTimestamp}
      </Tag>
    </div>
  );
};

export default React.memo(BuildHeader);
