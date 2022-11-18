import {
  Alignment,
  Button,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  IconName,
} from "@blueprintjs/core";
import { useDarkMode, useWindowSize } from "usehooks-ts";
import classes from "@/styles/NavBar.module.css";
import React from "react";
import Link from "next/link";
import LoginButton from "@/components/LoginButton";

const NavBar = function NavBar() {
  const [icon, setIcon] = React.useState<IconName>("moon");

  const { isDarkMode, toggle } = useDarkMode(true);
  const size = useWindowSize();
  const minimal = size.width < 420;

  React.useEffect(() => {
    if (isDarkMode) {
      setIcon("flash");
    } else {
      setIcon("moon");
    }
  }, [isDarkMode]);

  return (
    <Navbar className={classes.navbar}>
      {!minimal && (
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>
            <Link href="/">GW2Library</Link>
          </NavbarHeading>
        </NavbarGroup>
      )}
      <NavbarGroup align={Alignment.RIGHT}>
        <div>
          <Button
            minimal={true}
            icon={icon}
            // @ts-ignore
            onClick={() => toggle()}
          />
        </div>

        <NavbarDivider />
        <LoginButton />
        <Link href="/builds/add">
          <Button intent="primary" icon="add" text="Add Build" />
        </Link>
      </NavbarGroup>
    </Navbar>
  );
};

export default React.memo(NavBar);
