var headerTop=document.getElementsByClassName('header1')[0];
var headerNav=document.getElementsByClassName('header2')[0];
var oAsideThree=document.getElementsByClassName('tri-aside-ulLi3')[0];
var timer1=null;
 var speed=2;
 
window.onload=function(){
	var toRun=0;
	clearInterval(timer1);
     headerTop.style.top=-30+'px';
     timer1=setInterval(function(){
     	var hTop=headerTop.offsetTop;
     	if(hTop!=0){
     		headerTop.style.top=(hTop+speed)+'px';	
     	}else{
     		toRun++;
     		if(toRun==1){
     			headerTop.style.top=-8+'px';
     		}
     	}
     },80)

}

document.onscroll=function(){
	if(window.pageYOffset>0){
		headerTop.style.display='none';
		headerNav.classList.add('activeHeaderNav');
		oAsideThree.style.display='block';
	}else{
		headerTop.style.display='block';
		headerNav.classList.remove('activeHeaderNav');
		oAsideThree.style.display='none';
	}
}

//帖子代码
	var oTieZi=document.getElementsByClassName('header3-inputRight')[0];
			var oTieZiBlock=document.getElementsByClassName('header3-Hidden')[0];
			var isHidden=true;
			 var isHidden1=false;
			oTieZi.onclick=function(){
				oTieZiBlock.style.display='block';	 
			}

			oTieZiBlock.onmouseleave=function(){
				  
				 this.style.display='none';
			
			}
			
//轮播图代码	

     
      var aTribanLi=document.getElementsByClassName('tri-banner-ul1LI');
      var aTribanNum=document.getElementsByClassName('tri-banner-ul2LI');
      var oTriBanner=document.getElementsByClassName('tri-banner')[0];
      var num=0;
      var timer;
      function bannerFn(){
      	for(var i=0;i<aTribanNum.length;i++){
      			aTribanNum[i].classList.remove('activeBannerLi2');
      			aTribanLi[i].classList.remove('activeBannerLi1');
      		}
      		
      		aTribanNum[num].classList.add('activeBannerLi2');
      		aTribanLi[num].classList.add('activeBannerLi1');
	
      }
      for(var i=0;i<aTribanNum.length;i++){
      	 aTribanNum[i].index=i;
      	 aTribanNum[i].onmouseenter=function(){
      		num=this.index;
      		bannerFn();
      	 }
      }
      
      function timerFn(){
      	num++;
      	  if(num==4){
      	  	num=0;
      	  }
      	  bannerFn();
      	  
      }
      
      timer=setInterval(timerFn,2000);
      
      oTriBanner.onmouseenter=function(){
      	clearInterval(timer);
      }
      oTriBanner.onmouseleave=function(){
      	timer=setInterval(timerFn,2000);
      }
      
      
      
  var oNinCheng=document.getElementsByClassName('ninCheng')[0];
			var oNinChengTop=document.getElementsByClassName('ninCheng-top')[0];
			var oNinChengBottom=document.getElementsByClassName('ninCheng-bottom')[0];
			var oTriLogoBig=document.getElementsByClassName('tri-logoBig')[0];
			var oTriLogo=document.getElementsByClassName('tri-logo')[0];
			var oTriLogoReturn=document.getElementsByClassName('tri-logo-top')[0].getElementsByClassName('span2')[0];
			var oTriLogoIndex=document.getElementsByClassName('header2-nav-ul1Li1')[0];
			var aNinChengBottom=document.getElementsByClassName('ninCheng-bottom')[0].getElementsByTagName('span');
			var ninChengNUm=0;
			oNinCheng.onclick=function(){
				ninChengNUm++;
				if(ninChengNUm%2!=0){
					oNinChengBottom.style.display='block';
					this.classList.add('ninchengActive');
					for(var i=0;i<aNinChengBottom.length;i++){
				aNinChengBottom[i].classList.remove('nincheng-bottomActive');
				if(aNinChengBottom[i].innerHTML==oNinChengTop.innerHTML){
					aNinChengBottom[i].classList.add('nincheng-bottomActive');
				}
			}
					
				}else{
					oNinChengBottom.style.display='none';
				}
				
			}
			
			oNinChengBottom.onclick=function(){
				oNinCheng.classList.remove('ninchengActive');
			}
			
			
			for(var i=0;i<aNinChengBottom.length;i++){
				aNinChengBottom[i].onclick=function(){
					oNinChengTop.innerHTML=this.innerHTML;
				}
			}
      
       oTriLogoIndex.onclick=function(){
       	 oTriLogoBig.style.display='block';
       	 oTriLogo.style.display='block';
       }
      
      
      oTriLogoReturn.onclick=function(){
      	 oTriLogoBig.style.display='none';
       	 oTriLogo.style.display='none';
      }
      
      
      

