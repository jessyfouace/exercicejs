var Pierre = 1;
var Feuille = 2;
var Ciseau = 3;
var point = 0;
var pointadvers = 0;

while(point <= 2 && pointadvers <= 2) {
  var bot = Math.floor(Math.random()* 3);
  nombre = prompt("Choisissez entre pierre feuille ou ciseau (en minuscule)");
  if (nombre == "pierre" && bot == 1) {
     console.log("Egalité le bot a choisis Pierre");
   }
  if (nombre == "pierre" && bot == 2) {
    console.log("Le Bot a choisis Feuille, vous avez perdu cette manche");
    pointadvers = pointadvers + 1;
    console.log("L'adversaire a " + pointadvers + " point(s)");
  }
  if (nombre == "pierre" && bot == 3) {
    console.log("Vous avez gagner un point !");
    point = point + 1;
    console.log("Vous avez " + point + " point(s)");
  }


  if (nombre == "feuille" && bot == 1) {
     console.log("Vous avez gagner un point !");
     point = point + 1;
     console.log("Vous avez " + point + " point(s)");
   }
  if (nombre == "feuille" && bot == 2) {
    console.log("Egalité le bot a choisis Feuille");
  }
  if (nombre == "feuille" && bot == 3) {
    console.log("Le Bot a choisis Ciseau, vous avez perdu cette manche");
    pointadvers = pointadvers + 1;
    console.log("L'adversaire a " + pointadvers + " point(s)");
  }


  if (nombre == "ciseau" && bot == 1) {
     console.log("Le Bot a choisis Pierre, vous avez perdu cette manche");
     pointadvers = pointadvers + 1;
     console.log("L'adversaire a " + pointadvers + " point(s)");
   }
  if (nombre == "ciseau" && bot == 2) {
    console.log("Vous avez gagner un point !");
    point = point + 1;
    console.log("Vous avez " + point + " point(s)");
  }
  if (nombre == "ciseau" && bot == 3) {
    console.log("Egalité le bot a choisis Ciseau");
  }
}

if (point >= 3) {
  console.log("Vous avez gagner cette partie");
}
if (pointadvers >= 3) {
  console.log("Vous avez Perdu cette partie");
}
