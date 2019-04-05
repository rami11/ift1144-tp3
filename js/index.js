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
  const name = document.getElementById("field-name").value;
  const level = document.getElementById("field-level").value;

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
      "<p>Erreur le niveau doit être 1 et 6</p>";
  }
}

// Part 3

// Part 4
$(function() {
  $("#part4 h2").click(function() {
    $("#part4 div").slideToggle();
  });
});
