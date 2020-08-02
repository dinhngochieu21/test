document.getElementById("email").focus();
document.getElementById("email").onkeyup = function(e){
    DoKeyup(e,"pwd");
}

function DoKeyup(e, nextcontrolid) {
	if (window.event) e = window.event; //de chay ca tren IE
	if (e.keyCode == 13) {
		document.getElementById(nextcontrolid).focus();
	}
}