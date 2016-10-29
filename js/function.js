function getClass(selector,father){
	father=father||document
   if(father.getElementsByClassName){
   	return father.getElementsByClassName(selector)
   }else{
   	var newarr=[];
   	var all=father.getElementsByTagName("*");//找所有标签

   	for(var i=0;i<all.length;i++){
   		if(check(all[i].className,selector)){
   		// if(all[i].className==selector)//取类名，找到符合的
   			newarr.push(all[i])
   		}
   	}
   	return newarr;
   }
}
function check(str,selector){
	var arr=str.split(" ") 
      for(var i in arr){
		if(arr[i]==selector){
			return true
		}
	}
	return false;
}

//2、获取样式的兼容函数
/*getClass(ele,attr)
ele:操作document的对象
attr：获取哪个属性的值*/
function getStyle(ele,attr){
   if(ele.currentStyle){
      return ele.currentStyle[attr]
   }else{
      return getComputedStyle(ele,null)[attr]
   }
}


//3、获取元素的函数  参数类型必须都是字符串
function $(selector,father){
   var father=father||document
    if(typeof selector=="string"){
      selector=selector.replace(/^\s*|\s*$/g,"")//去掉字符串前后的空格
      if(selector.charAt(0)=="."){//比较指定位置的字符是否是“.”
      return   getClass(selector.slice(1),father)//截取名字
      }else if(selector.charAt(0)=="#"){
       return father.getElementById(selector.slice(1))
      }else if(/^[a-z1-6]{1,10}/.test(selector)){//正则获取标签名
         return father.getElementsByTagName(selector)
      }else if(typeof selector=="function"){
         window.onload=function(){
            selector();
         }
      }
    }
}

//滚动条出现消失效果
document.documentElement.scrollTop=1;
var obj;
if(document.documentElement.scrollTop){
   obj=document.documentElement;
}else{
   obj=document.body;
}  