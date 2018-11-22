
cc.Class({
  extends: cc.Component,

  properties: {
    str:'N',
    num:35,
		bgNode:{default: null,type: cc.Node},
    strLabel:{default: null,type: cc.Label},
    numLabel:{default: null,type: cc.Label},
  },


  onLoad () {
		if(this.num<=15){
			this.str='B';
			this.bgNode.color={r:236,g:16,b:16,a:255};
		}else if(this.num<=30){
			this.str='I';
			this.bgNode.color={r:15,g:168,b:228,a:255};
		}else if(this.num<=45){
			this.str='N';
			this.bgNode.color={r:205,g:17,b:231,a:255};
		}else if(this.num<=60){
			this.str='G';
			this.bgNode.color={r:235,g:148,b:19,a:255};
		}else{
			this.str='O';
			this.bgNode.color={r:41,g:162,b:18,a:255};
		}
		this.strLabel.string=this.str;
		this.numLabel.string=this.num;
  },

  
});
