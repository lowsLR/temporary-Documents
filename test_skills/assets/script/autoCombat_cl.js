// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  extends: cc.Component,

  properties: {
    autoCombatBtn: cc.Button,
    chiLun: {
      type: cc.Node,
      default: [],
    },
    speet: 2, //齿轮旋转速度
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.autoCombatBtn.node.on("click", this.autoCombat.bind(this));
    this.isGear = false; //true->齿轮旋转，false->暂停旋转
  },

  start() {},
  autoCombat() {
    // console.log("点击了",this.chiLun);
    this.isGear = !this.isGear;
    if (this.isGear) {
      this.startGearAction();
    } else {
      this.stopGearAction();
    }
  },
  //播放齿轮旋转
  startGearAction() {
    let t = cc.tween;
    t(this.chiLun[0]).by(this.speet, { angle: 360 }).repeatForever().start();
    t(this.chiLun[1]).by(this.speet, { angle: -360 }).repeatForever().start();
  },
  // 暂停齿轮旋转
  stopGearAction() {
    this.chiLun[0].stopAllActions();
    this.chiLun[1].stopAllActions();
  },
  // update (dt) {},
});
