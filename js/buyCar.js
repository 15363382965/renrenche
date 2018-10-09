	
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
             	
//点击登录或者发送验证码的代码
  
	        var bCarYanZ=document.getElementsByClassName('bCarYanZM')[0];
            var bCarSubmit=document.getElementsByClassName('form-text5')[0];
            var bCarError=document.getElementsByClassName('form-textHidden')[0];
            var bCarPhoneNum=document.getElementsByClassName('phoneNum')[0];

               bCarYanZ.onclick=function(){
	              bCarError.style.display='block';
                }
               bCarSubmit.onclick=function(){
               	 bCarError.style.display='block';
               }

   
   
