import JN from "./skillsActionJson.js";
import BF from "./buffs.js";
import MS from "./monsterSkills";

const mp = [
  {
    x: 256,
    y: -42,
  },
  {
    x: 109,
    y: 43,
  },
  {
    x: 350,
    y: 43,
  },
  {
    x: 420,
    y: -124,
  },
  {
    x: 173,
    y: -124,
  },
];
const rp = [
  {
    x: -256,
    y: -42,
  },
  {
    x: -109,
    y: 43,
  },
  {
    x: -350,
    y: 43,
  },
  {
    x: -420,
    y: -124,
  },
  {
    x: -173,
    y: -124,
  },
  {
    x: -295,
    y: -124,
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
    editbox: cc.EditBox,
    // 下拉菜单模块
    ComboBoxPrefab: cc.Prefab, // 下拉菜单预制体
    comboboxNode: cc.Node, // 下拉菜单根节点
    rSign: {
      type: cc.Node,
      default: [],
    },
    mSign: {
      type: cc.Node,
      default: [],
    },
    yinJi: {
      type: cc.Prefab,
      default: [],
    },
    // 切换当前测试技能
    rmSkillsType: 1, //1人物技能，2怪物技能
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.initData();
    this.editbox.node.on("editing-return", this.search.bind(this));
    this.yj = 0; // 默认第一个印记
  },
  // 匹配印记
  switchYinJi(str) {
    switch (str) {
      case "xiuLuoYin":
        this.yj = 0;
        break;
    }
  },
  // 添加印记
  addYinJi(type, i, str) {
    this.switchYinJi(str);
    let node = cc.instantiate(this.yinJi[this.yj]);
    let rm = type == this.monsters ? this.mSign : this.rSign;
    if (rm[i].children.length > 4) {
      rm[i].children[0].destroy();
    }
    rm[i].addChild(node);
    // console.log(rm[i], "===>>>??");
  },
  search(editbox) {
    // console.log(editbox.string, "====>xxxxxx");
    let arr = [];
    let reg = new RegExp(editbox.string);
    JN.forEach((item, index) => {
      if (item.skillName.match(reg)) {
        return arr.push(index);
      }
    });
    console.log(arr, "==>iiiii");
    if (arr[0]) {
      this.GetSelectedItem(arr[0]);
    }
  },
  // 初始化数据
  initData() {
    // 初始化下拉菜单模块
    this.currentArea = 0;
    this.initComboBox();

    // 人的buff记录
    this.rBuffNum = [
      { tb: 0, st: 0, jx: 0, sth: 0 },
      { tb: 0, st: 0, jx: 0, sth: 0 },
      { tb: 0, st: 0, jx: 0, sth: 0 },
      { tb: 0, st: 0, jx: 0, sth: 0 },
      { tb: 0, st: 0, jx: 0, sth: 0 },
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
      { tb: 0, st: 0, jx: 0, sth: 0 },
      { tb: 0, st: 0, jx: 0, sth: 0 },
      { tb: 0, st: 0, jx: 0, sth: 0 },
      { tb: 0, st: 0, jx: 0, sth: 0 },
      { tb: 0, st: 0, jx: 0, sth: 0 },
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
  initComboBox(index = 0) {
    let node = cc.instantiate(this.ComboBoxPrefab);
    let areaNameArr = [];
    let skillsArr = this.rmSkillsType == 1 ? JN : MS;
    for (let i = 0; i < skillsArr.length; i++) {
      areaNameArr.push(skillsArr[i].skillName);
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
    this.currentArea = index;
    console.log("选择区域：", this.currentArea);
    let skillsArr = this.rmSkillsType == 1 ? JN : MS;
    this.atcionSkills(skillsArr[this.currentArea]);
  },
  // 开始施法
  atcionSkills(s) {
    // 默认施法是第一个人物/怪
    let rm = s.sf ? this.roles : this.monsters;
    this.impAction(rm[0], 4).then(() => {
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
    let rm, erRm, rmType;
    if (s.sf) {
      rm = s.skillType == 1 ? rp : mp;
      if (s.seEffect) {
        erRm = rp;
        rmType = this.roles;
      } else {
        erRm = mp;
        rmType = this.monsters;
      }
    } else {
      rm = s.skillType == 1 ? mp : rp;
      if (s.seEffect) {
        erRm = mp;
        rmType = this.monsters;
      } else {
        erRm = rp;
        rmType = this.roles;
      }
    }
    let prPos = cc.v2(rm[0].x, rm[0].y); //主技能中心点
    let erPos = cc.v2(erRm[0].x, erRm[0].y); //次技能中心点
    this.imSkills(0, s, prPos).then(() => {
      this.imErSkills(0, s, erPos).then(() => {
        for (let i = 0; i < s.skillNum; i++) {
          if (!s.seEffect) {
            // 组合技能，判断次技能出现的地方
            this.impAction(rmType[i], 1);
          }
          if (s.buffName.length) {
            let b = this.isSkillsBuff(s);
            this.imBuffSkills(b, rmType, i);
          }
          if (s.yj.length) {
            this.addYinJi(rmType, i, s.yj[0]);
          }
        }
      });
    });
  },
  // 组合技能类型二
  secondComSkills(s) {
    let rm, erRm, rmType;
    if (s.sf) {
      rm = s.skillType == 1 ? rp : mp;
      if (s.seEffect) {
        erRm = rp;
        rmType = this.roles;
      } else {
        erRm = mp;
        rmType = this.monsters;
      }
    } else {
      rm = s.skillType == 1 ? mp : rp;
      if (s.seEffect) {
        erRm = mp;
        rmType = this.monsters;
      } else {
        erRm = rp;
        rmType = this.roles;
      }
    }
    let prPos = cc.v2(rm[0].x, rm[0].y); //主技能中心点
    this.imSkills(0, s, prPos).then(() => {
      for (let i = 0; i < s.skillNum; i++) {
        let w = i;
        if (s.seEffect && !s.prEffect) {
          w = i + 1;
        }
        let erPos = cc.v2(erRm[w].x, erRm[w].y); //次技能坐标
        this.imErSkills(w, s, erPos).then(() => {
          if (!s.seEffect) {
            this.impAction(rmType[w], 1);
          }
          if (s.buffName.length) {
            let b = this.isSkillsBuff(s);
            this.imBuffSkills(b, rmType, w);
          }
          if (s.yj.length) {
            this.addYinJi(rmType, w, s.yj[0]);
          }
        });
      }
    });
  },
  // 组合技能类型三
  thirdComSkills(s) {
    let rm, erRm, rmType;
    if (s.sf) {
      rm = s.skillType == 1 ? rp : mp;
      if (s.seEffect) {
        erRm = rp;
        rmType = this.roles;
      } else {
        erRm = mp;
        rmType = this.monsters;
      }
    } else {
      rm = s.skillType == 1 ? mp : rp;
      if (s.seEffect) {
        erRm = mp;
        rmType = this.monsters;
      } else {
        erRm = rp;
        rmType = this.roles;
      }
    }
    for (let i = 0; i < s.skillNum; i++) {
      let w = i;
      if (s.seEffect && !s.prEffect) {
        w = i + 1;
      }
      let prPos = cc.v2(rm[w].x, rm[w].y);
      let erPos = cc.v2(erRm[w].x, erRm[w].y);
      this.imSkills(w, s, prPos).then(() => {
        this.imErSkills(w, s, erPos).then(() => {
          if (!s.seEffect) {
            this.impAction(rmType[w], 1);
          }
          if (s.buffName.length) {
            let b = this.isSkillsBuff(s);
            this.imBuffSkills(b, rmType, w);
          }
          if (s.yj.length) {
            this.addYinJi(rmType, w, s.yj[0]);
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
    if (s.sf) {
      if (s.skillType == 1) {
        rm = rp;
        rmType = this.roles;
      } else {
        rm = mp;
        rmType = this.monsters;
      }
    } else {
      if (s.skillType == 1) {
        rm = mp;
        rmType = this.monsters;
      } else {
        rm = rp;
        rmType = this.roles;
      }
    }
    for (let i = 0; i < s.skillNum; i++) {
      let w = i;
      if (s.skillType == 1 && !s.prEffect) {
        w = i + 1;
      }
      let prPos = cc.v2(rm[w].x, rm[w].y);
      //复活
      if (s.id == 2205 || s.id == 1305) {
        prPos = cc.v2(rp[5].x, rp[5].y);
        this.imSkills(w, s, prPos).then(() => {
          this.impFuHuo(this.roles[5], 0);
          // this.addYinJi(this.roles, 5, s.yj[0]);
          return;
        });
      }
      this.imSkills(w, s, prPos).then(() => {
        //若是增益效果的不执行动作 --- 组合技能要留意次技能出现的地方
        if (s.skillType != 1) {
          this.impAction(rmType[w], 1);
        }
        if (s.buffName.length) {
          let b = this.isSkillsBuff(s);
          this.imBuffSkills(b, rmType, w);
        }
        if (s.yj.length && s.id != 1305) {
          this.addYinJi(rmType, w, s.yj[0]);
        }
      });
    }
  },
  // 不组合技能类型-以战斗盘中心定位
  firstNoComSkills(s) {
    let rm, rmType;
    if (s.sf) {
      if (s.skillType == 1) {
        rm = rp;
        rmType = this.roles;
      } else {
        rm = mp;
        rmType = this.monsters;
      }
    } else {
      if (s.skillType == 1) {
        rm = mp;
        rmType = this.monsters;
      } else {
        rm = rp;
        rmType = this.roles;
      }
    }
    let prPos = cc.v2(rm[0].x, rm[0].y); //主技能中心点 ，
    this.imSkills(0, s, prPos).then(() => {
      for (let i = 0; i < s.skillNum; i++) {
        let w = i;
        if (s.skillType == 1 && !s.prEffect) {
          w = i + 1;
        }
        if (s.skillType != 1) {
          this.impAction(rmType[w], 1);
        }
        if (s.buffName.length) {
          let b = this.isSkillsBuff(s);
          this.imBuffSkills(b, rmType, w);
        }
        if (s.yj.length) {
          this.addYinJi(rmType, w, s.yj[0]);
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
    let obj = arr[i];
    let numobj = numArr[i];
    if (b.target) {
      obj = this.rBuff[0];
      numobj = this.rBuffNum[0];
    }
    // { tb: 0, st: 0, jx: 0, sth: 0 },
    // {
    //   tbf: this.rtbbf1,
    //   stsbf: this.rstsbf1,
    //   sthbf: this.rsthbf1,
    //   jxbf: this.rjxbf1,
    // },
    let bw = "jxbf";
    let sl = "jx";
    switch (b.bw) {
      case 1:
        bw = "tbf";
        sl = "tb";
        break;
      case 2:
        bw = "stsbf";
        s1 = "st";
        break;
      case 3:
        bw = "sthbf";
        s1 = "sth";
        break;
    }
    return new Promise((res, err) => {
      let buff = obj[bw]; //拿到了挂载的buff，
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
      console.log(num, bw);
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
      // console.log(aArrName,"==>???")
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