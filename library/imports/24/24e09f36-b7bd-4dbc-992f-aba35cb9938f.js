"use strict";
cc._RF.push(module, '24e0982t71NvJkvq6NcuZOP', 'cardjs');
// Script/cardjs.js

"use strict";

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
        num: 1,
        sign: false,
        numlabel: { default: null, type: cc.Label },
        signnode: { default: null, type: cc.Node }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.numlabel.string = this.num;
        this.signnode.active = this.sign;
    }
}

//     start () {
// 
//     },

// update (dt) {},
);

cc._RF.pop();