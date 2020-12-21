// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  extends: cc.Component,

  properties: {
    yinJi: {
      type: cc.Node,
      default: [],
    },
    time: 0.3,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    //执行印记动作
    this.yinJiAction();
    this.isShow = false;
  },

  start() {},
  yinJiAction() {
    this.schedule(function () {
      this.yinJi[0].active = this.isShow;
      this.yinJi[1].active = !this.isShow;
      this.isShow = !this.isShow;
    }, this.time);
  },
  // update (dt) {},
});
