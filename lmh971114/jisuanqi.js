function operate(){
	
//获取键盘输入的值
        var x = document.getElementById("name").value;
        var y = document.getElementById("name1").value;
        var z = document.getElementById("operate").value;

// 失去鼠标焦点的事件

   /* x.onblur = function(){
	console.log(x.value);
}
    y.onblur = function(){
	console.log(y.value);
}
    z.onblur = function(){
	console.log(z.value);
}*/

var string = x + z + y;
var result = eval(string);
document.getElementById("result").value=result;
}


