import JN from "./skillsActionJson.js";
import BF from "./buffs.js";
const mp = [
  {
    x: 265,
    y: 20,
  },
  {
    x: 135,
    y: 65,
  },
  {
    x: 350,
    y: 65,
  },
  {
    x: 420,
    y: -140,
  },
  {
    x: 170,
    y: -110,
  },
];
const rp = [
  {
    x: -265,
    y: -20,
  },
  {
    x: -135,
    y: 65,
  },
  {
    x: -350,
    y: 65,
  },
  {
    x: -420,
    y: -140,
  },
  {
    x: -170,
    y: -110,
  },
  {
    x: -300,
    y: -110,
  },
];
const action = [
  {
    name: "stand",
    playTime: 0,
  },
  {
    name: "hit",
    playTime: 1,
  },
  {
    name: "die",
    playTime: 1,
  },
  {
    name: "attack",
    playTime: 1,
  },
  {
    name: "skills",
    playTime: 1,
  },
];
cc.Class({
  extends: cc.Component,

  properties: {
    roles: {
      type: dragonBones.ArmatureDisplay, //人物,0->抢，1->锤子，2->塔，3->琴，4->剑
      default: [],
    },
    monsters: {
      type: dragonBones.ArmatureDisplay, //0->树怪物，1->老虎，2->狼
      default: [],
    },
    label: {
      type: cc.Label,
      default: null,
    },
    newSkills: {
      type: dragonBones.ArmatureDisplay, //主技能
      default: [],
    },
    erSkills: {
      type: dragonBones.ArmatureDisplay, //次技能
      default: [],
    },
    buffSkills: {
      type: dragonBones.ArmatureDisplay, //buff
      default: [],
    },
    newXiaSkills: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    erShangSkills: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    imXia: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    // 下拉菜单模块
    ComboBoxPrefab: cc.Prefab, // 下拉菜单预制体
    comboboxNode: cc.Node, // 下拉菜单根节点
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    // //技能存入对象池
    // this.skillsPool = new cc.NodePool();
    // for (let i = 0; i < 6; i++) {
    //   let snode = cc.instantiate(this.newSkills[0].node); // 创建节点
    //   this.skillsPool.put(snode); // 通过 put 接口放入对象池
    // }
    // this.skillsPool.put(this.newSkills[0].node);
    // 初始化数据
    this.initData();
    // 记录当前buff数量
    this.buffNum = 0;
  },
  // 初始化数据
  initData() {
    // 初始化下拉菜单模块
    this.currentArea = 0;
    this.initComboBox();
  },

  start() {},

  /**
   * 下拉菜单模块
   */
  initComboBox() {
    let node = cc.instantiate(this.ComboBoxPrefab);
    let areaNameArr = [];
    for (let i = 0; i < JN.length; i++) {
      areaNameArr.push(JN[i].skillName);
    }
    let obj = {
      // data: ['区域一', '区域二', '区域三'], // 下拉菜单项
      data: areaNameArr, // 下拉菜单项
      width: 314, // 下拉菜单宽度
      value: this.currentArea, // 当前区域
    };
    let objFunc = {
      GetSelectedItem: this.GetSelectedItem.bind(this),
    };
    node.getComponent("combobox").initData(obj);
    node.getComponent("combobox").initEvent(objFunc);
    this.comboboxNode.addChild(node);
  },
  // 获取选中项
  GetSelectedItem(index) {
    // if (this.currentArea != index) {
    this.currentArea = index;
    console.log("选择区域：", this.currentArea);
    this.atcionSkills(JN[this.currentArea]);
    // }
  },
  // 开始施法
  atcionSkills(s) {
    // 默认施法是第二个人物
    this.impAction(this.roles[3], 4).then(() => {
      this.setSkills(s);
    });
  },
  //判断技能
  setSkills(s) {
    //判断技能是否为组合技能
    if (!s.comName.length) {
      this.onComSkills(s);
    } else {
      this.comSkills(s);
    }
  },
  comSkills(s) {
    //判断组合技能类型
    switch (s.programme) {
      case 1:
        this.firstComSkills(s);
        break;
      case 2:
        this.secondComSkills(s);
        break;
      case 3:
        this.thirdComSkills(s);
        break;
    }
  },
  // 组合技能类型一
  firstComSkills(s) {
    let rm = s.skillType == 1 ? rp : mp;
    let erRm, rmType;
    if (s.seEffect) {
      erRm = rp;
      rmType = this.roles;
    } else {
      erRm = mp;
      rmType = this.monsters;
    }
    let prPos = cc.v2(rm[0].x, rm[0].y); //主技能中心点
    let erPos = cc.v2(erRm[0].x, erRm[0].y); //次技能中心点

    this.imSkills(0, s, prPos).then(() => {
      this.imErSkills(0, s, erPos).then(() => {
        let aIndex = rmType == this.roles ? 0 : 1;
        for (let i = 0; i < s.skillNum; i++) {
          this.impAction(rmType[i], aIndex);
          if (s.buffName.length) {
            let b = this.isSkillsBuff(s);
            this.imBuffSkills(i, b, cc.v2(erRm[i].x, erRm[i].y));
          }
        }
      });
    });
  },
  // 组合技能类型二
  secondComSkills(s) {
    let rm = s.skillType == 1 ? rp : mp;
    let erRm, rmType;
    if (s.seEffect) {
      erRm = rp;
      rmType = this.roles;
    } else {
      erRm = mp;
      rmType = this.monsters;
    }
    let prPos = cc.v2(rm[0].x, rm[0].y); //主技能中心点
    this.imSkills(0, s, prPos).then(() => {
      for (let i = 0; i < s.skillNum; i++) {
        let erPos = cc.v2(erRm[i].x, erRm[i].y); //次技能坐标
        this.imErSkills(i, s, erPos).then(() => {
          let aIndex = rmType == this.roles ? 0 : 1;
          this.impAction(rmType[i], aIndex);
          if (s.buffName.length) {
            let b = this.isSkillsBuff(s);
            this.imBuffSkills(i, b, erPos);
          }
        });
      }
    });
  },
  // 组合技能类型三
  thirdComSkills(s) {
    let rm = s.skillType == 1 ? rp : mp;
    let erRm, rmType;
    if (s.seEffect) {
      erRm = rp;
      rmType = this.roles;
    } else {
      erRm = mp;
      rmType = this.monsters;
    }
    for (let i = 0; i < s.skillNum; i++) {
      let prPos = cc.v2(rm[i].x, rm[i].y);
      this.imSkills(i, s, prPos).then(() => {
        let erPos = cc.v2(erRm[i].x, erRm[i].y);
        this.imErSkills(i, s, erPos).then(() => {
          let aIndex = rmType == this.roles ? 0 : 1;
          this.impAction(rmType[i], aIndex);
          if (s.buffName.length) {
            let b = this.isSkillsBuff(s);
            this.imBuffSkills(i, b, erPos);
          }
        });
      });
    }
  },
  //查询buff
  isSkillsBuff(s) {
    let index = BF.findIndex((item) => {
      return item.id == s.buffName[0];
    });
    return BF[index];
  },
  onComSkills(s) {
    // 判断 不组合类型
    if (s.programme == 3) {
      this.thirdNoComSkills(s);
    } else {
      this.firstNoComSkills(s);
    }
  },
  // 不组合技能类型-以人/怪定位
  thirdNoComSkills(s) {
    let rm, rmType;
    if (s.skillType == 1) {
      rm = rp;
      rmType = this.roles;
    } else {
      rm = mp;
      rmType = this.monsters;
    }
    for (let i = 0; i < s.skillNum; i++) {
      let prPos = cc.v2(rm[i].x, rm[i].y);
      this.imSkills(i, s, prPos).then(() => {
        let aIndex = rmType == this.roles ? 0 : 1;
        this.impAction(rmType[i], aIndex);
        if (s.buffName.length) {
          let b = this.isSkillsBuff(s);
          this.imBuffSkills(i, b, prPos);
        }
      });
    }
  },
  // 不组合技能类型-以战斗盘中心定位
  firstNoComSkills(s) {
    let rm, rmType;
    if (s.skillType == 1) {
      rm = rp;
      rmType = this.roles;
    } else {
      rm = mp;
      rmType = this.monsters;
    }
    let prPos = cc.v2(rm[0].x, rm[0].y); //主技能中心点
    this.imSkills(0, s, prPos).then(() => {
      for (let i = 0; i < s.skillNum; i++) {
        let aIndex = rmType == this.roles ? 0 : 1;
        this.impAction(rmType[i], aIndex);
        if (s.buffName.length) {
          let b = this.isSkillsBuff(s);
          this.imBuffSkills(i, b, cc.v2(rm[i].x, rm[i].y));
        }
      }
    });
  },
  //执行buff技能
  imBuffSkills(i, b, pos) {
    let buff = b.zIndex ? this.buffSkills : this.imXia; //上层：下层
    return new Promise((res, err) => {
      buff[i].armatureName = b.actionName;
      let aArrName = buff[i].getAnimationNames(b.actionName);
      buff[i].animationName = aArrName[0];
      buff[i].playAnimation(aArrName[0], 0);
      buff[i].node.setPosition(pos);
      buff[i].node.active = true;
      buff[i].once(dragonBones.EventObject.FRAME_EVENT, (event) => {
        res(event.name);
      });
      // console.log(this.buffSkills[i], "jie点");
    });
  },
  // update (dt) {},
  // 执行动作
  impAction(rm, i) {
    let name = action[i].name;
    let playTime = action[i].playTime;
    return new Promise((res, err) => {
      rm.animationName = name;
      rm.playAnimation(name, playTime);
      //监听帧事件
      rm.once(dragonBones.EventObject.FRAME_EVENT, (event, rm) => {
        res(event.name);
      });
      //监听动画是完成后恢复站立
      rm.once(dragonBones.EventObject.COMPLETE, () => {
        rm.animationName = action[0].name;
        rm.playAnimation(action[0].name, action[0].playTime);
      });
    });
  },
  //执行主技能
  imSkills(i, s, pos) {
    let skills = s.przIndex ? this.newSkills : this.newXiaSkills; //上层:下层
    return new Promise((res, err) => {
      skills[i].armatureName = s.actionName;
      let aArrName = skills[i].getAnimationNames(s.actionName);
      skills[i].animationName = aArrName[0];
      skills[i].playAnimation(aArrName[0], 1);
      skills[i].node.setPosition(pos);
      skills[i].node.active = true;
      skills[i].once(dragonBones.EventObject.FRAME_EVENT, (event) => {
        res(event.name);
      });
    });
  },
  // 执行次要技能
  imErSkills(i, s, pos) {
    let skills = s.sezIndex ? this.erShangSkills : this.erSkills; //上层:下层
    return new Promise((res, err) => {
      skills[i].armatureName = s.comName[0];
      let aArrName = skills[i].getAnimationNames(s.comName[0]);
      skills[i].animationName = aArrName[0];
      skills[i].playAnimation(aArrName[0], 1);
      skills[i].node.setPosition(pos);
      skills[i].node.active = true;
      skills[i].once(dragonBones.EventObject.FRAME_EVENT, (event) => {
        res(event.name);
      });
    });
  },
});
