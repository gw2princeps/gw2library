import guardian from "src/assets/professions/guardian.png";
import warrior from "src/assets/professions/warrior.png";
import engineer from "src/assets/professions/engineer.png";
import ranger from "src/assets/professions/ranger.png";
import thief from "src/assets/professions/thief.png";
import elementalist from "src/assets/professions/elementalist.png";
import mesmer from "src/assets/professions/mesmer.png";
import necromancer from "src/assets/professions/necromancer.png";
import revenant from "src/assets/professions/revenant.png";
import berserker from "src/assets/professions/berserker.png";
import dragonhunter from "src/assets/professions/dragonhunter.png";
import firebrand from "src/assets/professions/firebrand.png";
import herald from "src/assets/professions/herald.png";
import renegade from "src/assets/professions/renegade.png";
import scourge from "src/assets/professions/scourge.png";
import soulbeast from "src/assets/professions/soulbeast.png";
import spellbreaker from "src/assets/professions/spellbreaker.png";
import tempest from "src/assets/professions/tempest.png";
import weaver from "src/assets/professions/weaver.png";
import holosmith from "src/assets/professions/holosmith.png";
import deadeye from "src/assets/professions/deadeye.png";
import druid from "src/assets/professions/druid.png";
import daredevil from "src/assets/professions/daredevil.png";
import scrapper from "src/assets/professions/scrapper.png";
import mechanist from "src/assets/professions/mechanist.png";
import chronomancer from "src/assets/professions/chronomancer.png";
import mirage from "src/assets/professions/mirage.png";
import reaper from "src/assets/professions/reaper.png";
import virtuoso from "src/assets/professions/virtuoso.png";
import vindicator from "src/assets/professions/vindicator.png";
import willbender from "src/assets/professions/willbender.png";
import untamed from "src/assets/professions/untamed.png";
import harbinger from "src/assets/professions/harbinger.png";
import catalyst from "src/assets/professions/catalyst.png";
import bladesworn from "src/assets/professions/bladesworn.png";
import specter from "src/assets/professions/specter.png";
import Image from "next/image";
import React from "react";
import { Profession } from "@discretize/gw2-ui-new";

// eslint-disable-next-line react/display-name
const Wrap = (props: any) => (
  <div style={{ position: "relative", height: "100%" }}>{props.children}</div>
);

const style: React.CSSProperties = {
  objectFit: "contain",
  position: "absolute",
};

const GuardianImage = (
  <Wrap>
    <Image src={guardian} alt="Guardian" fill sizes="550px" style={style} />
  </Wrap>
);
const DragonhunterImage = (
  <Wrap>
    <Image
      src={dragonhunter}
      alt="Dragonhunter"
      fill
      sizes="550px"
      style={style}
    />
  </Wrap>
);
const FirebrandImage = (
  <Wrap>
    <Image src={firebrand} alt="Firebrand" fill sizes="550px" style={style} />
  </Wrap>
);
const WillbenderImage = (
  <Wrap>
    <Image src={willbender} alt="Willbender" fill sizes="550px" style={style} />
  </Wrap>
);
const WarriorImage = (
  <Wrap>
    <Image src={warrior} alt="Warrior" fill sizes="550px" style={style} />
  </Wrap>
);
const BerserkerImage = (
  <Wrap>
    <Image src={berserker} alt="Berserker" fill sizes="550px" style={style} />
  </Wrap>
);
const SpellbreakerImage = (
  <Wrap>
    <Image
      src={spellbreaker}
      alt="Spellbreaker"
      fill
      sizes="550px"
      style={style}
    />
  </Wrap>
);
const BladeswornImage = (
  <Wrap>
    <Image src={bladesworn} alt="Bladesworn" fill sizes="550px" style={style} />
  </Wrap>
);
const RevenantImage = (
  <Wrap>
    <Image src={revenant} alt="Revenant" fill sizes="550px" style={style} />
  </Wrap>
);
const HeraldImage = (
  <Wrap>
    <Image src={herald} alt="Herald" fill sizes="550px" style={style} />
  </Wrap>
);
const RenegadeImage = (
  <Wrap>
    <Image src={renegade} alt="Renegade" fill sizes="550px" style={style} />
  </Wrap>
);
const VindicatorImage = (
  <Wrap>
    <Image src={vindicator} alt="Vindicator" fill sizes="550px" style={style} />
  </Wrap>
);
const EngineerImage = (
  <Wrap>
    <Image src={engineer} alt="Engineer" fill sizes="550px" style={style} />
  </Wrap>
);
const ScrapperImage = (
  <Wrap>
    <Image src={scrapper} alt="Scrapper" fill sizes="550px" style={style} />
  </Wrap>
);
const HolosmithImage = (
  <Wrap>
    <Image src={holosmith} alt="Holosmith" fill sizes="550px" style={style} />
  </Wrap>
);
const MechanistImage = (
  <Wrap>
    <Image src={mechanist} alt="Mechanist" fill sizes="550px" style={style} />
  </Wrap>
);
const RangerImage = (
  <Wrap>
    <Image src={ranger} alt="Ranger" fill sizes="550px" style={style} />
  </Wrap>
);
const DruidImage = (
  <Wrap>
    <Image src={druid} alt="Druid" fill sizes="550px" style={style} />
  </Wrap>
);
const SoulbeastImage = (
  <Wrap>
    <Image src={soulbeast} alt="Soulbeast" fill sizes="550px" style={style} />
  </Wrap>
);
const UntamedImage = (
  <Wrap>
    <Image src={untamed} alt="Untamed" fill sizes="550px" style={style} />
  </Wrap>
);
const ThiefImage = (
  <Wrap>
    <Image src={thief} alt="Thief" fill sizes="550px" style={style} />
  </Wrap>
);
const DaredevilImage = (
  <Wrap>
    <Image src={daredevil} alt="Daredevil" fill sizes="550px" style={style} />
  </Wrap>
);
const DeadeyeImage = (
  <Wrap>
    <Image src={deadeye} alt="Deadeye" fill sizes="550px" style={style} />
  </Wrap>
);
const SpecterImage = (
  <Wrap>
    <Image src={specter} alt="Specter" fill sizes="550px" style={style} />
  </Wrap>
);
const ElementalistImage = (
  <Wrap>
    <Image
      src={elementalist}
      alt="Elementalist"
      fill
      sizes="550px"
      style={style}
    />
  </Wrap>
);
const TempestImage = (
  <Wrap>
    <Image src={tempest} alt="Tempest" fill sizes="550px" style={style} />
  </Wrap>
);
const WeaverImage = (
  <Wrap>
    <Image src={weaver} alt="Weaver" fill sizes="550px" style={style} />
  </Wrap>
);
const CatalystImage = (
  <Wrap>
    <Image src={catalyst} alt="Catalyst" fill sizes="550px" style={style} />
  </Wrap>
);
const MesmerImage = (
  <Wrap>
    <Image src={mesmer} alt="Mesmer" fill sizes="550px" style={style} />
  </Wrap>
);
const ChronomancerImage = (
  <Wrap>
    <Image
      src={chronomancer}
      alt="Chronomancer"
      fill
      sizes="550px"
      style={style}
    />
  </Wrap>
);
const MirageImage = (
  <Wrap>
    <Image src={mirage} alt="Mirage" fill sizes="550px" style={style} />
  </Wrap>
);
const VirtuosoImage = (
  <Wrap>
    <Image src={virtuoso} alt="Virtuoso" fill sizes="550px" style={style} />
  </Wrap>
);
const NecromancerImage = (
  <Wrap>
    <Image
      src={necromancer}
      alt="Necromancer"
      fill
      sizes="550px"
      style={style}
    />
  </Wrap>
);
const ReaperImage = (
  <Wrap>
    <Image src={reaper} alt="Reaper" fill sizes="550px" style={style} />
  </Wrap>
);
const ScourgeImage = (
  <Wrap>
    <Image src={scourge} alt="Scourge" fill sizes="550px" style={style} />
  </Wrap>
);
const HarbingerImage = (
  <Wrap>
    <Image src={harbinger} alt="Harbinger" fill sizes="550px" style={style} />
  </Wrap>
);

type ProfessionType = React.ComponentProps<typeof Profession>["name"];
const images: Record<ProfessionType, React.ReactNode> = {
  Guardian: GuardianImage,
  Dragonhunter: DragonhunterImage,
  Firebrand: FirebrandImage,
  Willbender: WillbenderImage,
  Warrior: WarriorImage,
  Berserker: BerserkerImage,
  Spellbreaker: SpellbreakerImage,
  Bladesworn: BladeswornImage,
  Revenant: RevenantImage,
  Herald: HeraldImage,
  Renegade: RenegadeImage,
  Vindicator: VindicatorImage,
  Engineer: EngineerImage,
  Scrapper: ScrapperImage,
  Holosmith: HolosmithImage,
  Mechanist: MechanistImage,
  Ranger: RangerImage,
  Druid: DruidImage,
  Soulbeast: SoulbeastImage,
  Untamed: UntamedImage,
  Thief: ThiefImage,
  Daredevil: DaredevilImage,
  Deadeye: DeadeyeImage,
  Specter: SpecterImage,
  Elementalist: ElementalistImage,
  Tempest: TempestImage,
  Weaver: WeaverImage,
  Catalyst: CatalystImage,
  Mesmer: MesmerImage,
  Chronomancer: ChronomancerImage,
  Mirage: MirageImage,
  Virtuoso: VirtuosoImage,
  Necromancer: NecromancerImage,
  Reaper: ReaperImage,
  Scourge: ScourgeImage,
  Harbinger: HarbingerImage,
};

const getImage = (name: ProfessionType) => images[name] || GuardianImage;
export default getImage;

export { warrior };
