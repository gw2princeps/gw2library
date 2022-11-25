/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { Build } from "src/types/Build";
import logo from "public/logo.svg";

export const config = {
  runtime: "experimental-edge",
};

const specializationImages: Record<string, string> = {
  warrior:
    "https://wiki.guildwars2.com/images/d/db/Warrior_tango_icon_200px.png",
  berserker:
    "https://wiki.guildwars2.com/images/8/80/Berserker_tango_icon_200px.png",
  spellbreaker:
    "https://wiki.guildwars2.com/images/7/78/Spellbreaker_tango_icon_200px.png",
  bladesworn:
    "https://wiki.guildwars2.com/images/c/c1/Bladesworn_tango_icon_200px.png",
  guardian:
    "https://wiki.guildwars2.com/images/6/6c/Guardian_tango_icon_200px.png",
  dragonhunter:
    "https://wiki.guildwars2.com/images/1/1f/Dragonhunter_tango_icon_200px.png",
  firebrand:
    "https://wiki.guildwars2.com/images/7/73/Firebrand_tango_icon_200px.png",
  willbender:
    "https://wiki.guildwars2.com/images/5/57/Willbender_tango_icon_200px.png",
  revenant:
    "https://wiki.guildwars2.com/images/a/a8/Revenant_tango_icon_200px.png",
  herald: "https://wiki.guildwars2.com/images/c/c7/Herald_tango_icon_200px.png",
  renegade:
    "https://wiki.guildwars2.com/images/b/bc/Renegade_tango_icon_200px.png",
  vindicator:
    "https://wiki.guildwars2.com/images/f/f0/Vindicator_tango_icon_200px.png",
  necromancer:
    "https://wiki.guildwars2.com/images/c/cd/Necromancer_tango_icon_200px.png",
  reaper: "https://wiki.guildwars2.com/images/9/95/Reaper_tango_icon_200px.png",
  scourge:
    "https://wiki.guildwars2.com/images/8/8a/Scourge_tango_icon_200px.png",
  harbinger:
    "https://wiki.guildwars2.com/images/b/b3/Harbinger_tango_icon_200px.png",
  engineer:
    "https://wiki.guildwars2.com/images/2/2f/Engineer_tango_icon_200px.png",
  scrapper:
    "https://wiki.guildwars2.com/images/3/3a/Scrapper_tango_icon_200px.png",
  holosmith:
    "https://wiki.guildwars2.com/images/a/ae/Holosmith_tango_icon_200px.png",
  mechanist:
    "https://wiki.guildwars2.com/images/8/8a/Mechanist_tango_icon_200px.png",
  ranger: "https://wiki.guildwars2.com/images/5/51/Ranger_tango_icon_200px.png",
  druid: "https://wiki.guildwars2.com/images/6/6d/Druid_tango_icon_200px.png",
  soulbeast:
    "https://wiki.guildwars2.com/images/f/f6/Soulbeast_tango_icon_200px.png",
  untamed:
    "https://wiki.guildwars2.com/images/3/33/Untamed_tango_icon_200px.png",
  thief: "https://wiki.guildwars2.com/images/1/19/Thief_tango_icon_200px.png",
  daredevil:
    "https://wiki.guildwars2.com/images/c/ca/Daredevil_tango_icon_200px.png",
  deadeye:
    "https://wiki.guildwars2.com/images/b/b0/Deadeye_tango_icon_200px.png",
  specter: "https://wiki.guildwars2.com/images/a/aa/User_Soulblydd_Specter.png",
  elementalist:
    "https://wiki.guildwars2.com/images/a/a0/Elementalist_tango_icon_200px.png",
  tempest:
    "https://wiki.guildwars2.com/images/9/90/Tempest_tango_icon_200px.png",
  weaver: "https://wiki.guildwars2.com/images/3/31/Weaver_tango_icon_200px.png",
  catalyst:
    "https://wiki.guildwars2.com/images/9/92/Catalyst_tango_icon_200px.png",
  mesmer: "https://wiki.guildwars2.com/images/7/73/Mesmer_tango_icon_200px.png",
  chronomancer:
    "https://wiki.guildwars2.com/images/8/8b/Chronomancer_tango_icon_200px.png",
  mirage: "https://wiki.guildwars2.com/images/a/a9/Mirage_tango_icon_200px.png",
  virtuoso:
    "https://wiki.guildwars2.com/images/c/cd/Virtuoso_tango_icon_200px.png",
};

const font = fetch(
  new URL(
    "../../node_modules/@discretize/typeface-menomonia/files/menomonia.ttf",
    import.meta.url
  )
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const buildid = searchParams.get("buildid");
  if (!buildid) {
    return null;
  }

  const build = await fetch(
    `https://gw2library.princeps.biz/api/builds/get/${buildid}`
  );
  const buildJson: Build = await build.json();

  const skills: (number | undefined)[] = [
    buildJson.character.skills?.healId,
    buildJson.character.skills?.utility1Id,
    buildJson.character.skills?.utility2Id,
    buildJson.character.skills?.utility3Id,
    buildJson.character.skills?.eliteId,
  ];
  const skillIcons = await Promise.all(
    skills.map(async (skill) => {
      if (skill) {
        const data = await fetch(
          `https://api.guildwars2.com/v2/skills/${skill}`
        );
        const skillJson = await data.json();
        return skillJson.icon;
      } else {
        return "https://cdn.discordapp.com/attachments/982361187704533002/1045495439786520596/Empty.png";
      }
    })
  );

  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          fontSize: 60,
          fontFamily: "Menomonia",
          color: "whitesmoke",
          background: "#404854",
          width: "100%",
          height: "100%",
          padding: "0 30px",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 30,
            color: "whitesmoke",
          }}
        >
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="50px"
            height="50px"
            viewBox="0 0 490 490"
            xmlSpace="preserve"
          >
            <g>
              <path
                fill="currentcolor"
                d="M483,431.629h-80.975l28.668-8.963c4.753-1.48,8.643-4.723,10.953-9.129c2.31-4.405,2.764-9.448,1.279-14.198
		L336.088,57.447c-2.438-7.822-9.57-13.077-17.752-13.077c-1.885,0-3.758,0.288-5.56,0.853l-65.677,20.52
		c-0.63,0.196-1.24,0.426-1.833,0.682v-2.704c0-10.263-8.346-18.613-18.604-18.613h-69.24c-4.392,0-8.426,1.539-11.611,4.094
		c-3.191-2.555-7.233-4.094-11.633-4.094H64.855c-10.269,0-18.625,8.35-18.625,18.613v367.908H7c-3.866,0-7,3.134-7,7
		c0,3.866,3.134,7,7,7h476c3.866,0,7-3.134,7-7C490,434.763,486.866,431.629,483,431.629z M429.247,407.037
		c-0.572,1.092-1.537,1.896-2.725,2.265l-65.67,20.531c-0.448,0.141-0.908,0.211-1.368,0.211c-2.003,0-3.82-1.337-4.418-3.251
		l-78.76-252.064l74.492-23.267l78.764,252.053C429.932,404.695,429.819,405.946,429.247,407.037z M346.623,138.1l-74.492,23.267
		l-8.518-27.26l74.49-23.271L346.623,138.1z M251.271,79.108l65.687-20.523c0.452-0.142,0.916-0.214,1.378-0.214
		c2.02,0,3.781,1.302,4.387,3.247l11.205,35.856l-74.49,23.271l-11.195-35.83C247.484,82.47,248.842,79.866,251.271,79.108z
		 M341.939,431.629h-96.674v-309.3L341.939,431.629z M152.817,207.605h78.448v19.492h-78.448V207.605z M231.266,193.605h-78.448
		v-68.511h78.448V193.605z M138.817,143.682H60.23v-18.588h78.587V143.682z M60.23,157.682h78.587v18.599H60.23V157.682z
		 M152.817,241.097h78.448v190.533h-78.448V241.097z M157.422,59.108h69.24c2.538,0,4.604,2.069,4.604,4.613v47.372h-78.448V63.722
		C152.817,61.178,154.883,59.108,157.422,59.108z M64.855,59.108h69.322c2.559,0,4.64,2.069,4.64,4.613v47.372H60.23V63.722
		C60.23,61.178,62.306,59.108,64.855,59.108z M60.23,190.281h78.587v241.349H60.23V190.281z"
                style={{ fill: "whitesmoke" }}
              />
            </g>
          </svg>

          <p>GW2Library</p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <img
            width="256"
            height="256"
            src={
              specializationImages[
                buildJson.character.attributes.specialization.toLowerCase()
              ]
            }
            style={{
              borderRadius: 128,
            }}
          />

          {buildJson.name}

          <div style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
            {skillIcons.map((skillIcon, index) => (
              <img key={skillIcon} src={skillIcon} width="64" height="64" />
            ))}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Menomonia",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
