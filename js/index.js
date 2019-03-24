const saladImgPath = "img/salade.jpg";
const spaghettiImgPath = "img/spaghetti.jpg";
const iceCreamImgPath = "img/cremeglacee.jpg";

function onDishRadioClick(dishRadio) {
  switch (dishRadio.id) {
    case "radio-salad":
      document.getElementById("img-dish").src = saladImgPath;
      break;
    case "radio-spaghetti":
      document.getElementById("img-dish").src = spaghettiImgPath;
      break;
    case "radio-icecream":
      document.getElementById("img-dish").src = iceCreamImgPath;
      break;
    default:
      document.getElementById("img-dish").src = saladImgPath;
  }
}
