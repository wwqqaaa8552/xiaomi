// 封装函数库



// slide(id1,id2,时间)  购物车隐藏窗口
function slide(id1,id2,data){
		$(id1).hover(function(){
			$(id2).stop(true).slideDown(data);
		},
			function(){
				$(id2).stop(true).slideUp(data);
			}
		)
	}
// 头部轮播图 
function ban(a,b,c,d,e){
	var index = 0;
	var len = $(a).length-1;

	function tab(index){
		$(b).eq(index).addClass(c).siblings().removeClass(c);
		$(a).eq(index).fadeIn().siblings().fadeOut();

	}
	$(b).click(function(){
		index = $(this).index();
		tab(index);
	})

	$(d).click(function(){
		index--;
		if(index < 0){
			index = len;
		}
		tab(index);
	})

	$(e).click(function(){
		index++;
		if(index > len){
			index = 0;
		}
		tab(index)
	})

}


// 阴影动画和评论滑动(产品展示区使用)类名是CSS3动画类名
// sha(对象,对象的子元素,类名,移入距离1,移出距离2)
function sha(id1,child,Class,Top1,Top2){
	$(id1).hover(function(){
		$(this).addClass(Class);
		$(this).find(child).stop(true).animate({
			marginTop:Top1
		},300)
	},function(){
		$(this).removeClass(Class);
		$(this).find(child).stop(true).animate({
			marginTop:Top2
		},300)	
	})
}

// 纯阴影动画
function box(id1,Class){
	$(id1).hover(function(){
		$(this).addClass(Class);
	},	function(){
			$(this).removeClass(Class);
		}
	)
}







//选项卡
//tab(按钮父元素，按钮，内容父元素，内容)
function tab(id1,child1,id2,child2){
	$(id1).find(child1).mouseover(function(){
		var index = $(this).index();
		$(this).css("color","#ff6700").siblings().css("color","#000")
		$(id2).find(child2).eq(index).show().siblings().hide();
	})
}