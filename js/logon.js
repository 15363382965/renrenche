//登录界面的代码:
var oLogon_x = document.getElementsByClassName('logon-x')[0];
var oLogonWindow = document.getElementsByClassName('logon')[0];
var oLogon = document.getElementsByClassName('logon-window')[0];
var oLogon_button = document.getElementsByClassName('header-top-information-login')[0];
var oLogon_logon = document.getElementsByClassName('logon-logon')[0];
var oYanZheng = document.getElementsByClassName('logon-input1')[0].getElementsByClassName('button1')[0];
var oError1 = document.getElementsByClassName('logon-error1')[0];
var oError2 = document.getElementsByClassName('logon-error2')[0];
var IphoneNum = document.getElementsByClassName('logon-input1')[0].getElementsByClassName('input1')[0];
oLogon_button.onclick = function() {
	oLogonWindow.style.display = 'block';
	oLogon.style.display = 'block';
}

oLogon_x.onclick = function() {
	oLogonWindow.style.display = 'none';
	oLogon.style.display = 'none';
}
oYanZheng.onclick = function() {
	oError1.style.display = 'none';
	oError2.style.display = 'none';
	if(IphoneNum.value != '') {
		oError2.style.display = 'block';
	} else {
		oError1.style.display = 'block';

	}
}
oLogon_logon.onmousedown = function() {
	this.classList.add('logon-logon1');
}
oLogon_logon.onmouseup = function() {
	this.classList.remove('logon-logon1');
}