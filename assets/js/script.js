let dish;
let drink;
let dessert;

function chooseChicken() {
  document.getElementById('chicken').style.borderColor = 'green';
  document.getElementById('meat').style.borderColor = 'white';
  dish = 'Frango';
}

function chooseMeat() {
  document.getElementById('meat').style.borderColor = 'green';
  document.getElementById('chicken').style.borderColor = 'white';
  dish = 'Carne';
}

function chooseCoke() {
  document.getElementById('coke').style.borderColor = 'green';
  document.getElementById('juice').style.borderColor = 'white';
  drink = 'Coca';
}

function chooseJuice() {
  document.getElementById('juice').style.borderColor = 'green';
  document.getElementById('coke').style.borderColor = 'white';
  drink = 'Suco';
}

function choosePudding() {
  document.getElementById('pudding').style.borderColor = 'green';
  document.getElementById('iceCream').style.borderColor = 'white';
  dessert = 'Pudim';
}

function chooseIceCream() {
  document.getElementById('iceCream').style.borderColor = 'green';
  document.getElementById('pudding').style.borderColor = 'white';
  dessert = 'Sorvete';
}

function checkout() {
  let message = `Olá, gostaria de pedir um combo: ${dish}, ${drink} e ${dessert}`;

  window.open('https://wa.me/+5534999999999?text=' + message);
}
