//     ===  Egal à

//    !==   Différent de

//    <     Inférieur à

//    <=    Inférieur ou égal à

//    >     Supérieur à

//    >=    Supérieur ou égal à



// Cours Variable openclassroom //
//
// var nombre1 = 5;
//
// var nombre2 = 3;
//
// console.log(nombre1 - 2); // Doit afficher 3
//
// console.log(nombre2 + 2); // Doit afficher 5



// Cours conditions openclassroom //


// var nombre = prompt("Saisissez un nombre");
//
// if (nombre > 0) {
//   console.log(nombre + " est positif");
// }


// 2 Eme conditions //


// var nombre = Number(prompt("Entrez un nombre :"));
// if (nombre > 0) {
//     console.log(nombre + " est positif");
// } else {
//     if (nombre < 0) {
//         console.log(nombre + " est négatif");
//     } else {
//         console.log(nombre + " est nul");
//     }
// }


// 3 Eme conditions //


// var meteo = prompt("Quel temps fait-il dehors ?");
//
// switch (meteo) {
//
// case "soleil":
//
//     console.log("Sortez en t-shirt.");
//
//     break;
//
// case "vent":
//
//     console.log("Sortez en pull.");
//
//     break;
//
// case "pluie":
//
//     console.log("Sortez en blouson.");
//
//     break;
//
// case "neige":
//
//     console.log("Restez au chaud à la maison.");
//
//     break;
//
// default:
//
//     console.log("Je n'ai pas compris !");
//
// }


// Boucle While //

// console.log("Début du programme");

// var nombre = 1;

// while (nombre <= 5) {

//     console.log(nombre);

//     nombre++;

// }

// console.log("Fin du programme");



// Boucle for

// var compteur;
    //  compteur commence a 1 / jusque 5 et augment 1 par 1
// for (compteur = 1; compteur <= 5; compteur++) {

//     console.log(compteur);

// }

// Exercice boucle for

// var compteur = 1;
//
//   for (compteur = 1; compteur <= 10; compteur++) {
//     console.log("C'est le tour numéro " + compteur)
//   }


// var age = 43;
//
// while (nombre !== age) {
//   var nombre = Number(prompt("Entrez un age :"));
//   if (nombre > 43) {
//     console.log(nombre + " est trop haut");
//   } else {
//     if (nombre < 43) {
//       console.log(nombre + " est trop bas");
//     } else {
//       console.log(nombre + " est le bon chiffre");
//     }
//   }
// }


// var age = Math.floor(Math.random()* 50) +1;
// var vie;
// var nombre;
//
// for(vie = 6; vie >= 0 && nombre != age; vie--) {
//   nombre = prompt("Entrez un age :");
//   if (nombre == age) {
//      console.log("Félicitation vous êtes le 10000000000ène gagnant de notre petit jeu de merde, vous avez rien gagner");
//    }
//   if (nombre > age) {
//     console.log(nombre + " est trop haut");
//     console.log("il vous reste " + vie + " vie");
//   } else {
//     if (nombre < age) {
//       console.log(nombre + " est trop bas");
//       console.log("il vous reste " + vie + " vie");
//     }
//   }
//   if (vie == 0) {
//     console.log("Vous avez utiliser trop de chance");
//   }
// }

//  var hello = "Hello World"
//
// console.log(hello);


// console.log(3*3);
// console.log(12/0);
// console.log(4+9+78);
// console.log(12+7);
// console.log(5e4);


// var nom = prompt("Quel est votre nom ?");
//
// console.log("Bienvenue " + nom);
//
// var nom = "Jessy";
// var prenom = "Fouace";
//
// console.log("Bonjour " + nom + " " + prenom)


// var myNumber = "123";
// myNumber = Number("123");
//
// console.log(myNumber);

// var name = prompt("Votre Nom");
// var name2 = name.toUpperCase();
// var prenom = prompt("Votre Prenom");
// var prenom2 = prenom.toLowerCase();
//
// console.log(name2);
// console.log(prenom2);



// var x = ("text");
// var y = ("");
//
// if (x == 0) {
//   console.log("false");
// } else {
//   console.log("true");
// }
//
// if (y == 0) {
//   console.log("false");
// } else {
//   console.log("true");
// }



// var age = prompt("Quelle est l'année actuelle ?");
// var annee = prompt("Quel est votre année de naissance ?");
// var calcul = age - annee;
//
// console.log("Vous avez " + calcul + " ans");


// var prix1 = 70;
// var prix2 = 59;
// var prix3 = 20;
// var total = (prix1 + prix2 + prix3) * 0.80;
//
// console.log(total + "€");


// var nombre = Number(prompt("Donner les nombres a additionner"));
// var nombre2 = Number(prompt("Donner les nombres a additionner"));
// var result = (nombre + nombre2);
//
// console.log(result);

// var nom= prompt("Votre Nom");
// var prenom= prompt("Votre Prénom");
// var age= prompt("Votre âge");
//
// var nomss = nom.substr(0, 1);
// var noms = nom.substr(0-1);
//
// var prenoms = prenom.substr(0, 1);
// var prenomss = prenom.substr(0-1);
//
// var ages = (age*1 / 33);
//
// console.log((nomss+noms+prenoms+prenomss).toUpperCase());
// console.log(Math.ceil(ages));

// var age = 28;
// var vie;
// var nombre;
//
// for(vie = 6; vie >= 0 && nombre != age; vie--) {
//   nombre = prompt("Entrez un chiffre :");
//   if (nombre == age) {
//      console.log("Félicitation vous êtes le 10000000000ène gagnant de notre petit jeu de merde, vous avez rien gagner");
//    }
//   if (nombre > age) {
//     console.log(nombre + " est trop haut");
//     console.log("il vous reste " + vie + " vie");
//   } else {
//     if (nombre < age) {
//       console.log(nombre + " est trop bas");
//       console.log("il vous reste " + vie + " vie");
//     }
//   }
//   if (vie == 0) {
//     console.log("Vous avez utiliser trop de chance");
//   }
// }


// var nombre1 = 10;
// var nombre2 = 20;
// var nombre3 = 30;
// var nombre4 = 40;
// var nombretotal = Math.max(nombre1, nombre2, nombre3, nombre4);
//
// console.log(nombretotal);


// var age = prompt("Quel est votre âge ?");
//
// if (age <= 0) {
//   console.log("Entrez un âge valide !");
// } else if (age >= 21) {
//   console.log("Accès autoriser");
// } else if (age < 21) {
//   console.log("Accès refuser");
// }
//
// if (age%2 == 0) {
//   console.log("Votre âge est pair");
// }
// if (age%4 == 0) {
//   console.log("Votre âge est carrer");
// }

// var nombre;
//
// for (nombre = 1; nombre <= 100; nombre++) {
//   console.log(nombre);
// }


// var nombre;
//
// for (nombre = 1; nombre <= 100 ; nombre++) {
//   if (nombre%2 === 0) {
//     console.log(nombre);
//   }
// }

// var longueur = Number(prompt("Longueur de votre piscine (mètre)"));
// var largeur = Number(prompt("Largeur de votre piscine (mètre)"));
// var hauteur = Number(prompt("Hauteur de votre piscine (mètre)"));
// var mcube = longueur * largeur * hauteur;
//
// console.log("Votre piscine fait " + mcube + "m3");
//
//
// var duree = Number(prompt("Durée d'un remplissage d'un sceau d'eau de 10Litres (seconde)"));
// var calcul = mcube * 1000;
// var totalm = calcul / duree;
// var totalenmin = Math.round(totalm / 60);
//
//
// console.log("Il vous faut environ " + totalenmin + " min pour remplir votre piscine");


// var rayon = Number(prompt("Quel est le rayon de votre cercle"))
//
//
// function perimetre(){
//   var perimetre = 2 * Math.PI * rayon;
//
// console.log(perimetre + " de périmètre");
// }
//
// function air(){
//   var air = (rayon * rayon) * Math.PI;
//
// console.log("Votre cercle fait " + air + " d'air")
// }
//
// perimetre();
// air();



// var pyramide = "";
//
// for (i = 0; i <= 5; i++) {
//   pyramide += ("*");
//   console.log(pyramide);
// }


// function nombres() {
//   for (var nombre = 1; nombre <= 100; nombre++) {
// if (nombre%5 + nombre%3 === 0) {
//     console.log("FIZZBUZZ");
//     }
//   else if
//     (nombre%5 === 0)
//    console.log("BUZZ");
//   else if
//     (nombre%3 === 0)
//    console.log("FIZZ");
//     else
//         console.log(nombre);
// }
// }
//
// nombres();


// ECHEQUIER

// var ligne1 = "";
//
//
// for (var i = 0; i < 8; i ++) {
//   ligne1 += "\n";
//   for (var o = 0; o < 16; o++) {
//     if (ligne1.length % 2 === 0) {
//       ligne1 += "#";
//     } else {
//       ligne1 += " ";
//     }
//   }
// }
//
// console.log(ligne1);


// MATRIX

// for (var i = 0; i < 4; i++) {
//
//   for (var y = 0; y < 4; y++) {
//
//     if(y == i) {
//       console.log('1');
//     } else {
//       console.log('0');
//     }
//   }
//   console.log('"----------"');
// }

// var panier = Math.round(Number(prompt("Quel est le prix de votre panier ?")));
//
// function panierarr(){
//   if(panier%2 === 0)
//   console.log("true")
//   else (
//     console.log("false")
//   )
// }
//
// panierarr();


// FACTORIELLE //

// function factorielle(x) {
//   var oui = 1;
//   while (Number.isInteger(x) === false) {
//     console.log("Erreur entrez un nombre entier");
//     x = Number(prompt("Entrez une valeur pour en avoir la valeur factorielle"));
//   }
//   for (var i = 1 ; i < x ; i++) {
//     oui += oui * i;
//   }
//     console.log(oui);
// }
//
// x = Number(prompt("Entrez une valeur pour en avoir la valeur factorielle"));
// factorielle(x);


// function facturation(fact){
// var fact = prompt("Facturation");
//
//     for (var i = 0; i < fact.length; i++) {
//         if (isNaN(fact)) {
//         fact = fact.replace("-","_");
//     } else {
//         console.log("Veuillez bien écrire une phrase");
//     }
//     }
//     console.log(fact);
// }
//
// facturation();


// var courses = ["Lait", "Fruit", "Legumes", "Chocolat", "Bonbon", "Boisson", "Viande"];
//
// console.log(courses[0]);
// console.log(courses[6]);
// console.log(courses[3]);



// var homme = ["Jessy", "Fouace", "19", "07/10/1998"];
//
// function tableaux(homme){
//   for (var i = 0; i < homme.length; i++) {
//     console.log(homme[i]);
//   }
// }
//
// tableaux(homme);


// var homme = [
//   ["Fouace", "Jessy", "19", "07/10/1998"],
//   ["Jean-Charles", "Graillot", "36", "28/09/1981"],
//   ["Fouace", "Jason", "22", "04/06/1996"],
// ];
//
// function tableaux(homme){
//   for (var i = 0; i < homme.length; i++) {
//     for (var y = 0; y < homme.length; y++) {
//       console.log(homme[i][y]);
//     }
//   }
// }
//
// tableaux(homme);

// var chiffre = [1, 2, 3, 4, 5];
//
// function haut(chiffre){
//     console.log(Math.max(...chiffre));
// }
//
// haut(chiffre);

// var chiffre = [1, "Mot 1" , 2 , "Mot 20" , 3 ,"Mot 300" , 4 , "Mot 4000" , 5];
// var chiffrl = chiffre[7].length;
//
// function haut(chiffre){
//   for (var i = 0; i < chiffre.length; i++) {
//   if (isNaN(chiffre)) {
//       console.log(...chiffre);
//   } else if (Number(chiffre)){
//       console.log(Math.max(...chiffre));
//   } else {
//     return false;
//   }
//   }
// }
//
// haut(chiffre);


// function tabl(){
//   var demande;
//   var tache = [];
//
//   if (demande !== "fin") {
//     while (demande !== "fin") {
//       demande = prompt("Taches a stocker marquez fin si vous avez fini de les mettre");
//       tache.push(demande);
//     }
//   }
//   if (demande === "fin") {
//     for (var i = 0; i < tache.length -1 ; i++) {
//       console.log(tache[i]);
//     }
//   }
// }
//
// tabl();


function compter() {
    var phrase = prompt("Entrez la phrase");
    var lettre = prompt("Quel lettre voulez vous compter");
    var compteur = 0;
    lettre =

    while (compteur == lettre) {

    }
}
