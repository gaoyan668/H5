/*
 * 全站公共脚本,基于jquery-1.9.1脚本库
*/
$(function(){
		var page = 1;
		//初始加载分屏动画
		mySwiper = $("#mySwiper").swiper({
			mode:"vertical",
			loop: false,
			noSwiping:true,
			noSwipingNext:true,
			noSwipingPrev:true,
		    onSlideChangeEnd : function(){
		    	if ( page != mySwiper.activeIndex )
		    	{
    				$(".up").hide();
			    	page = mySwiper.activeIndex;
		    		if ( page == 1 )
		    		{
			    		remove();
		    		}
					var slide = $("#mySwiper .swiper-wrapper>.swiper-slide").eq(mySwiper.activeIndex);
			    	switch ( mySwiper.activeIndex )
			    	{
			    		case 0:
    						$(".up").show();
			    			break;
			    		case 1:
    						$(".up").show();
			    			break;
			    		case 2:
						    $('#bo').show();
			    			break;
			    		case 4:
    						$(".up").show();
			    			animate4(slide);
			    			break;
			    		case 5:
    						$(".up").show();
			    			break;
			    		case 6:
			    			break;
					}
		    	}
		    }
		})
	    //设置html
			var html = new Array();
			for (i=0;i<$("#mySwiper>.swiper-wrapper>.swiper-slide").length;i++)
			{
				html[i] = $("#mySwiper>.swiper-wrapper>.swiper-slide").eq(i).html();
			}
		//移除动画后的效果
			function remove()
			{
				$("#mySwiper>.swiper-wrapper>.swiper-slide:eq("+mySwiper.previousIndex+")").html(html[mySwiper.previousIndex]);
			}
	
	//音乐
		$(".music").on("tap",function(){
			if ( $(this).hasClass("play") )
			{
				$(this).removeClass("play");
				$("#music>span").addClass("zshow").html("关闭");
				setTimeout(function(){$("#music>span").removeClass("zshow")},1000);
				document.getElementById("mp3").pause();
			}
			else
			{
				$(this).addClass("play");
				$("#music>span").addClass("zshow").html("开启");
				setTimeout(function(){$("#music>span").removeClass("zshow")},1000);
				document.getElementById("mp3").play();
			}
		})
		function playmusic()
		{
			$(".music").addClass("play");
			document.getElementById("mp3").play();
		}
		$(document).on("tap",".go-form",function(){
			$("#mySwiper").transition({opacity:0,scale:5},800);
			$(".form").css({"visibility":"visible",opacity:0,scale:5}).transition({scale:1,opacity:1},800);	
		})
	
		$(document).one("touchstart","body",function(){
			playmusic();
		})
		
		function isIos()  
		{  
           var userAgentInfo = navigator.userAgent;  
           var Agents = new Array("iPhone","iPad");  
           var flag = false;  
           for (var v = 0; v < Agents.length; v++) {  
               if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = true; break; }  
           }  
           return flag;  
		}
		var fixedBug = isIos();
		window.onload = function()
		{
			if(fixedBug==true){
				$("#music").one("click",function(){
					playmusic();
				})
				$("#music").click();
			}
			else
			{
    			playmusic();
			}
    		$(".up").show();
		}
})