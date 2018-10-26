"use strict";
cc._RF.push(module, '4716caAwCRBZpPOHFjGHC38', 'balljs');
// Script/balljs.js

'use strict';

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
				str: 'N',
				num: 35,
				strLabel: { default: null, type: cc.Label },
				numLabel: { default: null, type: cc.Label }
		},

		// LIFE-CYCLE CALLBACKS:

		onLoad: function onLoad() {
				if (this.num <= 15) {
						this.str = 'B';
						this.node.color = { r: 236, g: 16, b: 16, a: 255 };
				} else if (this.num <= 30) {
						this.str = 'I';
						this.node.color = { r: 15, g: 168, b: 228, a: 255 };
				} else if (this.num <= 45) {
						this.str = 'N';
						this.node.color = { r: 205, g: 17, b: 231, a: 255 };
				} else if (this.num <= 60) {
						this.str = 'G';
						this.node.color = { r: 235, g: 148, b: 19, a: 255 };
				} else {
						this.str = 'O';
						this.node.color = { r: 41, g: 162, b: 18, a: 255 };
				}
				this.strLabel.string = this.str;
				this.numLabel.string = this.num;
		}
}

// start () {

// },

// update (dt) {},
);

cc._RF.pop();