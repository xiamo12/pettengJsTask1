var begin=document.getElementById('btn1');
var stop=document.getElementById('btn2');
var int,div;
begin.onclick=function(){
	clearInterval(int);
	int=setInterval(colorChange,2000);
	function colorChange(){
		function getColor(){
			color="#";
			for (var i = 0; i < 6; i++) {
				var arr=['0','1','2','3','4','5','6','a','b','c','d','e','f'];
				var num=Math.floor(Math.random()*13);
				color += arr[num];
				}
			if (color != '#FFA500' && color != '#ffa500'){
				return color;
				}
		}
		function getDiv(){
			div=document.getElementsByTagName('div');
			for (var i = 0; i < div.length; i++) {
				div[i].style.backgroundColor='#FFA500';
			}
			var num1=Math.floor(Math.random()*9);
			var num2=Math.floor(Math.random()*9);
			var num3=Math.floor(Math.random()*9);
			for (var i = 0; i < 3; i++) {
				if (num1 != num2 && num2 != num3 && num1 !==num3) {
					div[num1].style.backgroundColor=getColor();
					div[num2].style.backgroundColor=getColor();
					div[num3].style.backgroundColor=getColor();
					}
				}
			}
			getDiv();
		}
	}
stop.onclick=function(){
	for (var i = 0; i < 9; i++) {
		div[i].style.backgroundColor="orange";
	}
		clearInterval(int);
}