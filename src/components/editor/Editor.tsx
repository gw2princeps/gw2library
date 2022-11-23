import React from "react";
import AceEditor from "react-ace";
import classes from "./Editor.module.css";
import { ACE_PROPS } from "./index";

import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-nord_dark";

import "@discretize/gw2-ui-new/dist/default_style.css";
import "@discretize/gw2-ui-new/dist/index.css";
import "@discretize/react-discretize-components/dist/index.css";
import "@discretize/typeface-menomonia";

const Editor = ({
  mdx,
  setMdx,
}: {
  mdx: string;
  setMdx: (newVal: string) => void;
}) => {
  return (
    <AceEditor
      className={classes.editor}
      height="100%"
      theme="nord_dark"
      onChange={(e) => setMdx(e)}
      editorProps={{ $blockScrolling: true }}
      value={mdx}
      {...ACE_PROPS}
    />
  );
};

export default React.memo(Editor);
