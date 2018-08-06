var choix = ["pierre", "feuille", "ciseau"];
var point = 0;
var pointadvers = 0;

while(point <= 2 && pointadvers <= 2) {

  var bot = [Math.floor(Math.random() * choix.length)];
  var choixj = prompt("Choisissez entre pierre feuille ou ciseau");
  choixj = choixj.toLowerCase();

  if (choixj == choix[0] && bot == 0) {
     console.log("Egalité le bot a choisis Pierre");
   }
  if (choixj == choix[0]  && bot == 1) {
    console.log("Le Bot a choisis Feuille, vous avez perdu cette manche");
    pointadvers = pointadvers + 1;
    console.log("L'adversaire a " + pointadvers + " point(s)");
  }
  if (choixj == choix[0] && bot == 2) {
    console.log("Vous avez gagner un point !");
    point = point + 1;
    console.log("Vous avez " + point + " point(s)");
  }


  if (choixj == choix[1] && bot == 0) {
     console.log("Vous avez gagner un point !");
     point = point + 1;
     console.log("Vous avez " + point + " point(s)");
   }
  if (choixj == choix[1] && bot == 1) {
    console.log("Egalité le bot a choisis Feuille");
  }
  if (choixj == choix[1] && bot == 2) {
    console.log("Le Bot a choisis Ciseau, vous avez perdu cette manche");
    pointadvers = pointadvers + 1;
    console.log("L'adversaire a " + pointadvers + " point(s)");
  }


  if (choixj == choix[2] && bot == 0) {
     console.log("Le Bot a choisis Pierre, vous avez perdu cette manche");
     pointadvers = pointadvers + 1;
     console.log("L'adversaire a " + pointadvers + " point(s)");
   }
  if (choixj == choix[2] && bot == 1) {
    console.log("Vous avez gagner un point !");
    point = point + 1;
    console.log("Vous avez " + point + " point(s)");
  }
  if (choixj == choix[2] && bot == 2) {
    console.log("Egalité le bot a choisis Ciseau");
  }

  else if (choixj !== choix[0] && choixj !== choix[1] && choixj !== choix[2]) {
    console.log("Entrez un bon choix")
  }

}

if (point >= 3) {
  console.log("Vous avez gagner cette partie");
}
if (pointadvers >= 3) {
  console.log("Vous avez Perdu cette partie");
}
