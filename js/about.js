$(function(){
	$(window).scroll(function(){
		//循环获取每个面板的滚动
		$('.show_content').each(function(){
			st = $(window).scrollTop();//屏幕已经滚动的高
			pt = $(this).offset().top;//获取第一个panel滚动的高
			
			if(st+300>=pt){
			idx = $(this).attr('id');//获取当前面板的idx
//			console.log($(this));
			$('#'+idx+'01').addClass('active');//设置当前面板为active激活状态
			$('.list-group-item').not($('#'+idx+'01')).removeClass('active');//屏蔽其他面板的去除激活状态
				
			//将类为idx的超链接设为激活状态
			$('#'+idx+'02').addClass('active01');
			//屏蔽idx不为当前值的激活状态
			$('.two-menu a ').not($('#'+idx+'02')).removeClass('active01');
			}
			
		});
	});
	
	$('#about01').click(function(){
		$('html,body').animate({scrollTop:$('#about').offset().top},{queue:false,duration:500});
		$('#about01').addClass('active');
		$('.list-group-item').not($('#about01')).removeClass('active');
	})
		
	$('#bread01').click(function(){
		$('html,body').animate({scrollTop:$('#bread').offset().top},{queue:false,duration:500});
		$('#bread01').addClass('active');
		$('.list-group-item').not($('#bread01')).removeClass('active');
	})
			
	$('#term01').click(function(){
		$('html,body').animate({scrollTop:$('#term').offset().top},{queue:false,duration:500});
		$('#term01').addClass('active');
		$('.list-group-item').not($('#term01')).removeClass('active');
	})
			
	$('#bread02').click(function(){
		$('html,body').animate({scrollTop:$('#bread').offset().top},{queue:false,duration:500});
	})
			
	$('#term02').click(function(){
		$('html,body').animate({scrollTop:$('#term').offset().top},{queue:false,duration:500});
	})
})
