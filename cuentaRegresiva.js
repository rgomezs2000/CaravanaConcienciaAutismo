function getTime() {
	now = new Date();
	y2k = new Date("Apr 28 2012 13:59:59");
	days = (y2k - now) / 1000 / 60 / 60 / 24;
	daysRound = Math.floor(days);
	hours = (y2k - now) / 1000 / 60 / 60 - (24 * daysRound);
	hoursRound = Math.floor(hours);
	minutes = (y2k - now) / 1000 /60 - (24 * 60 * daysRound) - (60 * hoursRound);
	minutesRound = Math.floor(minutes);
	seconds = (y2k - now) / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound);
	secondsRound = Math.round(seconds);
	sec = (secondsRound == 1) ? " segundo" : " segundos";
	min = (minutesRound == 1) ? " minuto" : " minutos, ";
	hr = (hoursRound == 1) ? " hora" : " horas, ";
	dy = (daysRound == 1) ? " día" : " d&iacute;as, "
/*	if(y2k>=new Date("Apr 28 2012 13:59:59")){
			document.getElementById("eventos").innerHTML="SE HA CELEBRANDO LA CARAVANA EN CONCIENTIZACIÓN DEL AUTISMO, DONDE SE PARTE DESDE EL PARQUE DEL ESTE &laquo;FRANCISCO DE MIRANDA&raquo;"
	}else{
	}*/
	document.getElementById("dias").innerHTML = daysRound;
	document.getElementById("horas").innerHTML=hoursRound;
	document.getElementById("minutos").innerHTML=minutesRound;
	document.getElementById("segundos").innerHTML=secondsRound;
	newtime = window.setTimeout("getTime();", 1000);
}