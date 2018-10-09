		
				  var addressGz=document.getElementsByClassName('header')[0].getElementsByClassName('header-top')[0].getElementsByClassName('header-top-address')[0];
				   var cityBlock=document.getElementsByClassName('header-hover')[0];
               
               //          显示广州的代码
            var addressnNum=0;
             addressGz.onmouseover=function(){
             	  	cityBlock.style.display='block';
             }
               addressGz.onmouseout=function(){
             	  	cityBlock.style.display='none';
             }
             	cityBlock.onmouseover=function(){
             		this.style.display='block';
             	}
             	cityBlock.onmouseout=function(){
             		this.style.display='none';
             	}
//         急速卖车点击提交申请时的js时间代码  	
      var sellHeader_Input=document.getElementsByClassName('sellheader-collectImformation3')[0];
      var sellHeader_Button=document.getElementsByClassName('sellheader-collectImformation4')[0];
      var sellHeader_warnInf=document.getElementsByClassName('sellheader-collectImformation4-inner')[0];
       var sellHeader_return=document.getElementsByClassName('sellheader-collectImformation4-inner-return')[0];
               sellHeader_Button.onclick=function(){
	                  if(sellHeader_Input.value==''){
	                  	sellHeader_warnInf.style.display='block';
	                  }
                }
               sellHeader_return.onclick=function(){
               	   sellHeader_warnInf.style.display='none';
               }
//            单选框的选择代码

            var aGouAble=document.getElementsByClassName('radio-choose1-none');
				var aGouDisable=document.getElementsByClassName('radio-choose1-block');
				
				for(var i=0;i<aGouDisable.length;i++){
					
					aGouDisable[i].index=i;
					aGouDisable[i].onclick=function(){
						for(var i=0;i<aGouDisable.length;i++){
							aGouDisable[i].style.display='block';
							aGouAble[i].style.display='none';
						}
						aGouAble[this.index].style.display='block';
						this.style.display='none';
					}
				}
				
      //轮播图代码
      var oBanner_left=document.getElementsByClassName('sellCar-content-nav-leftImg')[0];
      var oBanner_right=document.getElementsByClassName('sellCar-content-nav-rightImg')[0];
      var oBanner_ul=document.getElementsByClassName('content-banner-ul')[0];
      var num=0;
      var speed=1;
      oBanner_left.onclick=function(){
      	 num--;
      	 if(num<0){
      	 	num=3;
      	 	oBanner_ul.style.left=-num*1100+'px';
      	 	num=2;
      	 	
      	 }
      	startMove(oBanner_ul,{left:-num*1100}); 
      	      	 
      }
      
       oBanner_right.onclick=function(){
      	 num++;
      	 if(num>3){
      	 	num=0;
      	 	oBanner_ul.style.left=-num*1100+'px';
      	 	num=1;
      	 	
      	 }
      	startMove(oBanner_ul,{left:-num*1100}); 
      	      	 
      }
       
//     最尾部点击事件代码
      var oFinallyText=document.getElementsByClassName('finally-footer-text2')[0];
      var oFinallyDisplay=document.getElementsByClassName('finally-dispaly')[0];
      var oSanjiaoXing=document.getElementsByClassName('finally-sanjiaoxing')[0];
      var oBottomDiv=document.getElementsByClassName('sellCar-finally-footer')[0];
     
      
      
//    窗口的滚动然后出现底部快的事件
      window.onscroll=function(){
//    	var e=event||e;
      	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
      	 if(scrollTop>=1000){
      	 	oBottomDiv.style.display='block';
      	 }else{
      	 	oBottomDiv.style.display='none';
      	 }
      }
      var oFinallyTextCount=0;
      oFinallyText.onclick=function(){
      	 oFinallyTextCount++;
      	 if(oFinallyTextCount%2!=0){
      	 	oFinallyDisplay.style.display='block';
      	 	oSanjiaoXing.classList.add('sanjiaoxing-special');
      	 }else{
      	 	oFinallyDisplay.style.display='none';
      	 	oSanjiaoXing.classList.remove('sanjiaoxing-special');
      	 }
      }
      
      
      //登录界面的代码:
var oLogon_x=document.getElementsByClassName('logon-x')[0];
var oLogonWindow=document.getElementsByClassName('logon')[0];
var oLogon=document.getElementsByClassName('logon-window')[0];
var oLogon_button=document.getElementsByClassName('header-top-information-login')[0];
var oLogon_logon=document.getElementsByClassName('logon-logon')[0];
var oYanZheng=document.getElementsByClassName('logon-input1')[0].getElementsByClassName('button1')[0];
var oError1=document.getElementsByClassName('logon-error1')[0];
var oError2=document.getElementsByClassName('logon-error2')[0];
var IphoneNum=document.getElementsByClassName('logon-input1')[0].getElementsByClassName('input1')[0];
oLogon_button.onclick=function(){
	oLogonWindow.style.display='block';
	oLogon.style.display='block';
}

oLogon_x.onclick=function(){
	oLogonWindow.style.display='none';
	oLogon.style.display='none';
}
oYanZheng.onclick=function(){
	oError1.style.display='none';
	oError2.style.display='none';
	if(IphoneNum.value!=''){
		oError2.style.display='block';
	}else{
		oError1.style.display='block';
		
	}
}
oLogon_logon.onmousedown=function(){
	this.classList.add('logon-logon1');
}
oLogon_logon.onmouseup=function(){
	this.classList.remove('logon-logon1');
}

      
      