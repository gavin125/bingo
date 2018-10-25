// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
  extends: cc.Component,

  properties: {
    str:'N',
    num:35,
    strLabel:{default: null,type: cc.Label},
    numLabel:{default: null,type: cc.Label},
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad () {
    this.strLabel.string=this.str;
    this.numLabel.string=this.num;
    cc.log(this.node)
    // switch(this.str){
    //   case 'B':this.node.
    // }
  },

  // start () {

  // },

  // update (dt) {},
});
