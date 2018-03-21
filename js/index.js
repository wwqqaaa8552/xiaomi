$(function(){
	// 购物车隐藏窗口
	slide($(".nav-div1"),$("#box"),200);

	// 搜索框获取焦点样式
	$(".header-input").focus(function(){
		$(this).css("border","1px #ff6700 solid");
		$(".header-btn").css({
			"border":"1px #ff6700 solid",
			"border-left":"none"
		});
		$(this).css("border-right","1px solid #ff6700");
	
		$(this).blur(function(){
			$(this).css("border-right","1px solid #e0e0e0");
			$(this).css("border","1px #e0e0e0 solid");
			$(".header-btn").css("border","1px #e0e0e0 solid");
		})
	})

	//头部商品列表
	$(".active").hover(function(){
		var heul = $("#header-text ul"); //二级菜单里面的ul
		$("#header-text").stop(true).slideDown(300);// 二级菜单
		var active = $(this).index(); // 拿到每个active的下标
		heul.eq(active).show().siblings().hide();
	},function(){
			$("#header-text").stop(true).slideUp(300);
			$("#header-text").hover(function(){
				$(this).stop(true).slideDown(300)
			},function(){
				$(this).stop(true).slideUp(300)
				}
			);
		}
	)

	//轮播图
	//(轮播的图片,轮播点,样式,左按钮,右按钮)
	ban("#top-ul>li",".top-btn1>li","tive","#prev","#next");

	//小米明星单品
	var btn1 = $("#top3-prev"); //左按钮
	var btn2 = $("#top3-next"); //右按钮
	var top3img = $(".top3-img"); //拿到ul
	var s = true; //全局监听
		// 左按钮		
	btn1.click(function(){
		if(s == false ){
			top3img.animate({
				marginLeft:"0",
			});
			s = true;
			$(this).css({
				"color":"#999"
			});
			btn2.css({"color":"red"})				
		}
	})
	// 右按钮
	btn2.click(function(){
		if(s == true){
			top3img.animate({
				marginLeft:"-1250px",
			});
			s = false;
			$(this).css({
				"color":"#999"
			});
			btn1.css({"color":"red"});
		}

	});
	//自动滑动	
	function top3(){
		time = setInterval(function(){
			if(s == true){
				top3img.animate({marginLeft:"-1250px"});
				btn1.css("color","red");
				btn2.css("color","#999");
				s = false;
			}else if(s == false){
				top3img.animate({marginLeft:"0px"});
				btn1.css("color","#999");
				btn2.css("color","red");
				s = true;
			}
		},4000)
	}
	top3();
	
	//产品展示区阴影动画和隐藏评论
	//sha(对象，对象的子元素,类名,移入距离1,移出距离2)
	sha(".cen-ul li","div","aima","-80px","0px")

	//左侧纯阴影动画 
	box(".cen-img a","aima");
	box(".cen1-img img","aima2");

	box("#bottom1-ul li","aima2");
	box("#bottom2 li","aima2");


	// 选项卡
	//tab(按钮父元素，按钮，内容父元素，内容)
	tab("#center1-ul",'li',"#center1-text",'ul')
	tab("#center2-ul",'li',"#center2-text",'ul')
	tab("#center3-ul",'li',"#center3-text",'ul')
	tab("#center4-ul",'li',"#center4-text",'ul')
	tab("#center5-ul",'li',"#center5-text",'ul')
	

	// 两种方法
	//为你推荐左右移动
	// function kkstr(){
	// 	var s = 0; //页数
	// 	var a = null; // 接收
	// 	$("#bottom1-next").click(function(){
	// 		if( s < 3){  // 当页数小于3的时候才可以被点击
	// 			s++;
	// 			 a += -1285*s;  // 每点击一次 就移动一页  一页是-1285
	// 			$("#bottom1-ul").stop(true).animate({
	// 		 		marginLeft: a+"px",
	// 		 	});	
	// 		 	console.log(a)
	// 		 	a = null; 	// 点击完后要情况a  否则会叠加
	// 		}else{
	// 			return false;
	// 		}
	// 		ken()
	// 	})
	// 	$("#bottom1-prev").click(function(){
	// 		if(s > 0){ // 当翻页的时候 才能被点击 在第0页就不能被点击
	// 			s--;
	// 			a += -1285*s;
	// 			$("#bottom1-ul").stop(true).animate({
	// 		 		marginLeft:a+"px"
	// 		 	})
	// 		 	console.log(a)
	// 		 	a = null; // 点击完后要情况a  否则会叠加
	// 		}else{
	// 			return false;
	// 		}
	// 		ken()
	// 	})
	// 	function ken(){
	// 		if(s == 0){
	// 			$("#bottom1-next").css("background","#ff6700");
	// 			$("#bottom1-prev").css("background","#fff");
	// 		}else if(s > 0 && s < 3){
	// 			$("#bottom1-next").css("background","#ff6700");
	// 			$("#bottom1-prev").css("background","#ff6700");
	// 		}else if(s == 3){
	// 			$("#bottom1-next").css("background","#fff");
	// 			$("#bottom1-prev").css("background","#ff6700");
	// 		}
	// 	}
	// 	ken()
	// }	
	// kkstr();

	

	// 第二种
	// parseInt() 函数可解析一个字符串，并返回一个整数。
	// indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
	// substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符。
	$("#bottom1-next").click(function(){
		var position = $("#bottom1-ul").css("margin-left");
		console.log(position);
		position = position.substr(0,position.indexOf("px"));
		console.log(position);
		position = parseInt(position);
		console.log(position);
		if(position >= -2570){
			position = position - 1285;
			$("#bottom1-ul").animate({marginLeft:position+"px"});
		}
	})
	$("#bottom1-prev").click(function(){
		var position = $("#bottom1-ul").css("margin-left");
		position = position.substr(0,position.indexOf("px")	);
		position = parseInt(position);
		console.log(position);
		if(position <= -1){
			position = position + 1285;
			$("#bottom1-ul").animate({marginLeft:position+"px"});
		}
	})

		
	




	// 内容区块轮播
	//(轮播的图片,轮播点,样式,左按钮,右按钮)
	ban("#bot1 li","#bot1-li li","tive2","#botprev1","#botnext1");
	ban("#bot2 li","#bot2-li li","tive2","#botprev2","#botnext2");
	ban("#bot3 li","#bot3-li li","tive2","#botprev3","#botnext3");
	ban("#bot4 li","#bot4-li li","tive2","#botprev4","#botnext4");

	box("#bottom3>div","aima2");

	box(".bottom4-ul li","aima2");



})