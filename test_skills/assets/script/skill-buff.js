import JN from "./skillsActionJson.js";
import BF from "./buffs.js";
const mp = [
  {
    x: 265,
    y: -20,
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
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    monsters: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    newSkills: {
      type: dragonBones.ArmatureDisplay, //主技能
      default: [],
    },
    erSkills: {
      type: dragonBones.ArmatureDisplay, //次技能
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
    rtbbf1: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    rtbbf2: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    rtbbf3: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    rtbbf4: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    rtbbf5: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    rstsbf1: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    rstsbf2: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    rstsbf3: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    rstsbf4: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    rstsbf5: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    rsthbf1: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    rsthbf2: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    rsthbf3: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    rsthbf4: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    rsthbf5: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    rjxbf1: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    rjxbf2: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    rjxbf3: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    rjxbf4: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    rjxbf5: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },

    mtbbf1: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    mtbbf2: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    mtbbf3: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    mtbbf4: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    mtbbf5: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    mstsbf1: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    mstsbf2: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    mstsbf3: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    mstsbf4: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    mstsbf5: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    msthbf1: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    msthbf2: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    msthbf3: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    msthbf4: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    msthbf5: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    mjxbf1: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    mjxbf2: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    mjxbf3: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },

    mjxbf4: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    mjxbf5: {
      type: dragonBones.ArmatureDisplay,
      default: [],
    },
    // 下拉菜单模块
    ComboBoxPrefab: cc.Prefab, // 下拉菜单预制体
    comboboxNode: cc.Node, // 下拉菜单根节点
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.initData();
    // 记录当前buff数量
    this.buffNum = 0;
  },
  // 初始化数据
  initData() {
    // 初始化下拉菜单模块
    this.currentArea = 0;
    this.initComboBox();

    // 人的buff记录
    this.rBuffNum = [
      { tb: 0, st: 0, jx: 0 },
      { tb: 0, st: 0, jx: 0 },
      { tb: 0, st: 0, jx: 0 },
      { tb: 0, st: 0, jx: 0 },
      { tb: 0, st: 0, jx: 0 },
    ];
    this.rBuff = [
      {
        tbf: this.rtbbf1,
        stsbf: this.rstsbf1,
        sthbf: this.rsthbf1,
        jxbf: this.rjxbf1,
      },
      {
        tbf: this.rtbbf2,
        stsbf: this.rstsbf2,
        sthbf: this.rsthbf2,
        jxbf: this.rjxbf2,
      },
      {
        tbf: this.rtbbf3,
        stsbf: this.rstsbf3,
        sthbf: this.rsthbf3,
        jxbf: this.rjxbf3,
      },
      {
        tbf: this.rtbbf4,
        stsbf: this.rstsbf4,
        sthbf: this.rsthbf4,
        jxbf: this.rjxbf4,
      },
      {
        tbf: this.rtbbf5,
        stsbf: this.rstsbf5,
        sthbf: this.rsthbf5,
        jxbf: this.rjxbf5,
      },
    ];
    // 怪的buff记录
    this.mBuffNum = [
      { tb: 0, st: 0, jx: 0 },
      { tb: 0, st: 0, jx: 0 },
      { tb: 0, st: 0, jx: 0 },
      { tb: 0, st: 0, jx: 0 },
      { tb: 0, st: 0, jx: 0 },
    ];
    this.mBuff = [
      {
        tbf: this.mtbbf1,
        stsbf: this.mstsbf1,
        sthbf: this.msthbf1,
        jxbf: this.mjxbf1,
      },
      {
        tbf: this.mtbbf2,
        stsbf: this.mstsbf2,
        sthbf: this.msthbf2,
        jxbf: this.mjxbf2,
      },
      {
        tbf: this.mtbbf3,
        stsbf: this.mstsbf3,
        sthbf: this.msthbf3,
        jxbf: this.mjxbf3,
      },
      {
        tbf: this.mtbbf4,
        stsbf: this.mstsbf4,
        sthbf: this.msthbf4,
        jxbf: this.mjxbf4,
      },
      {
        tbf: this.mtbbf5,
        stsbf: this.mstsbf5,
        sthbf: this.msthbf5,
        jxbf: this.mjxbf5,
      },
    ];
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
    // 默认施法是第一个人物
    this.impAction(this.roles[0], 4).then(() => {
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
        for (let i = 0; i < s.skillNum; i++) {
          if (rmType != this.roles) {
            this.impAction(rmType[i], 1);
          }
          if (s.buffName.length) {
            let b = this.isSkillsBuff(s);
            // this.imBuffSkills(i, b, cc.v2(erRm[i].x, erRm[i].y));
            this.imBuffSkills(b, rmType, i);
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
        // if (s.skillType == 1 && !s.prEffect) {
        //   erPos = cc.v2(erRm[i + 1].x, erRm[i + 1].y);
        // }
        this.imErSkills(i, s, erPos).then(() => {
          if (rmType != this.roles) {
            this.impAction(rmType[i], 1);
          }
          if (s.buffName.length) {
            let b = this.isSkillsBuff(s);
            // this.imBuffSkills(i, b, erPos);
            this.imBuffSkills(b, rmType, i);
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
      let erPos = cc.v2(erRm[i].x, erRm[i].y);
    //   if (s.skillType == 1 && !s.prEffect) {
    //     prPos = cc.v2(rm[i + 1].x, rm[i + 1].y);
    //     erPos = cc.v2(erRm[i + 1].x, erRm[i + 1].y);
    //   }
      this.imSkills(i, s, prPos).then(() => {
        this.imErSkills(i, s, erPos).then(() => {
          if (rmType != this.roles) {
            this.impAction(rmType[i], 1);
          }
          if (s.buffName.length) {
            let b = this.isSkillsBuff(s);
            // this.imBuffSkills(i, b, erPos);
            this.imBuffSkills(b, rmType, i);
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
    //   if (s.skillType == 1 && !s.prEffect) {
    //     prPos = cc.v2(rm[i + 1].x, rm[i + 1].y);
    //   }
      if (s.id == 2205 || s.id == 1305) {
        //复活
        prPos = cc.v2(rp[5].x, rp[5].y);
        this.imSkills(i, s, prPos).then(() => {
          this.impFuHuo(this.roles[5], 0);
          return;
        });
      }
      this.imSkills(i, s, prPos).then(() => {
        if (rmType != this.roles) {
          this.impAction(rmType[i], 1);
        }
        if (s.buffName.length) {
          let b = this.isSkillsBuff(s);
          // this.imBuffSkills(i, b, prPos);
          this.imBuffSkills(b, rmType, i);
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
        if (rmType != this.roles) {
          this.impAction(rmType[i], 1);
        }
        if (s.buffName.length) {
          let b = this.isSkillsBuff(s);
          // this.imBuffSkills(i, b, cc.v2(rm[i].x, rm[i].y));
          this.imBuffSkills(b, rmType, i);
        }
      }
    });
  },
  //执行buff技能
  imBuffSkills(b, rmType, i) {
    //1判断作用于第几个人/怪，
    //2判断头顶/身体前/脚下，
    //3判断层次
    //4记录各个人/怪的不同部位的buff数量，（3个头部，2个身体，2个脚下），即3*5*2==>30个定义变量，就在坐标那添加三个字段，头部数量，身体buff数量，脚下数量，默认为0；
    // let buff = b.zIndex ? this.buffSkills : this.imXia; //上层：下层

    let arr = this.mBuff;
    let numArr = this.mBuffNum;
    if (rmType == this.roles) {
      arr = this.rBuff;
      numArr = this.rBuffNum;
    }
    let bw = "jxbf";
    let sl = "jx";
    if (b.pos && b.zIndex) {
      bw = "tbf";
      sl = "tb";
    }
    if (!b.pos && b.zIndex) {
      bw = "stsbf";
      s1 = "st";
    }
    // { tb: 0, st: 0, jx: 0 },
    // {
    //     tbf: this.mtbbf5,
    //     stsbf: this.mstsbf5,
    //     sthbf: this.msthbf5,
    //     jxbf: this.mjxbf5,
    //   },
    return new Promise((res, err) => {
      let obj = arr[i];
      let numobj = numArr[i];
      let buff = obj[bw]; //拿到了挂载的buff
      if (numobj[sl] > buff.length - 1) {
        numobj[sl] = 0;
      }
      let num = numobj[sl];
      buff[num].armatureName = b.actionName;
      let aArrName = buff[num].getAnimationNames(b.actionName);
      buff[num].animationName = aArrName[0];
      buff[num].playAnimation(aArrName[0], 0);
      //   buff[num].node.setPosition(pos);
      buff[num].node.active = true;
      buff[num].once(dragonBones.EventObject.FRAME_EVENT, (event) => {
        res(event.name);
      });
      numobj[sl]++;
      console.log(num, bw,"===>sdssss");
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
  // 执行复活
  impFuHuo(rm, i) {
    let name = action[i].name;
    let playTime = action[i].playTime;
    return new Promise((res, err) => {
      rm.animationName = name;
      rm.playAnimation(name, playTime);
      setTimeout(() => {
        rm.animationName = action[2].name;
        rm.playAnimation(action[2].name, action[2].playTime);
      }, 3000);
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
