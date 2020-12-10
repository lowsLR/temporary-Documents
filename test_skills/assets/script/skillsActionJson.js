/**
programme 字段说明：
组合技能情况下：
1------>一主一次，主技能和次技能都在战斗场景中心且主、次技能只有一个；
2------>一主一次，主技能只有一个且只能战斗场景中心，次技能*数量，以人/怪为定点；
3------>多主多次，主技能和次技能*数量，以人/怪为定点；
不是组合技能情况下：
1 or 2------>都是以战斗场景中心为定点；
3------>以人/怪为定点；
默认情况下为3；
**/
const skillsActionJson = [
  {
    id: 101,
    actionName: "skill101",
    skillName: "灵剑决",
    skillType: 2, //主技能 出现的地方 1->我方，2->敌方,默认为2
    skillNum: 1, //受击数量-测试用的
    prEffect: false, // 是否作用于自身 true->是，默认为false -测试用的
    comName: [], //组合技能名字
    seEffect: false, //次要技能出现的地方  true->我方，false->敌方 (组合技能情况下才会考虑此，false)
    przIndex: true, //true->主要技能在战斗场景里显示在人物/怪的最上层，false->最下层，一般默认为true
    sezIndex: true, //true->次要技能在战斗场景里显示在人物/怪的最上层，false->最下层，一般默认为true
    programme: 3,
    target: 1, // 1-> 主技能以人/怪为定点，2->以战斗盘中心为定点
    buffName: [], //buff名-测试用的
  },
  {
    id: 102,
    actionName: "skill102",
    skillName: "龙剑诀",
    skillType: 2,
    skillNum: 1,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: ["501"],
  },
  {
    id: 103,
    actionName: "skill103",
    skillName: "双龙剑诀",
    skillType: 2,
    skillNum: 2,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 104,
    actionName: "skill104",
    skillName: "狂剑诀",
    skillType: 1,
    skillNum: 1,
    prEffect: true,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: ["101"],
  },
  {
    id: 105,
    actionName: "skill105",
    skillName: "六合剑阵",
    skillType: 2,
    skillNum: 5,
    prEffect: false,
    comName: ["liuHeJian"],
    seEffect: false,
    przIndex: false,
    sezIndex: true,
    programme: 1,
    target: 2,
    buffName: [],
  },
  {
    id: 201,
    actionName: "skill201",
    skillName: "狂刀诀",
    skillType: 2,
    skillNum: 1,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 202,
    actionName: "skill202",
    skillName: "炎刀诀",
    skillType: 2,
    skillNum: 1,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: ["603"],
  },
  {
    id: 203,
    actionName: "skill203",
    skillName: "祭魂诀",
    skillType: 1,
    skillNum: 1,
    prEffect: true,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: ["102"],
  },
  {
    id: 204,
    actionName: "skill204",
    skillName: "魔火杀",
    skillType: 2,
    skillNum: 1,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: ["103"],
  },
  {
    id: 205,
    actionName: "skill205",
    skillName: "魔噬刀诀",
    skillType: 2,
    skillNum: 1,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: ["404"],
  },
  {
    id: 301,
    actionName: "skill301",
    skillName: "炎锤",
    skillType: 2,
    skillNum: 1,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 302,
    actionName: "skill302",
    skillName: "炎星锤",
    skillType: 2,
    skillNum: 1,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 303,
    actionName: "skill303",
    skillName: "狂息诀",
    skillType: 1,
    skillNum: 1,
    prEffect: true,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 304,
    actionName: "skill304",
    skillName: "煞气诀",
    skillType: 1,
    skillNum: 5,
    prEffect: false,
    comName: ["shaQi"],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 2,
    target: 2,
    buffName: [],
  },
  {
    id: 305,
    actionName: "skill305",
    skillName: "霸王卸甲",
    skillType: 1,
    skillNum: 1,
    prEffect: true,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: ["112"],
  },
  {
    id: 401,
    actionName: "skill401",
    skillName: "极坤棍法",
    skillType: 2,
    skillNum: 5,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 402,
    actionName: "skill402",
    skillName: "太极灵步",
    skillType: 1,
    skillNum: 1,
    prEffect: true,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: ["105"],
  },
  {
    id: 403,
    actionName: "skill403",
    skillName: "水龙噬",
    skillType: 2,
    skillNum: 1,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 404,
    actionName: "skill404",
    skillName: "辟魔法诀",
    skillType: 1,
    skillNum: 1,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: ["2"],
  },
  {
    id: 405,
    actionName: "skill405",
    skillName: "灵武守护",
    skillType: 1,
    skillNum: 5,
    prEffect: true,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 2,
    target: 2,
    buffName: ["106"],
  },
  {
    id: 501,
    actionName: "skill501",
    skillName: "杀枪诀",
    skillType: 2,
    skillNum: 1,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 502,
    actionName: "skill502",
    skillName: "罗刹枪诀",
    skillType: 2,
    skillNum: 1,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 503,
    actionName: "skill503",
    skillName: "魔将煞",
    skillType: 2,
    skillNum: 1,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 504,
    actionName: "skill504",
    skillName: "冥魔枪雨",
    skillType: 2,
    skillNum: 5,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 1,
    target: 2,
    buffName: [],
  },
  {
    id: 505,
    actionName: "skill505",
    skillName: "修罗枪",
    skillType: 2,
    skillNum: 1,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 1101,
    actionName: "skill1101",
    skillName: "小雷符",
    skillType: 2,
    skillNum: 1,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 1102,
    actionName: "skill1102",
    skillName: "风雷符",
    skillType: 1,
    skillNum: 1,
    prEffect: true,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: ["105"],
  },
  {
    id: 1103,
    actionName: "skill1103",
    skillName: "摄魂符",
    skillType: 2,
    skillNum: 1,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 1104,
    actionName: "skill1104",
    skillName: "虚弱符",
    skillType: 2,
    skillNum: 1,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 1105,
    actionName: "skill1105",
    skillName: "法锢符",
    skillType: 2,
    skillNum: 1,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: ["401"],
  },
  {
    id: 1201,
    actionName: "skill1201",
    skillName: "殇魂曲",
    skillType: 2,
    skillNum: 5,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 1202,
    actionName: "skill1202",
    skillName: "魂煞曲",
    skillType: 2,
    skillNum: 5,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 1203,
    actionName: "skill1203",
    skillName: "聚灵曲",
    skillType: 1,
    skillNum: 1,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: ["201"],
  },
  {
    id: 1204,
    actionName: "skill1204",
    skillName: "花魂曲",
    skillType: 1,
    skillNum: 1,
    prEffect: true,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: ["113"],
  },
  {
    id: 1205,
    actionName: "skill1205",
    skillName: "花音煞",
    skillType: 2,
    skillNum: 2,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 1301,
    actionName: "skill1301",
    skillName: "死灵咒",
    skillType: 2,
    skillNum: 1,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 1302,
    actionName: "skill1302",
    skillName: "死魂毒",
    skillType: 2,
    skillNum: 2,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: ["601"],
  },
  {
    id: 1303,
    actionName: "skill1303",
    skillName: "灵毒咒",
    skillType: 2,
    skillNum: 2,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: ["602"],
  },
  {
    id: 1304,
    actionName: "skill1304",
    skillName: "魂血咒",
    skillType: 1,
    skillNum: 2,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 1305,
    actionName: "skill1305",
    skillName: "孽莲咒",
    skillType: 1,
    skillNum: 1,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 1401,
    actionName: "skill1401",
    skillName: "镇塔诀",
    skillType: 2,
    skillNum: 1,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 1402,
    actionName: "skill1402",
    skillName: "锁器诀",
    skillType: 2,
    skillNum: 1,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: ["402"],
  },
  {
    id: 1403,
    actionName: "skill1403",
    skillName: "玄幽诀",
    skillType: 2,
    skillNum: 1,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 1404,
    actionName: "skill1404",
    skillName: "镇魔守心",
    skillType: 1,
    skillNum: 1,
    prEffect: true,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 1405,
    actionName: "skill1405",
    skillName: "冥杀诀",
    skillType: 2,
    skillNum: 1,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: ["506"],
  },
  {
    id: 2101,
    actionName: "skill2101",
    skillName: "灵风曲",
    skillType: 2,
    skillNum: 5,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 2102,
    actionName: "skill2102",
    skillName: "怀云曲",
    skillType: 1,
    skillNum: 2,
    prEffect: false,
    comName: ["zhiLiao"],
    seEffect: true,
    przIndex: true,
    sezIndex: true,
    programme: 2,
    target: 2,
    buffName: ["202"],
  },
  {
    id: 2103,
    actionName: "skill2103",
    skillName: "灵神曲",
    skillType: 1,
    skillNum: 3,
    prEffect: false,
    comName: ["lan"],
    seEffect: true,
    przIndex: true,
    sezIndex: true,
    programme: 2,
    target: 2,
    buffName: [],
  },
  {
    id: 2104,
    actionName: "skill2104",
    skillName: "清神曲",
    skillType: 1,
    skillNum: 4,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 2105,
    actionName: "skill2105",
    skillName: "天佑曲",
    skillType: 1,
    skillNum: 5,
    prEffect: true,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 2,
    target: 2,
    buffName: ["1"],
  },
  {
    id: 2201,
    actionName: "skill2201",
    skillName: "灵心诀",
    skillType: 2,
    skillNum: 1,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 2202,
    actionName: "skill2202",
    skillName: "命源诀",
    skillType: 1,
    skillNum: 1,
    prEffect: true,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: ["111"],
  },
  {
    id: 2203,
    actionName: "skill2203",
    skillName: "琼露诀",
    skillType: 1,
    skillNum: 1,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 2204,
    actionName: "skill2204",
    skillName: "天霖诀",
    skillType: 1,
    skillNum: 2,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 2205,
    actionName: "skill2205",
    skillName: "回生诀",
    skillType: 1,
    skillNum: 1,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 2301,
    actionName: "skill2301",
    skillName: "星火诀",
    skillType: 2,
    skillNum: 5,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 2302,
    actionName: "skill2302",
    skillName: "星算诀",
    skillType: 1,
    skillNum: 4,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 2303,
    actionName: "skill2303",
    skillName: "星露诀",
    skillType: 1,
    skillNum: 2,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 2304,
    actionName: "skill2304",
    skillName: "星罗诀",
    skillType: 2,
    skillNum: 5,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: [],
  },
  {
    id: 2305,
    actionName: "skill2305",
    skillName: "七曜星诀",
    skillType: 1,
    skillNum: 1,
    prEffect: false,
    comName: [],
    seEffect: false,
    przIndex: true,
    sezIndex: true,
    programme: 3,
    target: 1,
    buffName: ["301"],
  },
];
export default skillsActionJson;
