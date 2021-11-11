//alert("Hello World ! Everythink works");
var description = new Array(2)
description[0] = " Wyświetla okno dialogowe z informacją i przyciskiem OK."
description[1] = "Wyświetla okno, w którym użytkownik może wpisać wartość zwracaną do programu."

var section = [];
section[0] = ["alert();", "prompt();", "document.write();", "console.log();", "Obiekt Date", "Obiekt Date", "Instrukcja wyboru switch", "Obiekt Math", "Slider"];
section[1] = [description[0], description[1], "cursus ut", "lacus nec", "dignissim Ut", "euismod"];
section[2] = ["Wyswietl okno", "Wyswietl okno", "Pokaz tekst", "Zapisz w konsoli", "Wyswietl date", "Pokaz godzine", "Który dzisiaj ?", "Wylosuj liczby"];

window.onload = generation();
function generation(){
var div = " ";

for (i=0; i<section[0].length; i++){
  div = div + '<section class="section"><header class="header">'+section[0][i]+'</header><article class="article">'+section[1][i]+'</article><button class="button" onclick="example'+i+'();">'+section[2][i]+'</button><div class="example" id="example'+i+'"></div></section>';
}
document.getElementById("maine").innerHTML = div;
}

function example0(){
   alert("Witaj Jestem funkcją Alert");
}

function example1(){
   prompt("Witaj Jestem funkcją Pompt. Poniżej wpisz wartość", "0");
}

function example2(){
   var text = prompt("co mam wypisać na ekranie", "Jestem tekstem");
   document.getElementById("example2").innerHTML = text;
}

function example3(){
   var text = prompt("Co mam zapisać w konsoli?", "0 ");
   console.log(text);
}

function example4(){
   var data = new Date;
   var d = data.getDate();
   if(d<10) d="0"+d;
   var m = data.getMonth()+1;
   if(m<10) m="0"+ m;
   var y = data.getFullYear();

   document.getElementById("example4").innerHTML = d+'.'+m+'.'+y;
}

function example5(){
  var data = new Date;
  var h = data.getHours();
  if(h<10) h="0"+h;
  var m = data.getMinutes();
  if (m<10) m="0"+m;
  var s = data.getSeconds();
  if (s<10) s= "0"+s;

  document.getElementById("example5").innerHTML = h+":"+m+":"+s;

  setTimeout("example5()", 1000);
}

function example6(){
    textm = ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "pażdziernika", "listopada", "grudnia"]
    textd = ["poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota", "niedziela"]

   var start = "Jest "
   var end = " dzień "

   var data = new Date;
   var d = data.getDay();
   var da =data.getDate();
   var m = data.getMonth();

   switch(m){
     case 0: document.getElementById("example6").innerHTML = start +" "+da+"."+ end + textm[0]
     break
     case 1: document.getElementById("example6").innerHTML = start + " "+da+"."+ end + textm[1]
     break
     case 2: document.getElementById("example6").innerHTML = start +" "+da+"."+ end + textm[2]
     break
     case 3: document.getElementById("example6").innerHTML = start +d +" "+da+"."+ end + textm[3]
     break
     case 4: document.getElementById("example6").innerHTML = start + d+" "+da+"."+ end + textm[4]
     break
     case 5: document.getElementById("example6").innerHTML = start +d +" "+da+"."+ end + textm[5]
     break
     case 6: document.getElementById("example6").innerHTML = start +d+" "+da+"."+ end + textm[6]
     break
     case 7: document.getElementById("example6").innerHTML = start +d+" "+da+"."+ end + textm[7]
     break
     case 8: document.getElementById("example6").innerHTML = start + end +" "+da+"."+ textm[8]
     break
     case 9: document.getElementById("example6").innerHTML = start + end +" "+da+"."+ textm[9]
     break
     case 10: document.getElementById("example6").innerHTML = start + end +" "+da+"."+ textm[10]
     break
     case 11: document.getElementById("example6").innerHTML = start + end +" "+da+"."+ textm[11]
     break
   }
}

function example7(){
  var x = Math.round(100*Math.random());
  var y = Math.round(100*Math.random());

  alert("Pierwszą wylosowaną liczbą jest: "+ x);
  alert("Drugą wylosowaną liczbą jest: "+ y);
  var z = prompt("Powiedz co mam zrobić z wylosowanymi liczbami "+x+" i "+y);

  if((z = "+" )||(z = "dodać")||(z = "dodac")||(z ="plus")||(z ="doac")) console.log(x+y);
  else if((x>y)&&((z = "-" )||(z = "odjąć")||(z = "odjac")||(z = "minus")||(z = "odjąc"))) console.log(x-y);
  else if((x<y)&&((z = "-" )||(z = "odjąć")||(z = "odjac")||(z = "minus")||(z = "odjąc"))) console.log(y-x);
  else if((z = "*")||(z="x")||(z="pomnożyć")||(z="pomnóż")||(z="pomnoz")||(z="pomnozyc")) console.log(x*y);
  else if((x>y)&&((z = "/")||(z=":")||(z="podzielić")||(z="podziel")||(z="podzielic")||(z="pozdiel"))) console.log(x/y);
  else if((y=0)&&((z = "/")||(z=":")||(z="podzielić")||(z="podziel")||(z="podzielic")||(z="pozdiel"))) console.log("nie dzielimy przez 0");
  else if((y>x)&&((z = "/")||(z=":")||(z="podzielić")||(z="podziel")||(z="podzielic")||(z="pozdiel"))) console.log(y/x);
  else if((x=0)&&((z = "/")||(z=":")||(z="podzielić")||(z="podziel")||(z="podzielic")||(z="pozdiel"))) console.log("nie dzielimy przez 0");
}

// sticky nav

$(document).ready(function()
{
	var ElementY = $("nav").offset().top;
	function stickyElement()
	{
		var scrollY = $(window).scrollTop();
		if(scrollY > ElementY) $("nav").addClass("sticky")
		else $("nav").removeClass("sticky");
	};
	stickyElement();
	$(window).scroll(function()
	{
		stickyElement();
	});
});
