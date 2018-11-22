cc.Class({
	extends: cc.Component,

	properties: {
		curr:false,
		text:1,
		Label: {default: null,type: cc.Label},
	},

	onLoad () {
		if(this.curr){
			this.node.color={r:255,g:255,b:0,a:255};
		}
		this.Label.string=this.text;
	},
  
  click(){
    var hidebox=cc.find('hidebox');
    if(!this.curr){
      cc.find('Canvas/page').children.forEach(function(v,i){
        v.getComponent('tabbarjs').curr=false;
        v.color={r:255,g:255,b:255,a:255};
      })
      this.curr=true;
      this.onLoad();
      // cc.log(cc.find('Canvas').getComponent('gamejs').myscrollView);
      cc.find('Canvas').getComponent('gamejs').myscrollView.scrollToOffset(cc.v2(0,(this.text-1)*540));
      // cc.find('Canvas/ScrollView').y=200+(this.text-1)*650;
    }
  },
  
  


});
