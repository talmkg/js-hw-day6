/*INGRIDIENTS*/
let spaghetti = 400;
let guanciale = 250;
let yolks = 6;
let pecorinoRomana = 50;
let pepper = 6;
let salt = 5;
yolks = yolks * 18;

console.log("Let's cook some Pasta :)");
console.log("Mix yolks and cheese and see whan happens.");

let sauce = yolks + pecorinoRomana;

console.log("Weight of sauce is: ", sauce);

console.log("Then, cook pasta in boiling salted water.");

let cookedSpaghetti = spaghetti * 1.8 + salt;

console.log("Weight of cooked spaghetti is: ", cookedSpaghetti);
console.log("Fry sliced guanciale in pan");
console.log(
  "Gently add cooked spaghetti in pan with guanciale and add sauce with pepper"
);

let pasta = cookedSpaghetti + sauce + pepper + guanciale;
console.log("Weight of ready pasta made according to this recipe is: ", pasta);
