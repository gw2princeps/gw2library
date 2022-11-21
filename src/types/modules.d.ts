declare module "@discretize/remark-mdx-gw2ui" {
  import { Plugin } from "unified";

  interface Options {
    // ...
  }

  const plugin: Plugin<[Options?]>;
  export = plugin;
}
