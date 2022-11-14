import {
  Alignment,
  Button,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Classes,
  MaybeElement,
  IconName,
} from "@blueprintjs/core";
import { useDarkMode } from "usehooks-ts";
import classes from "@/styles/NavBar.module.css";
import { Attribute } from "@discretize/gw2-ui-new";
import React from "react";

const NavBar = function NavBar() {
  const { isDarkMode, toggle } = useDarkMode();
  const [icon, setIcon] = React.useState<IconName>("moon");

  React.useEffect(() => {
    if (isDarkMode) {
      setIcon("flash");
    } else {
      setIcon("moon");
    }
  }, [isDarkMode]);

  return (
    <Navbar className={classes.navbar}>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>
          <Attribute name="Armor" disableText inline /> GW2Library{" "}
          <Attribute name="Power" disableText inline />
        </NavbarHeading>
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <Button
          minimal={true}
          icon={icon}
          // @ts-ignore
          onClick={() => toggle()}
        />
        <NavbarDivider />
        <Button className={Classes.MINIMAL} icon="log-in" text="Login" />
      </NavbarGroup>
    </Navbar>
  );
};

export default React.memo(NavBar);
