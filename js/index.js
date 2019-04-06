// Part 1
saladImgSrc = "img/salade.jpg";
spaghettiImgSrc = "img/spaghetti.jpg";
iceCreamImgSrc = "img/cremeglacee.jpg";

function onSaladRadioClick() {
  document.getElementById("img-dish").src = saladImgSrc;
}

function onSpaghettyRadioClick() {
  document.getElementById("img-dish").src = spaghettiImgSrc;
}

function onIceCreamRadioClick() {
  document.getElementById("img-dish").src = iceCreamImgSrc;
}

// Part 2
function onShowPart2ButtonClick() {
  let name = document.getElementById("field-name").value;
  let level = document.getElementById("field-level").value;

  if ([1, 2, 3, 4, 5, 6, 7].includes(parseInt(level))) {
    document.getElementById("result-part2").style.color = "#0f0";
    document.getElementById("result-part2").innerHTML =
      "<h" +
      level +
      ">Bonjour " +
      name +
      " niveau=" +
      level +
      "</h" +
      level +
      ">";
  } else {
    document.getElementById("result-part2").style.color = "#f00";
    document.getElementById("result-part2").innerHTML =
      "Erreur le niveau doit être entre 1 et 6";
  }
}

// Part 3
function convertInch2Cm() {
  let valueToConvert = document.getElementById("value2convert").value;

  let result = parseFloat(valueToConvert) * 2.5;
  document.getElementById("result-part3").innerHTML =
    "pouces ===> " + result + " cm";
}

function convertCm2Inch() {
  let valueToConvert = document.getElementById("value2convert").value;

  let result = parseFloat(valueToConvert) / 2.5;
  document.getElementById("result-part3").innerHTML =
    "cm ===> " + result + " pouces";
}

function convertCelsiusToFahrenheit() {
  let valueToConvert = document.getElementById("value2convert").value;

  let result = ((parseFloat(valueToConvert) * 9) / 5 + 32).toFixed(1);
  document.getElementById("result-part3").innerHTML =
    "celsius ===> " + result + " fahrenheit";
}

function convertFahrenheit2Celsius() {
  let valueToConvert = document.getElementById("value2convert").value;

  let result = (((parseFloat(valueToConvert) - 32) * 5) / 9).toFixed(1);
  document.getElementById("result-part3").innerHTML =
    "fahrenheit ===> " + result + " celsius";
}

// Part 4
$(function() {
  $("#part4 h2").click(function() {
    $("#part4 div").slideToggle();
  });
});
