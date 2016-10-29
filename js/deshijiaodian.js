var text=getClass("text")[0]
	text.onfocus=function(){
		if(text.value=="看欧洲杯!"){
			text.value="";
		}
	}
	text.onblur=function(){
		if(text.value==""){
			text.value="看欧洲杯!";
		}
	}