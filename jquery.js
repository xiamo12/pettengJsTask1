$(document).ready(function(){
	var int,arr;
	$(".begin").click(function(){
		clearInterval(int);
		int=setInterval(Change,1000);
		function Change(){
			function colorchange(){
				var colornum=['0','1','2','3','4','5','6'];
				var colorword=['a','b','c','d','e','f'];
				var color=colornum.concat(colorword);
				var getColor="#";
				for (var i = 0; i < 6; i++) {
					var getNum=Math.floor(Math.random()*13);//获取【0，12】随机数
					getColor += color[getNum];
				}
				return getColor;
			}
			console.log(colorchange());

			function getDiv(){
				arr = $('div').children('div');
				for (var i = 0; i < arr.length; i++) {
					arr[i].style.backgroundColor = '#ffa500';
				}
				var num1=parseInt(Math.floor(Math.random()*9));
				var num2=parseInt(Math.floor(Math.random()*9));
				var num3=parseInt(Math.floor(Math.random()*9));
				for (var i = 0; i < 3; i++) {
					var color1=colorchange();
					var color2=colorchange();
					var color3=colorchange();
					arr[num1].style.backgroundColor=color1;
					arr[num2].style.backgroundColor=color2;
					arr[num3].style.backgroundColor=color3;
				}
			}
			getDiv();
		}
	});
	$('.stop').click(function(){
		clearInterval(int);
		for (var i = 0; i < arr.length; i++) {
			arr[i].style.backgroundColor = '#ffa500';
		}
	});
});