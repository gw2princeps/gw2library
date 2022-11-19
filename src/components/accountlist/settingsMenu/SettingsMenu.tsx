import { Button, Menu, MenuDivider, MenuItem } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import Link from "next/link";
import React from "react";
import classes from "./SettingsMenu.module.css";

const SettingsMenu = ({ id }: { id: string }) => {
  const deleteBuild = () => {
    fetch(`/api/builds/delete/${id}`, {
      method: "DELETE",
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <Popover2
      position="bottom-right"
      interactionKind="click"
      content={
        <>
          <Menu className={classes.menu}>
            <Link href={`/builds/${id}`}>
              <MenuItem text="Show" icon="home" />
            </Link>
            <MenuItem text="Edit" icon="edit" />
            <MenuDivider />

            <MenuItem
              text="Delete"
              icon="delete"
              intent="danger"
              onClick={deleteBuild}
            />
          </Menu>
        </>
      }
    >
      <Button minimal icon="more" />
    </Popover2>
  );
};

export default React.memo(SettingsMenu);
