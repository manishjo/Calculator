function showResult(val){
	document.getElementById('disp').value = val;
}

function screen(val){
	document.getElementById('disp').value+=val;
}

function calculate(){
	showResult(eval(document.getElementById('disp').value));
}
