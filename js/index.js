     //  鼠标滑动头部两个快显示
    var headerSpecialLi=document.getElementsByClassName('header-top-text-nav-special');
               var specialLi=false
               document.onscroll=function(){
               	  specialLi=true;
               	 for(var i=0;i<headerSpecialLi.length;i++){
               	     headerSpecialLi[i].style.background='red';
                 }
               } 
               
              
               	 for(var i=0;i<headerSpecialLi.length;i++){
               	    	headerSpecialLi[i].onmouseenter=function(){
               	    		if(specialLi){
               	    			  this.style.color='black';
               	    		}
               	       }
                  }
               

               
               

               //             轮播图滑动代码效果
          
             var banner=document.getElementsByClassName('header-banner-picture')[0];
             var bannerCircle=document.getElementsByClassName('header-banner-circle')[0].getElementsByTagName('li');
             var bannerImg=document.getElementsByClassName('header-banner-picture')[0].getElementsByTagName('li');
             
             
             
             var collect=document.getElementsByClassName('collect')[0];
             var addressGz=document.getElementsByClassName('header')[0].getElementsByClassName('header-top')[0].getElementsByClassName('header-top-address')[0];
             var cityBlock=document.getElementsByClassName('header-hover')[0];
             var car=document.getElementsByClassName('car')[0];
             var toTop=document.getElementsByClassName('to-top')[0];
             var rightNavOnclick=document.getElementsByClassName('right-nav-onclick');
             var rightNavOnclickBlock=document.getElementsByClassName('right-nav-onclick-block');
            
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
             
             
             function move(){
             	for(var i=0;i<bannerCircle.length;i++){
              			bannerCircle[i].className='';
              	}
              		bannerCircle[now].className='bgBecomeRed';
              		startMove(banner,{left:-1157*now});
             }
             
           
              
              var timer=null;
              function timerFunction(){
              	  now++;
              	  if(now==bannerCircle.length){
              	  	now=0;
              	  }
              	  move();
              }
             timer=setInterval(timerFunction,5000);
             
              banner.onmouseenter=function(){
              	clearInterval(timer);
              }
              
                var now=0;
              for(var i=0;i<bannerCircle.length;i++){
              	bannerCircle[i].index=i;
              	bannerCircle[i].onmouseenter=function(){
              		now=this.index;
              		move();
               	 }
              }
              banner.onmouseleave=function(){
              	timer=setInterval(timerFunction,5000);
              	collect.style.display='none';
              }
              banner.onmousemove=function(){
              	collect.style.display='block';
              }
              
              
             addressGz.onclick=function(){
         	  cityBlock.style.display='none';
             }

//            右边浮动条动画
            
             var countApp=0;var countNum=0; var countQuestion=0;var countNow=0;
             for(var i=0;i<rightNavOnclick.length;i++){
             	rightNavOnclick[i].index=i;
             	
             	rightNavOnclick[i].onclick=function(){
             		
             		for(var j=0;j<rightNavOnclickBlock.length;j++){
             			rightNavOnclickBlock[j].style.display='none';	
             		}
             		countNow=this.index;

             		if(countNow==0){
             			++countApp;
             			if(countApp%2==1){
             				rightNavOnclickBlock[0].style.display='block';
             			}else{
             				rightNavOnclickBlock[0].style.display='none';
             			}
             		}else if(countNow==1 ){
             			++countNum;
             			if(countNum%2==1){
             				console.log(111);
             				
             				rightNavOnclickBlock[1].style.display='block';
             				
             			}else{
             				rightNavOnclickBlock[1].style.display='none';
             			}
             		}else{
             			++countQuestion;
             			if(countQuestion%2==1){
             				rightNavOnclickBlock[2].style.display='block';
             			}else{
             				rightNavOnclickBlock[2].style.display='none';
             			}
             		}
             		
             	}
             }
             

// 打钩的代码
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
				
//				中间文本的(大图片的隐藏显与显示)
      var aContentDeg=document.getElementsByClassName('content-nav-topDeg');
      var aContentTopli=document.getElementsByClassName('content-nav-topUl-li');
      var aContentTopBlock=document.getElementsByClassName('content-nav-topInner');
      
      for(var i=0;i<aContentTopli.length;i++){             
      	aContentTopli[i].index=i;
      	aContentTopli[i].onmouseover=function(){                   
      		for(var i=0;i<aContentTopBlock.length;i++){
      		   aContentTopBlock[i].classList.remove('activeUl');
      		   aContentTopli[i].classList.remove('activeLi');
      		   aContentDeg[i].classList.remove('activeDeg');
      		}
      		aContentTopBlock[this.index].classList.add('activeUl');
      		aContentDeg[this.index].classList.add('activeDeg');
      		this.classList.add('activeLi');
      	}
      }
     
       


//新闻轮播图的代码
var aContent_nav_circle=document.getElementsByClassName('content-new-navCircle');
				var aContent_nav=document.getElementsByClassName('content-new-nav')[0];
				var oContent_ul=document.getElementsByClassName('content-new-nav-ul')[0];
				var oContent_nav_Left=document.getElementsByClassName('content-new-topRight1')[0];
				var oContent_nav_Right=document.getElementsByClassName('content-new-topRight3')[0];
				
				var oContent_nav_count=0;
				for(var i=0;i<aContent_nav_circle.length;i++){
                    aContent_nav_circle[i].setAttribute('index',i);
					aContent_nav_circle[i].onclick=function(){
					oContent_nav_count=this.getAttribute('index');
					 content_nav_circle();	
					}
				}
				
				function content_nav_circle(){
					  for(var i=0;i<aContent_nav_circle.length;i++){
                        aContent_nav_circle[i].classList.remove('content-new-navCircleOnclick');
						} 
						aContent_nav_circle[oContent_nav_count].classList.add('content-new-navCircleOnclick');
						startMove(oContent_ul,{left:-745*oContent_nav_count});
				}
				var timer1=null;
				function content_nav_timer(){
					oContent_nav_count--;
					if(oContent_nav_count==-1){
						oContent_nav_count=2;
					}
					content_nav_circle();
				}
			   timer1=setInterval(content_nav_timer,4000);
				
				oContent_nav_Left.onclick=function(){
					oContent_nav_count++;
					if(oContent_nav_count==aContent_nav_circle.length){
						oContent_nav_count=0;
					}
					content_nav_circle();
				}
				
				oContent_nav_Right.onclick=function(){
					oContent_nav_count--;
					if(oContent_nav_count==-1){
						oContent_nav_count=2;
					}
					content_nav_circle();
				}
				aContent_nav.onmouseenter=function(){
					clearInterval(timer1);
				}
				
				aContent_nav.onmouseleave=function(){
					clearInterval(timer1);
					timer1=setInterval(content_nav_timer,4000);
				}
				
				
				
//				买卖下标的动画效果
     var buyAndSell=document.getElementsByClassName('header-content-compass')[0];
     var buyAndSellLeft=document.getElementsByClassName('header-content-left')[0];
     var buyAndSellRight=document.getElementsByClassName('header-content-right')[0];
      buyAndSellLeft.onmouseenter=function(){
      	buyAndSell.style.left=48+'px';
      }
      
      buyAndSellRight.onmouseenter=function(){
      	buyAndSell.style.left=790+'px';
      }
//************************************************
