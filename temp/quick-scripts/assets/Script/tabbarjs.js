(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/tabbarjs.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '739fdaKv91HlZlgtHgVQFZQ', 'tabbarjs', __filename);
// Script/tabbarjs.js

'use strict';

cc.Class({
  extends: cc.Component,

  properties: {
    curr: false,
    text: 1,
    Label: { default: null, type: cc.Label }
  },

  onLoad: function onLoad() {
    if (this.curr) {
      this.node.color = { r: 255, g: 255, b: 0, a: 255 };
    }
    this.Label.string = this.text;
  },
  click: function click() {
    var hidebox = cc.find('hidebox');
    if (!this.curr) {
      cc.find('Canvas/page').children.forEach(function (v, i) {
        v.getComponent('tabbarjs').curr = false;
        v.color = { r: 255, g: 255, b: 255, a: 255 };
      });
      this.curr = true;
      this.onLoad();
      // cc.log(cc.find('Canvas').getComponent('gamejs').myscrollView);
      cc.find('Canvas').getComponent('gamejs').myscrollView.scrollToOffset(cc.v2(0, (this.text - 1) * 540));
      // cc.find('Canvas/ScrollView').y=200+(this.text-1)*650;
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
        //# sourceMappingURL=tabbarjs.js.map
        