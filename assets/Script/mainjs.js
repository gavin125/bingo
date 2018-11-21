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

  },

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {},

  start () {
    
  },

  // update (dt) {},

  gamestart(){
		this.node.getChildByName('select').active=true;
    //cc.director.loadScene("game");
  },
	
	card1(){window.cardnum=1;cc.director.loadScene("game");},
	card2(){window.cardnum=2;cc.director.loadScene("game");},
	card3(){window.cardnum=3;cc.director.loadScene("game");},
	card4(){window.cardnum=4;cc.director.loadScene("game");},
	card5(){window.cardnum=5;cc.director.loadScene("game");},
	card6(){window.cardnum=6;cc.director.loadScene("game");},
	card7(){window.cardnum=7;cc.director.loadScene("game");},
	card8(){window.cardnum=8;cc.director.loadScene("game");},

});
