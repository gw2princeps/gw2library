import { Button, ButtonGroup, Text } from "@blueprintjs/core";
import React from "react";
import classes from "@/styles/TopBar.module.css";
import Image from "next/image";
import discretizeLogo from "src/assets/icons/discretize.png";
import { AppToaster } from "src/utils/toaster";

const TopBar = ({
  optimizerLink,
  gw2skillsLink,
  chatcode,
}: {
  optimizerLink?: string;
  gw2skillsLink?: string;
  chatcode: string;
}) => {
  const [copied, setCopied] = React.useState(false);

  const onClick = () => {
    navigator.clipboard.writeText("test");
    AppToaster?.show({
      message: "Copied to clipboard",
      intent: "success",
      isCloseButtonShown: true,
    });
    setCopied(true);
    setTimeout(() => setCopied(false), 3500);
  };
  return (
    <ButtonGroup large className={classes.buttongroup}>
      {gw2skillsLink ? (
        <a href={gw2skillsLink}>
          <Button>
            <span className={classes.optimizerButton}>
              <Text>GW2Skills.net</Text>
            </span>
          </Button>
        </a>
      ) : undefined}
      {optimizerLink ? (
        <a href={optimizerLink}>
          <Button>
            <span className={classes.optimizerButton}>
              <Image
                src={discretizeLogo}
                alt="Discretize Logo"
                width={20}
                className={classes.discretizeLogo}
              />
              <Text>Optimizer Settings</Text>
            </span>
          </Button>
        </a>
      ) : undefined}

      <Button
        intent={copied ? "success" : "none"}
        icon={copied ? "tick" : "clipboard"}
        onClick={onClick}
      >
        Chat Code <code className={classes.chatcode}>{chatcode}</code>
      </Button>
    </ButtonGroup>
  );
};

export default React.memo(TopBar);
