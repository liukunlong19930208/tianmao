//offsetTop表示元素到文档顶部的距离；
 //scrollTop表示文档超出可视窗口的距离
var box=$(".ycboxbig")[0]
var leftdao=$(".leftdao")[0]
var floor=$(".content3box")
var btnli=$(".leftd")
var colorarr=["#ea5f8d","#f7a945","#19c8a9","#f15453","#64c333","#0aa6e8","#000000","#000000"]
var now=0;
var flagdown="1"//定义开关
var flagup="1"
window.onscroll=function(){
  if(obj.scrollTop>=800){
    if(flagdown==1){//开关控制滚动条的位置，让它在到了特定的位置即使鼠标不出现也能够出现
      animate(box,{top:0})
      animate(leftdao,{width:36,height:380})
      flagdown=2;
    }
    flagup=1
  }else{
    if(flagup==1){
       animate(box,{top:-50})
       
     animate(leftdao,{width:0,height:0}) 
       flagup=2
    }
   
    flagdown=1;
   
  }

  for(var i=0; i<floor.length;i++){//遍历楼层或者按钮
    if(floor[i].offsetTop<=obj.scrollTop+280){
    //offsetTop表示元素到文档顶部的距离；
    //scrollTop表示文档超出可视窗口的距离
      for(var j=0;j<btnli.length;j++){
         btnli[j].style.background="#626262"
      }
    btnli[i].style.background=colorarr[i];
     now=i//在滑动到相应位置的按钮时，按钮亮起来了。但是把鼠标移动到别的位置的时候，当前的按钮还会一直亮着，不受影响
  }
 }
 var anxu=$(".anxu")
 var clienth=document.documentElement.clientHeight
 for (var i = 0; i < anxu.length; i++) {
   if(anxu[i].offsetTop<(clienth+obj.scrollTop-400)&&!anxu[i].flag){
    anxu[i].flag=true
    var imgss=$("img",anxu[i])
    for (var j = 0; j < imgss.length; j++) {
      imgss[j].src=imgss[j].getAttribute("url")
    };
   }
 };
}