import { Button, Classes, Text } from "@blueprintjs/core";
import React from "react";
import { AppToaster } from "src/utils/toaster";
import classes from "@/styles/ChatCode.module.css";

const ChatCode = ({ code }: { code: string }) => {
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
    <span className={classes.root}>
      <Text>Build template:</Text>
      <code className={classes.code}>
        {code}{" "}
        <Button
          onClick={onClick}
          icon={copied ? "tick" : "clipboard"}
          intent={copied ? "success" : "primary"}
          className={`${Classes.FOCUS_STYLE_MANAGER_IGNORE} ${classes.copyButton}`}
          minimal
          small
        />
      </code>
    </span>
  );
};

export default React.memo(ChatCode);
