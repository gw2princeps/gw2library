import { Button, Classes, HTMLTable, NonIdealState } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import { Profession } from "@discretize/gw2-ui-new";
import Link from "next/link";
import React from "react";
import { Build } from "src/types/Build";
import useSWR from "swr";
import SettingsMenu from "../settingsMenu/SettingsMenu";
import classes from "./Table.module.css";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Table = () => {
  const { data, error } = useSWR<(Build & { id: string })[]>(
    "/api/account/list",
    fetcher
  );
  const loading = !data;

  console.log(`State: ${loading} ${error} ${data}`);

  if (error) {
    return <NonIdealState title="Error" description="An error occured" />;
  }

  if (loading) {
    return (
      <HTMLTable
        className={`${classes.table} ${Classes.SKELETON} ${classes.tableloading}`}
        striped
      />
    );
  }

  if (data && data.length === 0) {
    return (
      <NonIdealState
        title="No builds"
        description="You have to add a build before it shows up here."
        icon="build"
        action={
          <Link href="/builds/add">
            <Button intent="primary" icon="add" text="Add Build" />
          </Link>
        }
      />
    );
  }

  return (
    <HTMLTable className={classes.table} striped>
      <thead>
        <tr>
          <th>Name</th>
          <th>Created</th>

          <th></th>
        </tr>
      </thead>
      <tbody>
        {data?.map((build) => (
          <tr key={build.id}>
            <td>
              <Profession
                disableText
                className={classes.bigIcon}
                name={build.character.attributes.specialization}
              />{" "}
              {build.name}
            </td>
            <td>{new Date(build.timestamp).toLocaleString()}</td>
            <td>
              <SettingsMenu id={build.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </HTMLTable>
  );
};

export default React.memo(Table);
