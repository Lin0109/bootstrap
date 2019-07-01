$(function(){
	//导航栏
	$('.navlist .dropdown').hover(function(){
		$(this).addClass('open')
	},function(){
		$(this).removeClass('open')
	});
	
	//导航栏变化，回到顶部出现
	$(document).scroll(function(){
		if($(document).scrollTop()>60){
//			$('.navbar-fixed-top').css('position','fixed');
			$('.navbar').css('background','rgb(106, 204, 181)');
			$('.navbar').addClass('navbar-shadow');
			$('.navbar-default .navbar-toggle').css('border-color','rgb(106, 204, 181)');
		}else{
			$('.navbar').css('background','rgba(106, 204, 181, 0.7)');
			$('.navbar').removeClass('navbar-shadow');
			$('.navbar-default .navbar-toggle').css('border-color','#96dbcb');
		}
		if($(document).scrollTop()>450){
			$('.back_top').css('display','block');
			$('.back_top').addClass('animation-slide-bottom');
		}else{
			$('.back_top').css('display','none');
			$('.back_top').removeClass('animation-slide-bottom');
		}
	})	
	
	//回到顶部
	$('.back_top').click(function(){
		$('html,body').animate({scrollTop:'0px'},500)
//		$(document).scrollTop(0);
	})
	
	//footer动态生成
	$.each((products), function(index,event) {
		var str03 = `<li>
						<div class="imgbox">
							<a href="#" title=${event.title}>
								<img src=${event.src} />
							</a>
						</div>
					</li>`;
		$('.div3 ul').append(str03);
	});
})