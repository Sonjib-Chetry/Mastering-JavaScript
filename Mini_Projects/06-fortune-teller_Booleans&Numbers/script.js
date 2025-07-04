let fortune1;
let fortune2;
let fortune3;
let fortune4;
let fortune5;

fortune1 = "Your cat will look very cuddly today.";
fortune2 = "The weather will be nice tomorrow.";
fortune3 = "Be cautious of your new neighbors.";
fortune4 = "You will find a new hobby soon.";
fortune5 = "It would be wise to avoid the color red today.";



let randomNumber ;
randomNumber = Math.floor(Math.random() * 5) + 1;

let selectedFortune;
selectedFortune = randomNumber;

if (randomNumber === 1) {
  selectedFortune = fortune1;
} else if (randomNumber === 2) {
  selectedFortune = fortune2;
} else if (randomNumber === 3) {
  selectedFortune = fortune3;
} else if (randomNumber === 4) {
  selectedFortune = fortune4;
} else if (randomNumber === 5) {
  selectedFortune = fortune5;
};

console.log(selectedFortune);