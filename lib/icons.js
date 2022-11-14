import {
  Home,
  Document,
} from "@blueprintjs/icons/lib/esm/generated/16px/paths";
import {
  Home as Home20,
  Document as Document20,
} from "@blueprintjs/icons/lib/esm/generated/20px/paths";
import { pascalCase } from "change-case";

export function iconNameToPathsRecordKey(name) {
  return pascalCase(name);
}

export const IconSvgPaths16 = {
  Home,
  Document,
};

export const IconSvgPaths20 = { Cog: Home20, Document: Document20 };
