function showResult(val){
	document.getElementById('disp').value = val;
}

function screen(val){
	document.getElementById('disp').value+=val;
}

function del_left(){
	var val = document.getElementById('disp').value;
	if(val.length==1)
		showResult("");
	else
		document.getElementById('disp').value = val.slice(0,val.length-1);
}

function calculate(){
	showResult(eval(document.getElementById('disp').value));
}
