import { Button, Menu, MenuItem } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import classes from "@/styles/AccountButton.module.css";

const AccountButton = () => {
  const { data } = useSession();

  if (!data) {
    return null;
  }

  return (
    <>
      <Popover2
        position="bottom-right"
        interactionKind="click"
        content={
          <>
            <Menu>
              <Link href="/account/list" className={classes.link}>
                <MenuItem text="My builds" />
              </Link>
              <MenuItem
                icon="log-out"
                text="Sign out"
                onClick={() => signOut()}
              />
            </Menu>
          </>
        }
      >
        <Button icon="user" large minimal className={classes.ml4} />
      </Popover2>
    </>
  );
};

export default React.memo(AccountButton);
