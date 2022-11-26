import {
  Home,
  LogIn,
  Flash,
  Moon,
  Add,
  Upload,
  Cross,
  Clipboard,
  Tick,
  Error,
  User,
  LogOut,
  More,
  Edit,
  Delete,
  EyeOpen,
  Share,
} from "@blueprintjs/icons/lib/esm/generated/16px/paths";
import {
  Home as Home20,
  LogIn as LogIn20,
  Flash as Flash20,
  Moon as Moon20,
  Error as Error20,
  EyeOpen as EyeOpen20,
} from "@blueprintjs/icons/lib/esm/generated/20px/paths";
import { pascalCase } from "change-case";

export function iconNameToPathsRecordKey(name) {
  return pascalCase(name);
}

export const IconSvgPaths16 = {
  Home,
  LogIn,
  Flash,
  Moon,
  Add,
  Upload,
  Cross,
  Clipboard,
  Tick,
  Error,
  User,
  LogOut,
  More,
  Edit,
  Delete,
  EyeOpen,
  Share,
};

export const IconSvgPaths20 = {
  Cog: Home20,
  LogIn: LogIn20,
  Flash: Flash20,
  Moon: Moon20,
  Error: Error20,
  EyeOpen: EyeOpen20,
};
