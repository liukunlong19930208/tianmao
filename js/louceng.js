var floor=$(".content3box")
var btnli=$(".leftd")
// alert(btnli.length)
// alert(floor.length)

var colorarr=["#ea5f8d","#f7a945","#19c8a9","#f15453","#64c333","#0aa6e8","#000000","#000000"]
var now=0;
// window.onscroll=function(){
// for(var i=0; i<floor.length;i++){//遍历楼层或者按钮
//  	// console.log(floor[i].offsetTop)
//     if(floor[i].offsetTop<=obj.scrollTop+30){
//     //offsetTop表示元素到文档顶部的距离；
//     //scrollTop表示文档超出可视窗口的距离
//     	for(var j=0;j<btnli.length;j++){
//          btnli[j].style.background="#626262"
//     	}
//  		btnli[i].style.background=colorarr[i]
//  		 //now=i//在滑动到相应位置的按钮时，按钮亮起来了。但是把鼠标移动到别的位置的时候，当前的按钮还会一直亮着，不受影响
//  	}
//  }
// }
for(var i=0;i<btnli.length;i++){
	btnli[i].index=i;
    btnli[i].onclick=function(){
		now=this.index
	 // obj.scrollTop=floor[this.index].offsetTop
	 animate(obj,{scrollTop:floor[this.index].offsetTop-100})
	 }
	btnli[i].onmouseover=function(){
		for(var j=0;j<btnli.length;j++){
			if(now!=j){
				btnli[j].style.background=""
			}
			
		}
		this.style.background=colorarr[this.index]
	}
	btnli[i].onmouseout=function(){
		for(var h=0;h<btnli.length;h++){
			if(now!=h){
				btnli[h].style.background=""
			}	
		}
	}
}




// 1.每一个添加单击事件，跳转到相对应的楼层
//  obj.scrllTop=obfloor[i].offsetTop
//  全局变量记录单击元素的下标
//  2移入
//  判断时用全局变量