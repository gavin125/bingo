"use strict";
cc._RF.push(module, '2933d+A/jtAgaqK+ueNu8kz', 'gamejs');
// Script/gamejs.js

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
				area: { default: null, type: cc.Node },
				cardPrefab: { default: null, type: cc.Prefab }

		},

		// LIFE-CYCLE CALLBACKS:

		onLoad: function onLoad() {
				this.initDate();
				this.initDraw();
		},
		start: function start() {},


		//   update (dt) {
		//     if(this.conf.timer<0){
		//       this.gameover();return;
		//     }else{
		//       this.conf.timer-=dt;
		//       this.time.string=Math.floor(this.conf.timer);
		//     }
		//   },

		// 初始化数据
		initDate: function initDate() {
				var _this = this;
				_this.baseArr = []; //1-75
				for (var i = 1; i < 76; i++) {
						_this.baseArr.push(i);
				}

				_this.baseBingo = {
						B: _this.baseArr.slice(0, 15),
						I: _this.baseArr.slice(15, 30),
						N: _this.baseArr.slice(30, 45),
						G: _this.baseArr.slice(45, 60),
						O: _this.baseArr.slice(60, 75)
				};

				_this.CardArr = [];
				var listB = _this.randomArr(_this.baseBingo.B, 5);
				var listI = _this.randomArr(_this.baseBingo.I, 5);
				var listN = _this.randomArr(_this.baseBingo.N, 4);
				var listG = _this.randomArr(_this.baseBingo.G, 5);
				var listO = _this.randomArr(_this.baseBingo.O, 5);

				listB.forEach(function (v, i) {
						_this.CardArr.push(new _this.Card(v, false));
				});
				listI.forEach(function (v, i) {
						_this.CardArr.push(new _this.Card(v, false));
				});
				listN.forEach(function (v, i) {
						_this.CardArr.push(new _this.Card(v, false));
				});
				listG.forEach(function (v, i) {
						_this.CardArr.push(new _this.Card(v, false));
				});
				listO.forEach(function (v, i) {
						_this.CardArr.push(new _this.Card(v, false));
				});
				_this.CardArr.splice(12, 0, new _this.Card('', true));

				cc.log(_this);
		},

		// 从数组中随机抽取n项生成新数组（n<arr.length）
		randomArr: function randomArr(arr, n) {
				var temp = [];
				for (var i = 0; i < n; i++) {
						var t = Math.floor(Math.random() * arr.length);
						temp.push(arr.splice(t, 1)[0]);
				}
				return temp;
		},


		// 	// 复制一维数组
		// 	copyArr(arr){
		// 		var temp=[];
		// 		arr.forEach(function(v,i){temp.push(v)})
		// 		return temp;
		// 	},
		// 卡构造函数
		Card: function Card(num, sign) {
				this.num = num;
				this.sign = sign;
		},


		// 绘制界面
		initDraw: function initDraw() {
				var _this = this;
				_this.CardArr.forEach(function (v, i) {
						var newCard = cc.instantiate(_this.cardPrefab);
						newCard.getComponent('cardjs').num = v.num;
						newCard.getComponent('cardjs').sign = v.sign;
						_this.area.addChild(newCard);
				});
		},


		// 游戏结束
		gameover: function gameover() {
				var _this = this;
				_this.node.getChildByName('gameover').active = true;
		},
		back: function back() {
				cc.director.loadScene("main");
		},
		again: function again() {
				cc.director.loadScene("game");
		}
});

cc._RF.pop();