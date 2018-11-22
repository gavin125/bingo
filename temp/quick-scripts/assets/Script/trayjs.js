(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/trayjs.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '25c3dV5ipZDaJQ3cQlrRitQ', 'trayjs', __filename);
// Script/trayjs.js

'use strict';

cc.Class({
  extends: cc.Component,

  properties: {
    data: null,
    areaNode: { default: null, type: cc.Node },
    cardPrefab: { default: null, type: cc.Prefab }
  },

  onLoad: function onLoad() {
    var _this = this;
    _this.data.forEach(function (v, i) {
      var newCard = cc.instantiate(_this.cardPrefab);
      newCard.getComponent('cardjs').num = v.num;
      newCard.getComponent('cardjs').sign = v.sign;
      _this.areaNode.addChild(newCard);
    });
  },
  bingo: function bingo() {
    var temp = false;
    var signArr = [];
    this.areaNode.children.forEach(function (v, i) {
      signArr[i] = v.getComponent('cardjs').sign;
    });
    // 判断十三种情况
    if (signArr[0] && signArr[1] && signArr[2] && signArr[3] && signArr[4]) {
      temp = true;
    } else if (signArr[5] && signArr[6] && signArr[7] && signArr[8] && signArr[9]) {
      temp = true;
    } else if (signArr[10] && signArr[11] && signArr[12] && signArr[13] && signArr[14]) {
      temp = true;
    } else if (signArr[15] && signArr[16] && signArr[17] && signArr[18] && signArr[19]) {
      temp = true;
    } else if (signArr[20] && signArr[21] && signArr[22] && signArr[23] && signArr[24]) {
      temp = true;
    } else if (signArr[0] && signArr[5] && signArr[10] && signArr[15] && signArr[20]) {
      temp = true;
    } else if (signArr[1] && signArr[6] && signArr[11] && signArr[16] && signArr[21]) {
      temp = true;
    } else if (signArr[2] && signArr[7] && signArr[12] && signArr[17] && signArr[22]) {
      temp = true;
    } else if (signArr[3] && signArr[8] && signArr[13] && signArr[18] && signArr[23]) {
      temp = true;
    } else if (signArr[4] && signArr[9] && signArr[14] && signArr[19] && signArr[24]) {
      temp = true;
    } else if (signArr[0] && signArr[6] && signArr[12] && signArr[18] && signArr[24]) {
      temp = true;
    } else if (signArr[4] && signArr[8] && signArr[12] && signArr[16] && signArr[20]) {
      temp = true;
    } else if (signArr[0] && signArr[4] && signArr[12] && signArr[20] && signArr[24]) {
      temp = true;
    }

    var gamejs = cc.find('Canvas').getComponent('gamejs');
    if (temp) {
      this.node.getChildByName('win').active = true;
      gamejs.success++;
      if (gamejs.success === gamejs.num) {
        //全部bingo
        gamejs.gameEnd('Winner! ALL BINGO!');
      }
    } else {
      gamejs.clock -= 5;
    }
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
        //# sourceMappingURL=trayjs.js.map
        