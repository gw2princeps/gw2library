import { Button, Classes, HTMLTable, NonIdealState } from "@blueprintjs/core";
import { Profession, Skill, Specialization } from "@discretize/gw2-ui-new";
import { NoSelection } from "@discretize/react-discretize-components";
import Link from "next/link";
import React from "react";
import { Build } from "src/types/Build";
import useSWR from "swr";
import SettingsMenu from "../settingsMenu/SettingsMenu";
import classes from "./Table.module.css";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export type TabledBuild = Build & { id: string };

const Table = () => {
  const { data, error } = useSWR<TabledBuild[]>("/api/account/list", fetcher);
  const loading = !data;

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

  function TabledSkill({ id }: { id: number | undefined }) {
    if (!id) return <NoSelection className={classes.bigIcon} />;
    return <Skill id={id} className={classes.bigIcon} disableText />;
  }

  return (
    <HTMLTable className={classes.table} striped>
      <thead>
        <tr>
          <th>Name</th>
          <th>Specializations</th>
          <th>Skills</th>
          <th>Created</th>

          <th></th>
        </tr>
      </thead>
      <tbody>
        {data?.map((build) => (
          <tr key={build.id}>
            <td>
              <Link href={`/builds/edit/${build.id}`}>
                <Profession
                  disableText
                  className={classes.bigIcon}
                  name={build.character.attributes.specialization}
                />{" "}
                {build.name}
              </Link>
            </td>
            <td>
              {build.character.traits.lines.map((lineId) => (
                <Specialization
                  key={lineId}
                  id={lineId}
                  disableText
                  className={classes.bigIcon}
                />
              ))}
            </td>
            <td>
              <TabledSkill id={build.character.skills?.healId} />
              <TabledSkill id={build.character.skills?.utility1Id} />
              <TabledSkill id={build.character.skills?.utility2Id} />
              <TabledSkill id={build.character.skills?.utility3Id} />
              <TabledSkill id={build.character.skills?.eliteId} />
            </td>
            <td>{new Date(build.timestamp).toLocaleString()}</td>
            <td>
              <SettingsMenu id={build.id} data={data} />
            </td>
          </tr>
        ))}
      </tbody>
    </HTMLTable>
  );
};

export default React.memo(Table);
