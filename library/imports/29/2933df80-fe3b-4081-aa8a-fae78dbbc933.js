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
		clock: 200,
		timeLabel: { default: null, type: cc.Label },
		areaNode: { default: null, type: cc.Node },
		sendNode: { default: null, type: cc.Node },
		cardPrefab: { default: null, type: cc.Prefab },
		ballPrefab: { default: null, type: cc.Prefab },
		endLabel: { default: null, type: cc.Label }

	},

	// LIFE-CYCLE CALLBACKS:

	onLoad: function onLoad() {
		this.initDate();
		this.initDraw();
		this.timeLabel.string = this.clock;
		this._time = 0;
		this._doneArr = [];
		this.going = true;
	},


	// start () {},

	update: function update(dt) {
		if (!this.going) {
			return;
		}
		// 倒计时
		if (this.clock < 0) {
			this.gameEnd('Game Over');
		} else {
			this.clock -= dt;
			this.timeLabel.string = Math.ceil(this.clock);
		}

		// 发球
		if (this._time > 5) {
			this._time = 0;
			this.addBall();
		} else {
			this._time += dt;
		}
	},


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
		var listB = _this.randomCard(_this.baseBingo.B, 5);
		var listI = _this.randomCard(_this.baseBingo.I, 5);
		var listN = _this.randomCard(_this.baseBingo.N, 4);
		var listG = _this.randomCard(_this.baseBingo.G, 5);
		var listO = _this.randomCard(_this.baseBingo.O, 5);

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
	randomCard: function randomCard(arr, n) {
		var temp = [];
		for (var i = 0; i < n; i++) {
			var t = Math.floor(Math.random() * arr.length);
			temp.push(arr.splice(t, 1)[0]);
		}
		return temp;
	},


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
			_this.areaNode.addChild(newCard);
		});
	},


	// 发球
	addBall: function addBall() {
		var newBall = cc.instantiate(this.ballPrefab);
		newBall.getComponent('balljs').num = this.randomBall();
		this.sendNode.insertChild(newBall, 0);
	},


	// 随机一个球号
	randomBall: function randomBall() {
		var t = Math.floor(Math.random() * this.baseArr.length);
		var temp = this.baseArr.splice(t, 1)[0];
		this._doneArr.push(temp);
		return temp;
	},


	// 是否完成
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
		if (temp) {
			this.gameEnd('Winner!');
		} else {
			this.clock -= 5;
		}
	},


	// 游戏结束
	gameEnd: function gameEnd(str) {
		this.going = false;
		this.node.getChildByName('gameend').active = true;
		this.endLabel.string = str;
	},
	back: function back() {
		cc.director.loadScene("main");
	},
	again: function again() {
		cc.director.loadScene("game");
	}
});

cc._RF.pop();