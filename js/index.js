const dishImgs = {
  saladImgPath: "img/salade.jpg",
  spaghettiImgPath: "img/spaghetti.jpg",
  iceCreamImgPath: "img/cremeglacee.jpg"
};

function onDishRadioClick(dishRadio) {
  switch (dishRadio.id) {
    case "radio-salad":
      document.getElementById("img-dish").src = dishImgs.saladImgPath;
      break;
    case "radio-spaghetti":
      document.getElementById("img-dish").src = dishImgs.spaghettiImgPath;
      break;
    case "radio-icecream":
      document.getElementById("img-dish").src = dishImgs.iceCreamImgPath;
      break;
    default:
      document.getElementById("img-dish").src = dishImgs.saladImgPath;
  }
}
