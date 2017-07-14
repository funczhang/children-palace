;
(function() {
	var Tips = {
		//重复维护
		CFWH: '确定很抱歉，该学生信息已被另一个用户维护，不可重复维护。',
		//提醒代缴费订单
		DJF: '您有待缴费的订单！',
		//数据不符合
		SJBFH: '很抱歉，该学生的目前就读年级和学籍数据不符合，请确认后重新选择！',
		//名额已满
		MEYM: '很抱歉，该班级目前报名名额已满!',
		//重复报名
		CFBM: '很抱歉，该学生已经报过该班级，不可重复再报名！',
		//年级不符
		NJBF: '很抱歉，该学生目前就读年级不符合该班级的年级要求，您可以选择其他班级报名!'
	};
	var eventHandler = {
		dataSave: function() {
			mui.alert(Tips.CFWH, '提示信息', function() {
				console.log("click confirm");
			});
		},
		dataSave2: function() {
			mui.alert(Tips.DJF, '提示信息', function() {
				console.log("click confirm");
			});
		},
		dataSave3: function() {
			mui.alert(Tips.SJBFH, '提示信息', function() {
				console.log("click confirm");
			});
		},
		showController: function() {
			var more = $('.more-info');
			var self = $(this);
			if(more.hasClass('hide')) {
				more.removeClass('hide');
				self.text('点击收起');
			} else {
				more.addClass('hide');
				self.text('点击展示更多');
			}
		},
		remove(){
			debugger
		}
	};
	var addEvent = function() {
		$(document)
			.on('click', '.btn-save', eventHandler.dataSave)
			.on('click', '.btn-show', eventHandler.showController)
	};
	// mui.init({
	//     pullRefresh: {
	//         container: 'body', //待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
	//         up: {
	//             height: 50, //可选.默认50.触发上拉加载拖动距离
	//             auto: true, //可选,默认false.自动上拉加载一次
	//             contentrefresh: "正在加载...", //可选，正在加载状态时，上拉加载控件上显示的标题内容
	//             contentnomore: '没有更多数据了', //可选，请求完毕若没有更多数据时显示的提醒内容；
	//             callback: pullfresh //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
	//         }
	//     }
	// });

	function pullfresh() {
		setTimeout(function() {}, 3000);
		//业务逻辑代码，比如通过ajax从服务器获取新数据；
		//注意：
		//1、加载完新数据后，必须执行如下代码，true表示没有更多数据了：
		//2、若为ajax请求，则需将如下代码放置在处理完ajax响应数据之后
		this.endPullupToRefresh(true | false);
	}
	addEvent();
	new Swiper('.swiper-container', {
		autoplay: 2500, //可选选项，自动滑动
		loop: true,
		//		// 如果需要分页器
		pagination: '.swiper-pagination',
		autoplayDisableOnInteraction: true,
	});
}());