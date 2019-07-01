$(function(){
	$(window).scroll(function(){
		//循环获取每个面板的滚动
		$('.show_content').each(function(){
			st = $(window).scrollTop();//屏幕已经滚动的高
			pt = $(this).offset().top;//获取第一个panel滚动的高
			if(st+100>=pt){
			console.log(pt);
			idx = $(this).attr('id');//获取当前面板的idx
				
			console.log(idx);
			//将类为idx的超链接设为激活状态
			$('#'+idx+'01').addClass('active01');
			//屏蔽idx不为当前值的激活状态
			$('.two-menu a ').not($('#'+idx+'01')).removeClass('active01');
			}
			
		});
	});
	
	
			$('#bread01').click(function(){
				$('html,body').animate({scrollTop:$('#brand').offset().top},{queue:false,duration:500});
			})
			
			$('#store01').click(function(){
				$('html,body').animate({scrollTop:$('#store').offset().top},{queue:false,duration:500});
			})
})