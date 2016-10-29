var imgbox=getClass("imgbox")[0]
 var img=imgbox.getElementsByTagName("a")//图片
 var btnbox=getClass("btn")[0]
 var btn=btnbox.getElementsByTagName("li")//小圆点
 var ban=getClass("banditu1")
 var num=0
 function change(){
    num++;
   if(num>=img.length){//图片的长度也就是个数
      num=0
   }//当图片都循环完成后，再将num清为0，即在开始新的一轮
   for(var i=0;i<img.length;i++){
      img[i].style.opacity=0
      ban[i].style.opacity=0
      btn[i].id=""
   }//为了把图片的层级和小圆点清空5和红色
   animate(img[num],{opacity:1})
   animate(ban[num],{opacity:1})
   
   btn[num].id="active"//让图片和小圆点想联系
} 
var t=setInterval(change,2000)

var banner=getClass("banner")[0]
banner.onmouseover=function(){
  clearInterval(t)
}
banner.onmouseout=function(){
  t=setInterval(change,2000)
}
for (var i=0;i<btn.length;i++) {
  btn[i].index=i
  btn[i].onmouseover=function(){
    for(var j=0;j<img.length;j++){
      img[j].style.opacity=0
      ban[j].style.opacity=0;
      btn[j].id=""
    }
  animate(img[this.index],{opacity:1})
  animate(ban[this.index],{opacity:1})
  
  this.id="active"
  num=this.index
  }
};