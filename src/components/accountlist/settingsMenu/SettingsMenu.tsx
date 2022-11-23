import { Button, Menu, MenuDivider, MenuItem } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import Link from "next/link";
import React from "react";
import { useSWRConfig } from "swr";
import { TabledBuild } from "../table/Table";
import classes from "./SettingsMenu.module.css";

const SettingsMenu = ({ id, data }: { id: string; data: TabledBuild[] }) => {
  const { mutate } = useSWRConfig();

  const deleteBuild = () => {
    mutate(
      "/api/account/list",
      async () => {
        await fetch(`/api/builds/delete/${id}`, {
          method: "DELETE",
        });
        return data.filter((build) => build.id !== id);
      },
      { optimisticData: data.filter((build) => build.id !== id) }
    );
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
