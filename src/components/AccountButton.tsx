import { Button, Menu, MenuItem } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import { signOut, useSession } from "next-auth/react";
import React from "react";

const AccountButton = () => {
  const { data } = useSession();

  if (!data) {
    return null;
  }

  return (
    <>
      <Popover2
        position="bottom-right"
        interactionKind="hover"
        content={
          <>
            <Menu>
              <MenuItem
                icon="log-out"
                text="Sign out"
                onClick={() => signOut()}
              />
            </Menu>
          </>
        }
      >
        <Button icon="user" large minimal style={{ marginLeft: 4 }} />
      </Popover2>
    </>
  );
};

export default React.memo(AccountButton);
