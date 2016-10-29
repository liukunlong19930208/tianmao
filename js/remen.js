//获取
var box=getClass("box");
var zhezhao=getClass("zhezhao");
//移入事件，设置样式
for(var i=0;i<box.length;i++){
	box[i].aa=i;//给box设置aa属性，设置属性不需要定义，直接用 即可以记录图片的下标，在定义事件之前写
	box[i].onmouseover=function(){
		zhezhao[this.aa].style.display="block"//this指的是触发了当前的事件，指向box,然后设置aa找到它的属性
	}//this.aa指当前元素的下标
	box[i].onmouseout=function(){
		zhezhao[this.aa].style.display="none"
	}
}


//猫头头出现
var maowen=$(".maowen")
var mrmao=$(".mrmao")
for(var i=0;i<maowen.length;i++){
	maowen[i].aa=i;
	maowen[i].onmouseover=function(){
		for(var j=0;j<mrmao.length;j++){
			animate(mrmao[j],{height:0},300)
		}
		animate(mrmao[this.aa],{height:15},300)
	}
	maowen[i].onmouseout=function(){
		animate(mrmao[this.aa],{height:0},300)
	}
}


//得失焦点
var text=getClass("text")[0]
	text.onfocus=function(){
		if(text.value=="每日千件秒杀"){
			text.value="";
		}
	}
	text.onblur=function(){
		if(text.value==""){
		text.value="每日千件秒杀";
		}
	}

//得失焦点顶顶上的
var sousuohezi=getClass("sousuohezi")[0]
	sousuohezi.onfocus=function(){
		if(sousuohezi.value=="CPB肌肤之光入驻"){
			sousuohezi.value="";
		}
	}
	sousuohezi.onblur=function(){
		if(sousuohezi.value==""){
		sousuohezi.value="CPB肌肤之光入驻";
		}
	}


//透明度
var lidan=$(".lidan")
// alert(lidan.length)
for(var i=0;i<lidan.length;i++){
	lidan[i].aa=i;
	lidan[i].onmouseover=function(){
		animate(lidan[this.aa],{opacity:0.7},300)
	}
	lidan[i].onmouseout=function(){
		animate(lidan[this.aa],{opacity:1},300)
	}
}


//图片放大
var zmm=$(".zmm")
var zhangmiaomiao=$(".zhangmiaomiao")
// alert(zhangmiaomiao.length)
for(var i=0;i<zmm.length;i++){
	zmm[i].aa=i;
	zmm[i].onmouseover=function(){
		animate(zhangmiaomiao[this.aa],{height:150,width:150},200)
	}
	zmm[i].onmouseout=function(){
		animate(zhangmiaomiao[this.aa],{height:140,width:140},200)
	}
}

//移动图片
//中间较大一点的图片
 var mahuan=$(".mahuan")
 // alert(mahuan.length)
 var mxh=$(".mxh")

 // alert(mxh.length)
 for(var i=0;i<mahuan.length;i++){
 	mahuan[i].aa=i
 	mahuan[i].onmouseover=function(){
 		
 		animate(mxh[this.aa],{marginLeft:80},300)
 	}
 	mahuan[i].onmouseout=function(){
 		
 		animate(mxh[this.aa],{marginLeft:92},300)
 	}
 } 
//右边较小的图图
  var mahuan1=$(".mahuan1")
  var mxh1=$(".mxh1")
  // alert(mxh1.length)
  for(var i=0;i<mahuan1.length;i++){
  	   mahuan1[i].aa=i
  	   mahuan1[i].onmouseover=function(){
 		animate(mxh1[this.aa],{marginLeft:120},300)	
 		}
 		mahuan1[i].onmouseout=function(){
 		animate(mxh1[this.aa],{marginLeft:140},300)	
 		}
 	}
//使用定位做的右边小图
var mahuan2=$(".mahuan2")
  var mxh2=$(".mxh2")
  // alert(mxh1.length)
  for(var i=0;i<mahuan2.length;i++){
  	   mahuan2[i].aa=i
  	   mahuan2[i].onmouseover=function(){
 		animate(mxh2[this.aa],{left:135},300)	
 		}
 		mahuan2[i].onmouseout=function(){
 		animate(mxh2[this.aa],{left:148},300)	
 		}
 	}
//超电酷玩部分的手机定位
var mahuan3=$(".mahuan3")[0]
  var mxh3=$(".mxh3")[0]
  	   mahuan3.onmouseover=function(){
 		animate(mxh3,{left:275},300)	
 		}
 		mahuan3.onmouseout=function(){
 		animate(mxh3,{left:295},300)	
 		}
 	

//右边导航的划过效果
var yya=$(".yya")
var r=$(".r")
for (var i = 0; i < r.length; i++) {
  r[i].index=i
  r[i].onmouseover=function(){
	animate(yya[this.index],{width:90},200)
    }
  r[i].onmouseout=function(){
	animate(yya[this.index],{width:0},200)
  }
};

var yya1=$(".yya1")[0]
var r11=$(".r11")[0]
  r11.onmouseover=function(){
	animate(yya1,{display:"block"},200)
    }
  r11.onmouseout=function(){
	animate(yya1,{display:"none"},200)
  }



//banner部分的隐藏框
var WW=$(".WW")
var NvZ=$(".NvZ")[0]
for (var i = 0; i < WW.length; i++) {
	WW[i].index=i
   WW[i].onmouseover=function(){
   	 NvZ.style.display="block"
   }
   WW[i].onmouseout=function(){
   	NvZ.onmouseover=function(){
   		NvZ.style.display="block"
   	}
   	NvZ.onmouseout=function(){
   		NvZ.style.display="none"
   	}
   	 NvZ.style.display="none"
   }
};