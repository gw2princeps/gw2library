import { H1, HTMLTable } from "@blueprintjs/core";

export default function Legal() {
  return (
    <>
      <h1 style={{ marginTop: "1rem" }}>Legal Notice</h1>

      <p>
        NCSOFT, the interlocking NC logo, ArenaNet, Guild Wars, Guild Wars
        Factions, Guild Wars Nightfall, Guild Wars: Eye of the North, Guild Wars
        2, and all associated logos and designs are trademarks or registered
        trademarks of NCSOFT Corporation. All other trademarks are the property
        of their respective owners.
      </p>

      <h2>Open Source</h2>
      <p>
        This website is open source under the AGPL license. The source code can
        be found <a href="https://github.com/gw2princeps/gw2library">here</a>.
      </p>

      <h2>Contact</h2>
      <p>E-Mail: gw2library@princeps.biz</p>
    </>
  );
}
