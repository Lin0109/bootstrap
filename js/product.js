$(function(){
	//动态生成全部产品列表
	$.each((products), function(index,event) {
		var str01 = `<li>
						<div class="single-product">
							<div class="single-product-image">
								<figure><img src=${event.src} /></figure>
							</div>
							<div class="single-product-bottom-bar">
								<h5><a href="#">${event.title}</a></h5>
								<ul><li><p>${event.intro}</p></li></ul>
							</div>
						</div>
					</li>`;
		$('.product_list .chapList').append(str01);
	});
	
	$('#all').click(function(){
		$('.subcolumn_nav_met_ul li a').removeClass('active');
		$('#all').addClass('active');
		$('#bread').removeClass('notsub');
		$('#juice').removeClass('notsub');
		$('.product_list .chapList').empty();
		//动态生成全部产品列表
		$.each((products), function(index,event) {
			var str01 = `<li>
							<div class="single-product">
								<div class="single-product-image">
									<figure><img src=${event.src} /></figure>
								</div>
								<div class="single-product-bottom-bar">
									<h5><a href="#">${event.title}</a></h5>
									<ul><li><p>${event.intro}</p></li></ul>
								</div>
							</div>
						</li>`;
			$('.product_list .chapList').append(str01);
		});
	})
	
	$('#juice').click(function(){
		$('.subcolumn_nav_met_ul li a').removeClass('active');
		$('#juice').addClass('active');
		$('#bread').removeClass('notsub');
		$('#all').removeClass('notsub');
		$('.product_list .chapList').empty();
		//动态生成果汁产品列表
		$.each((productsJuice), function(index,event) {
			var str02 = `<li>
							<div class="single-product">
								<div class="single-product-image">
									<figure><img src=${event.src} /></figure>
								</div>
								<div class="single-product-bottom-bar">
									<h5><a href="#">${event.title}</a></h5>
									<ul><li><p>${event.intro}</p></li></ul>
								</div>
							</div>
						</li>`;
			$('.product_list .chapList').append(str02);
		});
	})
	$('#juice02').click(function(){
		idx = $(this).attr('id');//获取当前面板的idx
		console.log(idx);
		//将类为idx的超链接设为激活状态
		$('#'+idx).addClass('active01');
		//屏蔽idx不为当前值的激活状态
		$('.two-menu a ').not($('#'+idx)).removeClass('active01');
		$('.subcolumn_nav_met_ul li a').removeClass('active');
		$('#juice').addClass('active');
		$('#bread').removeClass('notsub');
		$('#all').removeClass('notsub');
		$('.product_list .chapList').empty();
		//动态生成果汁产品列表
		$.each((productsJuice), function(index,event) {
			var str02 = `<li>
							<div class="single-product">
								<div class="single-product-image">
									<figure><img src=${event.src} /></figure>
								</div>
								<div class="single-product-bottom-bar">
									<h5><a href="#">${event.title}</a></h5>
									<ul><li><p>${event.intro}</p></li></ul>
								</div>
							</div>
						</li>`;
			$('.product_list .chapList').append(str02);
		});
	})
	
	$('#bread').click(function(){
		$('.subcolumn_nav_met_ul li a').removeClass('active');
		$('#bread').addClass('active');
		$('#juice').removeClass('notsub');
		$('#all').removeClass('notsub');
		$('.product_list .chapList').empty();
		//动态生成面包产品列表
		$.each((productsBread), function(index,event) {
			var str03 = `<li>
							<div class="single-product">
								<div class="single-product-image">
									<figure><img src=${event.src} /></figure>
								</div>
								<div class="single-product-bottom-bar">
									<h5><a href="#">${event.title}</a></h5>
									<ul><li><p>${event.intro}</p></li></ul>
								</div>
							</div>
						</li>`;
			$('.product_list .chapList').append(str03);
		});
	})
	$('#bread03').click(function(){
		idx = $(this).attr('id');//获取当前面板的idx
		console.log(idx);
		//将类为idx的超链接设为激活状态
		$('#'+idx).addClass('active01');
		//屏蔽idx不为当前值的激活状态
		$('.two-menu a ').not($('#'+idx)).removeClass('active01');
		$('.subcolumn_nav_met_ul li a').removeClass('active');
		$('#bread').addClass('active');
		$('#juice').removeClass('notsub');
		$('#all').removeClass('notsub');
		$('.product_list .chapList').empty();
		//动态生成面包产品列表
		$.each((productsBread), function(index,event) {
			var str03 = `<li>
							<div class="single-product">
								<div class="single-product-image">
									<figure><img src=${event.src} /></figure>
								</div>
								<div class="single-product-bottom-bar">
									<h5><a href="#">${event.title}</a></h5>
									<ul><li><p>${event.intro}</p></li></ul>
								</div>
							</div>
						</li>`;
			$('.product_list .chapList').append(str03);
		});
	})
})