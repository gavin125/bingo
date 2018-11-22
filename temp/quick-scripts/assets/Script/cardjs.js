(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/cardjs.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '24e0982t71NvJkvq6NcuZOP', 'cardjs', __filename);
// Script/cardjs.js

'use strict';

cc.Class({
  extends: cc.Component,

  properties: {
    num: 1,
    sign: false,
    numLabel: { default: null, type: cc.Label },
    signNode: { default: null, type: cc.Node }
  },

  onLoad: function onLoad() {
    this.numLabel.string = this.num;
    this.signNode.active = this.sign;
  },
  click: function click() {
    if (!this.sign) {
      var gamejs = cc.find('Canvas').getComponent('gamejs');
      // 判断当前点击的卡是否已经派发
      if (this.checkIn(gamejs._doneArr, this.num)) {
        this.sign = !this.sign;
      } else {
        gamejs.clock -= 5;
      };
      this.onLoad();
    }
  },


  // 判断数组中是否包含数
  checkIn: function checkIn(arr, n) {
    var temp = false;
    var len = arr.length;
    if (len > 0) {
      for (var i = 0; i < len; i++) {
        if (arr[i] == n) {
          temp = true;break;
        }
      }
    }
    return temp;
  }
});

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
        //# sourceMappingURL=cardjs.js.map
        