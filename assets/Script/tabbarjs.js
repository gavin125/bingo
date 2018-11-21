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
        active:false,
		text:1,
		Label: {default: null,type: cc.Label},
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
		if(this.active){
			this.node.scaleX=1.1;
			this.node.scaleY=1.1;
			this.node.color={r:255,g:255,b:0,a:255};
		}
		this.Label.string=this.text;
	},

//     start () {
// 
//     },

    // update (dt) {},
});
