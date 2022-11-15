import { NextRequest } from "next/server";

const char = {
  attributes: {
    profession: "Guardian",
    data: {
      Health: 25235,
      Armor: 2514,
      Power: 2372,
      Precision: 1369,
      Toughness: 1243,
      Vitality: 2359,
      Ferocity: 150,
      "Condition Damage": 2787,
      Expertise: 633,
      Concentration: 587,
      "Healing Power": 250,
      "Agony Resistance": 162,
      "Condition Duration": 0.42200000000000004,
      "Boon Duration": 0.4913333333333333,
      "Critical Chance": 0.5757142857142857,
      "Critical Damage": 1.6,
      "Power Coefficient": 2263.495,
      "Power2 Coefficient": 0,
      "Burning Coefficient": 14.233300000000002,
      "Bleeding Coefficient": 2.46,
      "Poison Coefficient": 0,
      "Torment Coefficient": 0,
      "Confusion Coefficient": 0,
      "Flat DPS": 0,
      "Burning Duration": 0.55,
      "Resolution Duration": 0.25,
      "Quickness Duration": 0.3,
      "Effective Power": 5046.332578571428,
      "NonCrit Effective Power": 3750.7249999999995,
      "Power DPS": 4398.285929893544,
      "Power2 DPS": 0,
      "Siphon DPS": 0,
      "Bleeding Damage": 283.83,
      "Bleeding Stacks": 3.49812,
      "Bleeding DPS": 992.8713996,
      "Burning Damage": 928.9252500000001,
      "Burning Stacks": 28.068067600000003,
      "Burning DPS": 26073.136712346906,
      "Confusion Damage": 334.6545,
      "Confusion Stacks": 0,
      "Confusion DPS": 0,
      "Poison Damage": 301.08,
      "Poison Stacks": 0,
      "Poison DPS": 0,
      "Torment Damage": 423.945,
      "Torment Stacks": 0,
      "Torment DPS": 0,
      Damage: 31464.29404184045,
      "Effective Health": 126250328.35820897,
      Survivability: 64184.203537472786,
      "Effective Healing": 465,
      Healing: 465,
    },
  },
  armor: {
    weight: "Heavy",
    helmAffix: "Viper",
    helmRuneId: 83338,
    helmRune: "Firebrand",
    helmRuneCount: 6,
    helmInfusionId: 49432,
    shouldersAffix: "Ritualist",
    shouldersRuneId: 83338,
    shouldersRune: "Firebrand",
    shouldersRuneCount: 6,
    shouldersInfusionId: 49432,
    coatAffix: "Ritualist",
    coatRuneId: 83338,
    coatRune: "Firebrand",
    coatRuneCount: 6,
    coatInfusionId: 49432,
    glovesAffix: "Ritualist",
    glovesRuneId: 83338,
    glovesRune: "Firebrand",
    glovesRuneCount: 6,
    glovesInfusionId: 49432,
    leggingsAffix: "Ritualist",
    leggingsRuneId: 83338,
    leggingsRune: "Firebrand",
    leggingsRuneCount: 6,
    leggingsInfusionId: 49432,
    bootsAffix: "Viper",
    bootsRuneId: 83338,
    bootsRune: "Firebrand",
    bootsRuneCount: 6,
    bootsInfusionId: 49432,
  },
  weapon: {
    weapon1MainType: "Mace",
    weapon1MainSigil1Id: 44944,
    weapon1MainAffix: "Ritualist",
    weapon1MainInfusion1Id: 49432,
    weapon1MainInfusion2Id: 49432,
    weapon1MainSigil2Id: 24624,
    weapon2OffType: "Sword",
    weapon2OffSigilId: 24624,
    weapon2OffAffix: "Ritualist",
    weapon2OffInfusionId: 49432,
  },
  backAndTrinket: {
    backItemAffix: "Viper",
    backItemInfusion1Id: 49432,
    backItemInfusion2Id: 49432,
    amuletAffix: "Ritualist",
    ring1Affix: "Viper",
    ring1Infusion1Id: 49432,
    ring1Infusion2Id: 49432,
    ring1Infusion3Id: 49432,
    ring2Affix: "Viper",
    ring2Infusion1Id: 49432,
    ring2Infusion2Id: 49432,
    ring2Infusion3Id: 49432,
    accessory1Affix: "Viper",
    accessory1InfusionId: 49432,
    accessory2Affix: "Viper",
    accessory2InfusionId: 49432,
  },
  consumables: { foodId: 97767, utilityId: 81079 },
  skills: {
    healId: "",
    utility1Id: "",
    utility2Id: "",
    utility3Id: "",
    eliteId: 30461,
  },
  assumedBuffs: {
    value: [
      { id: "might", type: "Boon" },
      { id: "fury", type: "Boon" },
      { id: "protection", type: "Boon" },
      { id: "vulnerability", type: "Condition" },
      { id: "jade-bot", gw2id: 96613, type: "Item" },
      { id: "omnipotion", gw2id: 79722, type: "Item" },
    ],
  },
};

const BUILDS = {
  cfb: {
    name: "Condi Firebrand",
    optimizerSettingsLink: "",
    description:
      'The **<Specialization text="Condi Firebrand" name="Firebrand"/>** can provide permanent <Boon name="Quickness"/> (if necessary) to the party while dealing high consistent DPS. Your tomes are by far your most important skills; they enable you to do great DPS as well as support and heal your allies. Tomes cover almost the entire toolbox of defensive capabilities such as boons like <Boon name="Stability"/>, <Boon name="Resistance"/>, but also reflects and pulls and condi cleanses. Knowing where to find these defensive skills is an important part of supporting your team as a DPS player.\n\nThis build has tremendous amounts of self-sustain and is therefore also a great build for soloing content:\n\n- Permanent <Boon name="Quickness"/>.\n- Some <Boon name="Might"/> uptime.\n- <Skill id="41780"/> for heals.\n- <Skill id="42259"/> for <Boon name="Stability"/>, <Boon name="Resistance"/>, reflects and damage reduction.\n- Optionally: <Skill name="litanyofwrath"/> for a 6s long high HP regeneration.\n\nOverall this build is one of the best picks for newer players, for PuGs as <Boon name="Quickness"/> provider, or for people that want to be more independent of their groups.\n\nThere are several different gear, utility, and trait setups that allow you to maintain quickness that can be situationally chosen. Check the [gear optimizer](https://optimizer.discretize.eu/) to adjust your gear for the boon durations listed below:\n\n- <Trait name="Liberators Vow"/>, <Trait name="Weighty Terms"/>, <Skill name="Mantra of Solace"/>, <Skill name="Mantra of Potence"/> and <Skill name="Feel My Wrath"/> - 41.7%bd\n- <Trait name="Liberators Vow"/>, <Trait name="Legendary Lore"/>, <Skill name="Mantra of Solace"/>, <Skill name="Mantra of Potence"/> and <Skill name="Feel My Wrath"/> - 69.8%bd\n- <Trait name="Liberators Vow"/>, <Trait name="Weighty Terms"/>, <Skill name="Mantra of Solace"/>, <Skill name="Mantra of Potence"/> and <Skill name="Mantra of Liberation"/> - 70.61bd\n',
    character: char,
    mdx: '/*@jsxRuntime automatic @jsxImportSource react*/\nconst {Fragment: _Fragment, jsx: _jsx, jsxs: _jsxs} = arguments[0];\nconst {useMDXComponents: _provideComponents} = arguments[0];\nfunction _createMdxContent(props) {\n  const _components = Object.assign({\n    p: "p",\n    strong: "strong",\n    ul: "ul",\n    li: "li",\n    a: "a"\n  }, _provideComponents(), props.components), {Profession, Boon, Skill, Trait} = _components;\n  if (!Boon) _missingMdxReference("Boon", true);\n  if (!Skill) _missingMdxReference("Skill", true);\n  if (!Profession) _missingMdxReference("Profession", true);\n  if (!Trait) _missingMdxReference("Trait", true);\n  return _jsxs(_Fragment, {\n    children: [_jsxs(_components.p, {\n      children: ["The ", _jsx(_components.strong, {\n        children: _jsx(Profession, {\n          text: "Condi Firebrand",\n          name: "Firebrand"\n        })\n      }), " can provide permanent ", _jsx(Boon, {\n        name: "Quickness"\n      }), " (if necessary) to the party while dealing high consistent DPS. Your tomes are by far your most important skills; they enable you to do great DPS as well as support and heal your allies. Tomes cover almost the entire toolbox of defensive capabilities such as boons like ", _jsx(Boon, {\n        name: "Stability"\n      }), ", ", _jsx(Boon, {\n        name: "Resistance"\n      }), ", but also reflects and pulls and condi cleanses. Knowing where to find these defensive skills is an important part of supporting your team as a DPS player."]\n    }), "\\n", _jsx(_components.p, {\n      children: "This build has tremendous amounts of self-sustain and is therefore also a great build for soloing content:"\n    }), "\\n", _jsxs(_components.ul, {\n      children: ["\\n", _jsxs(_components.li, {\n        children: ["Permanent ", _jsx(Boon, {\n          name: "Quickness"\n        }), "."]\n      }), "\\n", _jsxs(_components.li, {\n        children: ["Some ", _jsx(Boon, {\n          name: "Might"\n        }), " uptime."]\n      }), "\\n", _jsxs(_components.li, {\n        children: [_jsx(Skill, {\n          id: "41780",\n          id: "41780"\n        }), " for heals."]\n      }), "\\n", _jsxs(_components.li, {\n        children: [_jsx(Skill, {\n          id: "42259",\n          id: "42259"\n        }), " for ", _jsx(Boon, {\n          name: "Stability"\n        }), ", ", _jsx(Boon, {\n          name: "Resistance"\n        }), ", reflects and damage reduction."]\n      }), "\\n", _jsxs(_components.li, {\n        children: ["Optionally: ", _jsx(Skill, {\n          name: "litanyofwrath",\n          id: "21664"\n        }), " for a 6s long high HP regeneration."]\n      }), "\\n"]\n    }), "\\n", _jsxs(_components.p, {\n      children: ["Overall this build is one of the best picks for newer players, for PuGs as ", _jsx(Boon, {\n        name: "Quickness"\n      }), " provider, or for people that want to be more independent of their groups."]\n    }), "\\n", _jsxs(_components.p, {\n      children: ["There are several different gear, utility, and trait setups that allow you to maintain quickness that can be situationally chosen. Check the ", _jsx(_components.a, {\n        href: "https://optimizer.discretize.eu/",\n        children: "gear optimizer"\n      }), " to adjust your gear for the boon durations listed below:"]\n    }), "\\n", _jsxs(_components.ul, {\n      children: ["\\n", _jsxs(_components.li, {\n        children: [_jsx(Trait, {\n          name: "Liberators Vow",\n          id: "2101"\n        }), ", ", _jsx(Trait, {\n          name: "Weighty Terms",\n          id: "2063"\n        }), ", ", _jsx(Skill, {\n          name: "Mantra of Solace",\n          id: "41714"\n        }), ", ", _jsx(Skill, {\n          name: "Mantra of Potence",\n          id: "40915"\n        }), " and ", _jsx(Skill, {\n          name: "Feel My Wrath",\n          id: "29965"\n        }), " - 41.7%bd"]\n      }), "\\n", _jsxs(_components.li, {\n        children: [_jsx(Trait, {\n          name: "Liberators Vow",\n          id: "2101"\n        }), ", ", _jsx(Trait, {\n          name: "Legendary Lore",\n          id: "2116"\n        }), ", ", _jsx(Skill, {\n          name: "Mantra of Solace",\n          id: "41714"\n        }), ", ", _jsx(Skill, {\n          name: "Mantra of Potence",\n          id: "40915"\n        }), " and ", _jsx(Skill, {\n          name: "Feel My Wrath",\n          id: "29965"\n        }), " - 69.8%bd"]\n      }), "\\n", _jsxs(_components.li, {\n        children: [_jsx(Trait, {\n          name: "Liberators Vow",\n          id: "2101"\n        }), ", ", _jsx(Trait, {\n          name: "Weighty Terms",\n          id: "2063"\n        }), ", ", _jsx(Skill, {\n          name: "Mantra of Solace",\n          id: "41714"\n        }), ", ", _jsx(Skill, {\n          name: "Mantra of Potence",\n          id: "40915"\n        }), " and ", _jsx(Skill, {\n          name: "Mantra of Liberation",\n          id: "43357"\n        }), " - 70.61bd"]\n      }), "\\n"]\n    })]\n  });\n}\nfunction MDXContent(props = {}) {\n  const {wrapper: MDXLayout} = Object.assign({}, _provideComponents(), props.components);\n  return MDXLayout ? _jsx(MDXLayout, Object.assign({}, props, {\n    children: _jsx(_createMdxContent, props)\n  })) : _createMdxContent(props);\n}\nreturn {\n  default: MDXContent\n};\nfunction _missingMdxReference(id, component) {\n  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");\n}\n',
  },
};

export default async function getBuild(req: NextRequest) {
  if (req.method !== "GET") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  if (!req.nextUrl.searchParams.has("buildid")) {
    return new Response("Missing buildid", { status: 400 });
  }

  const buildid = req.nextUrl.searchParams.get("buildid") || "";

  // @ts-ignore
  const build = BUILDS[buildid];
  if (!build) {
    return new Response("Build not found", { status: 404 });
  }

  const res = new Response(JSON.stringify({ ...build }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
  return res;
}
