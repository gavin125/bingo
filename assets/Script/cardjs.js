
cc.Class({
  extends: cc.Component,

  properties: {
    num:1,
  	sign:false,
  	numLabel:{default: null,type: cc.Label},
  	signNode:{default: null,type: cc.Node},
  },


  onLoad () {
  	this.numLabel.string=this.num;
  	this.signNode.active=this.sign;
  },


  click(){
    if(!this.sign){
      var gamejs=cc.find('Canvas').getComponent('gamejs');
      // 判断当前点击的卡是否已经派发
      if(this.checkIn(gamejs._doneArr,this.num)){
        this.sign=!this.sign;  
      }else{
        gamejs.clock-=5;
      };
      this.onLoad();
    }
  },
  
  // 判断数组中是否包含数
  checkIn(arr,n){
	var temp=false;
	var len=arr.length;
	if(len>0){
	  for(var i=0;i<len;i++){
	  	if(arr[i]==n){temp=true; break;}
	  }
	}
	return temp;
  },

});
