(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/balljs.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '4716caAwCRBZpPOHFjGHC38', 'balljs', __filename);
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
				bgNode: { default: null, type: cc.Node },
				strLabel: { default: null, type: cc.Label },
				numLabel: { default: null, type: cc.Label }
		},

		// LIFE-CYCLE CALLBACKS:

		onLoad: function onLoad() {
				if (this.num <= 15) {
						this.str = 'B';
						this.bgNode.color = { r: 236, g: 16, b: 16, a: 255 };
				} else if (this.num <= 30) {
						this.str = 'I';
						this.bgNode.color = { r: 15, g: 168, b: 228, a: 255 };
				} else if (this.num <= 45) {
						this.str = 'N';
						this.bgNode.color = { r: 205, g: 17, b: 231, a: 255 };
				} else if (this.num <= 60) {
						this.str = 'G';
						this.bgNode.color = { r: 235, g: 148, b: 19, a: 255 };
				} else {
						this.str = 'O';
						this.bgNode.color = { r: 41, g: 162, b: 18, a: 255 };
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=balljs.js.map
        