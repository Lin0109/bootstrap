$(function(){	
	//首页轮播
	$('.banner-item').width($(document).width());
	var count = 0;
	var timer;
	function inter(){
		timer = setInterval(function(){
			$('.banner-item').width($(document).width());
			count++;
			if(count>2){
				count=0;
//				changePic(count);
				$('.banner-warpper').css("transform","translate3d("+-count*$(document).width()+"px,0px,0px)");
				$('.banner-warpper').css("transition-duration","0ms");
			}
			else{
				$('.banner-warpper').css("transform","translate3d("+-count*$(document).width()+"px,0px,0px)");
				$('.banner-warpper').css("transition-duration","2000ms");
			}
//			console.log('count02 : '+count);
		},3000)
	}
	inter();
	$('.banner-ctr1 .left').click(function(){
		clearInterval(timer);
		count--;
		if(count<0){
			count=2;
			$('.banner-warpper').css("transform","translate3d("+-count*$(document).width()+"px,0px,0px)");
			$('.banner-warpper').css("transition-duration","0ms");
		}
		else{
			$('.banner-warpper').css("transform","translate3d("+-count*$(document).width()+"px,0px,0px)");
			$('.banner-warpper').css("transition-duration","2000ms");
		}
//		console.log(count);
	})	
	$('.banner-ctr1 .right').click(function(){
		clearInterval(timer);
		count++;
		if(count>2){
			count=1;
		}
	})
	
	//吸顶效果,盒子动画出现效果
	var pro = $('.product-list').offset().top-500;
	var about = $('.about_text').offset().top-500;
//	console.log(about);
	var abountNum = $('.about_num').offset().top-500;
//	console.log(abountNum);
	var serviceH2 = $('.service_list h2').offset().top-500;
	var serviceP = $('.service_list p').offset().top-500;
	var serviceBu = $('.service_list .button').offset().top-500;
//	console.log(service);
	var serviceControl = $('.service_list .control').offset().top-500;
	var newsTop = $('.news_list .items').offset().top-500;
	$(document).scroll(function(){
		if($(document).scrollTop()>pro){
//			console.log($(document).scrollTop());
//			console.log(pro);
			$('.picture-list').removeClass('invisible');
			$('.picture-list').addClass('visible');
			$('.picture-list').addClass('animation-top-center');
		}
		//关于我们的动画效果
		if($(document).scrollTop()>about){
			console.log($(document).scrollTop());
			console.log(about);
			$('.about-t').removeClass('invisible');
			$('.about-img').removeClass('invisible');
			$('.about-t').addClass('animation-slide-left');
			$('.about-img').addClass('animation-slide-right');
		}
		if($(document).scrollTop()>abountNum){
			$('.about_num').removeClass('invisible');
			$('.about_num').addClass('animation-slide-bottom');
			$('.tt').css('transition','all 2s ease-in-out 0s');
			$('.about_num_box:first-child .dataOne:first-child .tt').css('top','-440px');
			$('.about_num_box:first-child .dataOne:last-child .tt').css('top','-480px');
			$('.about_num_box:nth-child(2) .dataOne:first-child .tt').css('top','-520px');
			$('.about_num_box:nth-child(2) .dataOne:last-child .tt').css('top','-720px');
			$('.about_num_box:nth-child(3) .dataOne:first-child .tt').css('top','-520px');
			$('.about_num_box:nth-child(3) .dataOne:nth-child(2) .tt').css('top','-720px');
			$('.about_num_box:nth-child(3) .dataOne:last-child .tt').css('top','-720px');
			$('.about_num_box:last-child .dataOne:first-child .tt').css('top','-480px');
			$('.about_num_box:last-child .dataOne:nth-child(2) .tt').css('top','-400px');
			$('.about_num_box:last-child .dataOne:nth-child(3) .tt').css('top','-440px');
			$('.about_num_box:last-child .dataOne:last-child .tt').css('top','-680px');
		}
		//首页服务
		if($(document).scrollTop()>serviceH2){
//			console.log('serviceh2'+serviceh2);
			$('.Lslide-content h2').removeClass('invisible');
			$('.Lslide-content h2').addClass('animation-slide-top');
		}
		if($(document).scrollTop()>serviceP){
			$('.Lslide-content p').removeClass('invisible');
			$('.Lslide-content p').addClass('animation-slide-top');
		}
		if($(document).scrollTop()>serviceBu){
			$('.Lslide-content .button').removeClass('invisible');
			$('.Lslide-content .button').addClass('animation-slide-bottom');
		}
		if($(document).scrollTop()>serviceControl){
			$('.service_list .control .oncontrol').removeClass('invisible');
			$('.service_list .control .control-top').addClass('animation-slide-left');
			$('.service_list .control .control-bottom').addClass('animation-slide-right');
		}
		//新闻
		if($(document).scrollTop()>newsTop){
			$('.news_list .item').removeClass('invisible');
			$('.news_list .item').addClass('animation-slide-bottom50');
		}
	})

	
	//首页服务点击变化
	$('.control-bottom').click(function(){
		$('.service_list .control-top i').removeClass('fa-circle-o');
		$('.service_list .control-top i').addClass('fa-arrow-up');
		$('.service_list .control-bottom i').removeClass('fa-arrow-down');
		$('.service_list .control-bottom i').addClass('fa-circle-o');
		$('.service_list .Rslide:first-child').css('top','-600px');
		$('.service_list .Rslide:last-child').css('top','0px');
		$('.service_list .Lslide:first-child').css('top','600px');
		$('.service_list .Lslide:last-child').css('top','0px');
	})
	$('.control-top').click(function(){
		$('.service_list .control-top i').removeClass('fa-arrow-up');
		$('.service_list .control-top i').addClass('fa-circle-o');
		$('.service_list .control-bottom i').removeClass('fa-circle-o');
		$('.service_list .control-bottom i').addClass('fa-arrow-down');
		$('.service_list .Rslide:first-child').css('top','0px');
		$('.service_list .Rslide:last-child').css('top','600px');
		$('.service_list .Lslide:first-child').css('top','0px');
		$('.service_list .Lslide:last-child').css('top','-600px');
	})
	
	//动态生成新闻内容
	$.each((news), function(index,event) {
		var str02 = `<li class="item invisible">
						<a href="#" title="${event.title}">
							<div class="imgDiv">
								<img src=${event.src} alt="${event.title}" />
							</div>
							<div class="item_stro Pleft">
								<span class="time">${event.time}</span>
								<h5 class="item_title">
									<span>${event.title}</span>
								</h5>
								<p class="item_desc">
									${event.intro}	
								</p>
							</div>
						</a>
					</li>`;
		$('.news_list .items').append(str02);
	})

//	//footer动态生成
//	$.each((products), function(index,event) {
//		var str03 = `<li>
//						<div class="imgbox">
//							<a href="#" title=${event.title}>
//								<img src=${event.src} />
//							</a>
//						</div>
//					</li>`;
//		$('.div3 ul').append(str03);
//	});
})