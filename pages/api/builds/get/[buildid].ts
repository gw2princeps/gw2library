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
  cata: {
    name: "Giga Catalyst",
    optimizerSettingsLink:
      "http://localhost:3001/?m=fractals&v=0&data=XQAAAAIOTwAAAAAAAABAq4nnA9VsVEKPWfSDKzUnaifZ2LlbXZmA7WUgnMr3hgX6i0CzWo4Af-0B2ydvNkCRsM5KnZJQuNUOQXeTkHnZ0OEcpAY-kIJn5X4FlnVaER0iIU7Jqz72VpSKM1XDn4pHDVq66YOvqmjw9JsKDIuB2pjb4eKecHcfVgtkvhncp-iCkDZdlD9yNgi5tWX4LjUufXY6gRDAfui2nU-yHkyIxoPZF5gTP1D0vLGBnmeucyUwchRLAyJv29NKZ8dGhNWINjnJ_2SDomFPb0UhD4L9Znh9eqJHz_G5hDtZN-onOwwtCcsST5C03sgbh8d_TyctU6qlYrztHwPl8Ear8pFd4GmTS0yNHIB6klavzj3jH1_6yXWKC2UsJrBvD3nd0Uob1aAIurG-lv87cJBRFvERtnvq0_l1FSNVYSNCnc6yCQ5gAQ5NvScY5TSvqjRiovgKk1xBpv1afsCYnjpucPoYpVpclzn7MP3G1IKBk5V_p18lMx8IMT7NaX7YxCgErY6gfCFoxoNomKMBw1zyz31OGZw1oeb1YnYvD7niArJ8dSNyr3azibH7c4zLXxbPLyHCPNSBBLGW6CqVursT-2eeMLVEOL8AzsaLwEXKJqeg6vqJjma6cMiA-Cat-0zqU7HQT8QN6pdNihfk4Xd4XK-ykxfL_TSvLvx7vxsWzrKiQ91GDBvHyCHL4SJ3ycd36Z7Dkfgw4DoHeUUgRxTpFCWb3RtvDxnos-ByFpqCmCD36kmQOPC7ZGGAHDH25mOPUp5Tfj0PVg_RXLkdXZ6FTzFkkWve_Bv0uQmZe3QCEAnwPbNRIukRVomxD6THy3qUIANRsRaC6JVKAJQHPptaVdcZhVzMcywUDgsPKiSYn3EmSENHrKdhwmvjgCAJOIx4GMQpkpHzFdeZ8EFEORo0o_DynxES8-fxqb6LQiwctMwXBLKKiyvZjGyqoRxNYTasinceHTAfuWLnQ8JrFlcqdY15E5Ch-p5LC2-mhffifnb658yHmNSl7X818aK60ayJN5kK0q_Ks4roU8dftgphR7OZlGsJobuu6RwbP0IzBjPzBtC44XHpzR4d7QxNtWkzeNm3cDK2anJ-xxTHLK4WCd40Lr0CPhZM8Aj2BVsna7wTv1toOLS_eCnyoJSNxXXcq273pGsjcEc2V4wfmA8zHLadSAgfUVWa-O3xhNr9e9z2p_MYrVB_SOjovutGvIRhpQu2EHPOCOi7ax0kRGpJk_yrc1h2pff2mDMtGJYQT1FGGuisypbqQ7rCenk8dAzgaxG1TbZzCoKppIm4Os9LCTKo4XPa1TUT9UKU5wUAVUnzLTfqdbjhVQsyq3aewiswSPLsZERuClMG3KIHSnrrAl19uFowLmk0IzDFMPhI9_yA5tn3D1z4cpzQHDxD6fUiuPO9FQmQr4gPeIBWvC0BgFQ0bmB-o62Y7vvWwVGNGcz3U0WgjY66WlHTfzH-xA3bO-IdUH65akMZCiXwg9eB9InhNa-voeHhy6oknYYlHvJyNAm_NLuYPpqTNzaeSyeOigMxLVWC702TY7r4mZZFEzt-oqL6aN6d6rU13UxuVQrOFOdguiPxmcFtCodSgj-BaFkYYoMefGjaFHK_ZgJQxbMBXkrhMMvUA3iR1QfMr8Vwa82efmed_yb7HRKlxmpv0mYvPllp2CS9J3TQuw-UXBcL9WTPx9cekVfeg5DjqLlDTj-ifq_uzoVfHQUJG69m9oVwnbpEbIQyoImBYKheq-tjG0WUzBivbzWGfHV03NTNz8htgWmaqeeIGpIAEUagBp1yTGW7O-BJbCDr1XbjDbUOlVj2a6Thx-NBp2VmBhzjOmS1RFGIHT-PL2Bzo07rjzAnladS8NYd0Qq3u0dmLCuHcZ5-fDbqgTj5UmEYKlvo1xavC33lJShVaQE0oBiKLsJO0uo5Dmkrh6eoeBwMEUbrcZCR-XUjzZ2o4k_C_436YuEvl3C4YvEHBMPwoTB8ayhcSaWvOvObvwgHFK5QZT4s8wTxt3h7Z7vip8qDW9TlnHoQt5imDyqtyN2wOJJNHakeapphr_Qdso4wr812i6BoEbq34KXPtW-DzuPchCGPD08jWx442a70ziDbWXcJOIi5u2tA2BP9Kc1ShC-0A3tYRDZ-XGWiKG_ggrjPaJEp1j8v3DW74zO9pLMWuqVhoBRNoKjo9qUF3t1PkIC44jymKB2EMePbFEFT_za0bgFxgXmfGCj1UQqbTamBb44la7rgaqNLSTT2klpydSkWdqSTAEJb0mLbqAqilfGJK34fqNB1ghDFQXovFGcV_hu1wQ_cjfBo8eqONjihOJDa3HEQofG5YcbU3Aeyzvb4bAIVCbJFjDsafvGqmNWn-Bo8MDkuVK9gB5hXoq2vs0rIcLGI6_nYlMYuzWJbb0ckP9smnGPl85mZZOn3uSl1c5VOCnx1_ZNZg2oYNcHfPyAdFXX8ux8dpUdwxtpijG1m2irBi3mgXkzImcRP3Ld7rk7pX45h_pkF1A6HxWN98JUhyQPRoatm-xVZe1v-V7-fcYB7S1U3yqZPI84IR25R79nr5rnTLayPUX1SGbb0HOcqJvRSZkjdhTGpG_gw1B4Qfb_sS_zr0rh7sgXigdbYkf_D_Ib41-ScRfupWLiJiEZR9O5xaMVlUYRGP2wKm6lWYmCRLR_SM4myYKZoXuPxFjA0HlGq6xQW6gGQ8IBSjOH-oxsehghiIzAdjwNDxaTRXo2EH6RMCyX29ps08efe52CnuVMbNpPufNyuZPZpnABmLT8WEFIvVxNCIwAmNv9Rvexgazs2LF3dOacj4He2LqJBzLBpOWlUpE3mRfdHwidRSUtDq9DEseINuh4422DCvMGx1WWeePaDGwPkPR8Qb6L5oBpKmToK3W_504IyRFTp77xyqH_JjsKoB5M3N2JckN5lKpZmiTtf9To-DYbnSB6QEFYVtLjo9JQ3qYfadzsuP-24WnUhmT6PSOLcm4OnfHaAadmFa4gGFagt3886ShLNyh2uC5bAJcVTjbGBh5chhrBffvBbEwnWa8V-TFN-nceahFvGlbsC0HBGOQNu9PaMGv_Nm8Ozzp22iSO6EGtF62yA-nulYvPDIaIHDIKBusaNarrGMef3jED3d6rR9np3mSXzGZBe17uzQr5AkZ0qmMBkHW3Fw9UtkYO3yyMV4fooCwppglZvmqLT34wkIqJ7vG0Y7XwzdzdFN4PH8C0_38oA-02mkijOMF2sLYVCgVnh_Z-EkrdkNl0FIV0U4L00g4p7e5osGGtji6eZbvNCU-pFFmmPa5CELDBd7hc9G_PDJVzTgvknBMUnEOkE9ChSxBwkcPEXGxHlmlo1GlUiYfaT9iOpWbS6bvhHeZ2zlL6ftw7xJcRZZjpvDi4jglNz-sKd_2s2KW8ro3LBUJwAl4VXp7c0_Nz6sglN5Zbg7OnYYmDmQBqyXUiXD_T44_K0GhrtQReE9hWieLXC4IC-0MYPnntQm5Rlsty2cRlSk5PMXx7oxbOr9Ifr6m_hnYJCXxgeiNrayDjQptr_1k4DFADCv-K4xObSe9DFGvA3_ISzql3Mbq93rcSAkwOwK5DDGlGgtkanNBH17DCA4Hq7vAm83A5Mf2W_rkcvG1XwbYeVTa-AZZr27-176yc9FyAH2w__sp0XQ_pXE7tYOxT9Gft3aprhzOZ59iPxYOvTtCIFB8HyORhmO0V5iKQVIEXdeXbsQFm9dGuiW0sHGOQ-pVFmhZXL47IrHX6CLhZrvBtJSELfzB9_a_UfNYyow3sX6BtQ658teNk85-5MnOCV97Z8duXPCjnOcUrKuoYiVvgxIBNNPtACrcr4jZmCDx0aEJwQlA7t2awDA0ySCK4RYRREcx_cDlowrzEoMvYWRxJCeSHaWrPTjeYQMP7GGzvswn6APM1Os4QLWiBxbi7BYcSObMeVbi8VvaBkwYnLjFpwFVo26_6whhM",
    description:
      '\nThe <Specialization name="Catalyst" text="Power Catalyst"/> is a strong DPS build for fractals. <Specialization name="Catalyst" text="Power Catalyst"/> provides conjures and <Condition name="Vulnerability"/>, as well as some <Boon name="Quickness"/> and additional <Boon name="Might"/> through _Spheres_ and potentially blasting fire fields. It may also swap traits and gear to provide permanent <Boon name="Quickness"/> and a decent amount of extra <Boon name="Might"/>. It is also very useful for some T4 skips in fractals like Aetherblade, Cliffside, Thaumanova Reactor etc. thanks to high mobility and <Skill id="5536"/>.\n\nThis build has less burst than <Specialization text="Power Weaver" name="Weaver"/> but offers extra utility through the boons of the Jade Spheres.\n\nUnfortunately, the survivability of this build is on the lower end. While some defensive utilities are available in <Skill name="Water Attunement"/> and <Skill name="Earth Attunement"/>, you will use them during your normal rotation and not always be in the correct attunement when you need the defense. Therefore, it is recommended to have a high awareness of the encounters and good class knowledge before picking up this build. Special care needs to be taken on fractals with <MistlockInstability name="We Bleed Fire"/> since taking one hit of <MistlockInstability name="We Bleed Fire"/> will remove significant amounts of HP.\n\nThis build has one of the harder rotations in the game but is very enjoyable to play - if given some dedication. The build benefits heavily from slaying potions and sigils such as <Item id="50082"/> and <Item name="Serpent Slaying" type="Sigil"/>.\n',
    character:
      '{"attributes":{"profession":"Elementalist","specialization":"Catalyst","data":{"Health":18895,"Armor":2410,"Power":4172.9,"Precision":2352,"Toughness":1443,"Vitality":1725,"Ferocity":1998.95,"Condition Damage":750,"Expertise":0,"Concentration":243,"Healing Power":0,"Agony Resistance":162,"Condition Duration":0,"Boon Duration":0.162,"Critical Chance":1.0938095238095238,"Critical Damage":2.832633333333334,"Power Coefficient":3125,"Power2 Coefficient":0,"Burning Coefficient":4.51,"Bleeding Coefficient":6.15,"Poison Coefficient":0,"Torment Coefficient":0,"Confusion Coefficient":0,"Flat DPS":0,"Burning Duration":0.2,"Siphon Base Coefficient":139.75,"Effective Power":35870.03610808121,"NonCrit Effective Power":12663.141284816675,"Power DPS":43162.82743078697,"Power2 DPS":0,"Siphon DPS":139.75,"Bleeding Damage":121.87042608197099,"Bleeding Stacks":6.15,"Bleeding DPS":749.5031204041217,"Burning Damage":449.73825147413925,"Burning Stacks":5.412,"Burning DPS":2433.9834169780415,"Confusion Damage":150.15527870248815,"Confusion Stacks":0,"Confusion DPS":0,"Poison Damage":142.7884842900705,"Poison Stacks":0,"Poison DPS":0,"Torment Damage":180.6228852229809,"Torment Stacks":0,"Torment DPS":0,"Damage":46486.06396816914,"Effective Health":100689773.355445,"Survivability":51189.513652996946,"Effective Healing":390,"Healing":390}},"armor":{"weight":"Light","helmAffix":"Berserker","helmRuneId":24836,"helmRune":"Scholar","helmRuneCount":6,"helmInfusionId":49432,"shouldersAffix":"Berserker","shouldersRuneId":24836,"shouldersRune":"Scholar","shouldersRuneCount":6,"shouldersInfusionId":49432,"coatAffix":"Berserker","coatRuneId":24836,"coatRune":"Scholar","coatRuneCount":6,"coatInfusionId":49432,"glovesAffix":"Berserker","glovesRuneId":24836,"glovesRune":"Scholar","glovesRuneCount":6,"glovesInfusionId":49432,"leggingsAffix":"Berserker","leggingsRuneId":24836,"leggingsRune":"Scholar","leggingsRuneCount":6,"leggingsInfusionId":49432,"bootsAffix":"Berserker","bootsRuneId":24836,"bootsRune":"Scholar","bootsRuneCount":6,"bootsInfusionId":49432},"weapon":{"weapon1MainInfusion2Id":49432,"weapon1MainSigil2Id":24868,"weapon2MainType":"Dagger","weapon2MainSigil1Id":24615,"weapon2MainAffix":"Berserker","weapon2MainInfusion1Id":49432,"weapon2MainInfusion2Id":49432,"weapon2MainSigil2Id":24868},"backAndTrinket":{"backItemAffix":"Berserker","backItemInfusion1Id":49432,"backItemInfusion2Id":49432,"amuletAffix":"Berserker","ring1Affix":"Berserker","ring1Infusion1Id":49432,"ring1Infusion2Id":49432,"ring1Infusion3Id":49432,"ring2Affix":"Berserker","ring2Infusion1Id":49432,"ring2Infusion2Id":49432,"ring2Infusion3Id":49432,"accessory1Affix":"Berserker","accessory1InfusionId":49432,"accessory2Affix":"Berserker","accessory2InfusionId":49432},"consumables":{"foodId":91805,"utilityId":50082},"skills":{"healId":"","utility1Id":5639,"utility2Id":"","utility3Id":"","eliteId":""},"assumedBuffs":{"value":[{"id":"might","type":"Boon"},{"id":"fury","type":"Boon"},{"id":"protection","type":"Boon"},{"id":"vulnerability","type":"Condition"},{"id":"jade-bot","gw2id":96613,"type":"Item"},{"id":"omnipotion","gw2id":79722,"type":"Item"}]}}',
    mdx: '/*@jsxRuntime automatic @jsxImportSource react*/\nconst {Fragment: _Fragment, jsx: _jsx, jsxs: _jsxs} = arguments[0];\nconst {useMDXComponents: _provideComponents} = arguments[0];\nfunction _createMdxContent(props) {\n  const _components = Object.assign({\n    p: "p",\n    em: "em"\n  }, _provideComponents(), props.components), {Specialization, Condition, Boon, Skill, MistlockInstability, Item} = _components;\n  if (!Boon) _missingMdxReference("Boon", true);\n  if (!Condition) _missingMdxReference("Condition", true);\n  if (!MistlockInstability) _missingMdxReference("MistlockInstability", true);\n  if (!Item) _missingMdxReference("Item", true);\n  if (!Skill) _missingMdxReference("Skill", true);\n  if (!Specialization) _missingMdxReference("Specialization", true);\n  return _jsxs(_Fragment, {\n    children: [_jsxs(_components.p, {\n      children: ["The ", _jsx(Specialization, {\n        name: "Catalyst",\n        text: "Power Catalyst"\n      }), " is a strong DPS build for fractals. ", _jsx(Specialization, {\n        name: "Catalyst",\n        text: "Power Catalyst"\n      }), " provides conjures and ", _jsx(Condition, {\n        name: "Vulnerability"\n      }), ", as well as some ", _jsx(Boon, {\n        name: "Quickness"\n      }), " and additional ", _jsx(Boon, {\n        name: "Might"\n      }), " through ", _jsx(_components.em, {\n        children: "Spheres"\n      }), " and potentially blasting fire fields. It may also swap traits and gear to provide permanent ", _jsx(Boon, {\n        name: "Quickness"\n      }), " and a decent amount of extra ", _jsx(Boon, {\n        name: "Might"\n      }), ". It is also very useful for some T4 skips in fractals like Aetherblade, Cliffside, Thaumanova Reactor etc. thanks to high mobility and ", _jsx(Skill, {\n        id: "5536",\n        id: "5536"\n      }), "."]\n    }), "\\n", _jsxs(_components.p, {\n      children: ["This build has less burst than ", _jsx(Specialization, {\n        text: "Power Weaver",\n        name: "Weaver"\n      }), " but offers extra utility through the boons of the Jade Spheres."]\n    }), "\\n", _jsxs(_components.p, {\n      children: ["Unfortunately, the survivability of this build is on the lower end. While some defensive utilities are available in ", _jsx(Skill, {\n        name: "Water Attunement",\n        id: "5493"\n      }), " and ", _jsx(Skill, {\n        name: "Earth Attunement",\n        id: "5495"\n      }), ", you will use them during your normal rotation and not always be in the correct attunement when you need the defense. Therefore, it is recommended to have a high awareness of the encounters and good class knowledge before picking up this build. Special care needs to be taken on fractals with ", _jsx(MistlockInstability, {\n        name: "We Bleed Fire"\n      }), " since taking one hit of ", _jsx(MistlockInstability, {\n        name: "We Bleed Fire"\n      }), " will remove significant amounts of HP."]\n    }), "\\n", _jsxs(_components.p, {\n      children: ["This build has one of the harder rotations in the game but is very enjoyable to play - if given some dedication. The build benefits heavily from slaying potions and sigils such as ", _jsx(Item, {\n        id: "50082",\n        id: "50082"\n      }), " and ", _jsx(Item, {\n        name: "Serpent Slaying",\n        type: "Sigil",\n        id: "24658"\n      }), "."]\n    })]\n  });\n}\nfunction MDXContent(props = {}) {\n  const {wrapper: MDXLayout} = Object.assign({}, _provideComponents(), props.components);\n  return MDXLayout ? _jsx(MDXLayout, Object.assign({}, props, {\n    children: _jsx(_createMdxContent, props)\n  })) : _createMdxContent(props);\n}\nreturn {\n  default: MDXContent\n};\nfunction _missingMdxReference(id, component) {\n  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");\n}\n',
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

  const res = new Response(
    JSON.stringify({ ...build, character: JSON.parse(build.character) }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
  return res;
}
