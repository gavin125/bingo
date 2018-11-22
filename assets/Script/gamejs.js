
cc.Class({
  extends: cc.Component,

  properties: {
  	clock:200,
		timeLabel: {default: null,type: cc.Label},
		sendNode: {default: null,type: cc.Node},
		myscrollView: {default: null,type: cc.ScrollView},
		hideboxNode: {default: null,type: cc.Node},
    pageNode: {default: null,type: cc.Node},
		ballPrefab: {default: null,type: cc.Prefab},
		trayPrefab: {default: null,type: cc.Prefab},
		cardPrefab: {default: null,type: cc.Prefab},
		tabbarPrefab: {default: null,type: cc.Prefab},
		endLabel: {default: null,type: cc.Label},
  },


  onLoad () {  
		this.num=window.cardnum?window.cardnum:5;
    this.initDate();
    this.hideboxNode.height=490+(Math.ceil(this.num/2)-1)*540;

		for(let i=1;i<=this.num;i++){
			var newTray = cc.instantiate(this.trayPrefab);
      newTray.getComponent('trayjs').data=this.initTrayData();
			this.hideboxNode.addChild(newTray);
		}
    
		if(Math.ceil(this.num/2)>1){
			for(let i=1;i<=Math.ceil(this.num/2);i++){
				var newTabbar = cc.instantiate(this.tabbarPrefab);
				if(i==1){newTabbar.getComponent('tabbarjs').curr=true;}
				newTabbar.getComponent('tabbarjs').text=i;
				this.pageNode.addChild(newTabbar);
			}
		}

		this.timeLabel.string=this.clock;
		this._time=0;
		this._doneArr=[];
		this.going=true;

  },

  // start () {},

  update (dt) {
		if(!this.going){return;}
		// 倒计时
    if(this.clock<0){
      this.gameEnd('GameOver! TIME OUT!');
    }else{
      this.clock-=dt;
      this.timeLabel.string=Math.ceil(this.clock);
    }
		
		// 发球
		if(this._time>5){
			this._time=0;
			this.addBall();
		}else{this._time+=dt;}
		
  },
	
	// 初始化数据
  initDate(){
		var _this=this;
		_this.success=0;
		_this.baseArr=[];//1-75
		for(var i=1;i<76;i++){_this.baseArr.push(i);}
		
		_this.baseBingo={
			B:_this.baseArr.slice(0,15),
			I:_this.baseArr.slice(15,30),
			N:_this.baseArr.slice(30,45),
			G:_this.baseArr.slice(45,60),
			O:_this.baseArr.slice(60,75),
		};

	},
  
  // 初始化单个游戏盘
  initTrayData(n){
    var _this=this;
    var arr=[];
    var listB=_this.randomCard(_this.baseBingo.B,5);
    var listI=_this.randomCard(_this.baseBingo.I,5);
    var listN=_this.randomCard(_this.baseBingo.N,4);
    var listG=_this.randomCard(_this.baseBingo.G,5);
    var listO=_this.randomCard(_this.baseBingo.O,5);
    
    listB.forEach(function(v,i){arr.push(new _this.Card(v,false));})
    listI.forEach(function(v,i){arr.push(new _this.Card(v,false));})
    listN.forEach(function(v,i){arr.push(new _this.Card(v,false));})
    listG.forEach(function(v,i){arr.push(new _this.Card(v,false));})
    listO.forEach(function(v,i){arr.push(new _this.Card(v,false));})
    arr.splice(12,0,new _this.Card('',true));
    return arr;
  },
	
	// 从数组中随机抽取n项生成新数组（n<arr.length）
	randomCard(arr,n){
    var copy=[];
    arr.forEach(function(v,i){copy[i]=v});
		var temp=[];
		for(var i=0;i<n;i++){
			var t=Math.floor(Math.random()*copy.length);
			temp.push(copy.splice(t,1)[0])
		}
		return temp;
	},
	
	// 卡构造函数
	Card(num,sign){
		this.num=num;
		this.sign=sign;
	},
	

	
	
	
	// 发球
	addBall(){
		var newBall = cc.instantiate(this.ballPrefab);
		newBall.getComponent('balljs').num=this.randomBall();
		this.sendNode.insertChild(newBall,0);
	}, 
	
	// 随机一个球号
	randomBall(){
		var t=Math.floor(Math.random()*this.baseArr.length);
		var temp=this.baseArr.splice(t,1)[0];
		this._doneArr.push(temp);
		return temp;
	},
	



  // 游戏结束
  gameEnd(str){
		this.going=false;
    this.node.getChildByName('gameend').active=true;
		this.endLabel.string=str;
  },

  back(){
    cc.director.loadScene("main");
  },
	
  again(){
    cc.director.loadScene("game");
  },
  


});
