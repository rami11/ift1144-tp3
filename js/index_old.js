$(document).ready(function() {
  /* Part 1 */
  const dishImgs = {
    saladImgPath: "img/salade.jpg",
    spaghettiImgPath: "img/spaghetti.jpg",
    iceCreamImgPath: "img/cremeglacee.jpg"
  };

  const part1 = $("div#part1");

  $(part1)
    .find("input[type=radio]#radio-salad")
    .click(function() {
      $("#img-dish").attr("src", dishImgs.saladImgPath);
    });

  $(part1)
    .find("input[type=radio]#radio-spaghetti")
    .click(function() {
      $("#img-dish").attr("src", dishImgs.spaghettiImgPath);
    });

  $(part1)
    .find("input[type=radio]#radio-icecream")
    .click(function() {
      $("#img-dish").attr("src", dishImgs.iceCreamImgPath);
    });

  /* Part 2 */
  const part2 = $("div#part2");

  $(part2)
    .find("#form-part2")
    .submit(function(event) {
      event.preventDefault();

      onFormSubmit(event.currentTarget);
    });

  function onFormSubmit(form) {
    let nameValue = $("#text-name").val();
    let levelValue = $("#text-level").val();

    switch (levelValue) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
        $(form)
          .find("#result-part2")
          .css({ color: "darkgreen" })
          .html(
            "<h" +
              levelValue +
              ">Bonjour " +
              nameValue +
              " niveau=" +
              levelValue +
              "</h" +
              levelValue +
              ">"
          );
        break;
      default:
        $(form)
          .find("#result-part2")
          .css({ color: "#f00" })
          .html("<p>Erreur le niveau doit être entre 1 et 6</p>");
    }
  }

  /* Part 3 */
  const part3 = $("div#part3");

  $(part3)
    .find("button#inch2cm")
    .click(function() {
      $(part3)
        .find("span")
        .html(
          $(part3)
            .find("#value2convert")
            .val() * 2.5
        );
    });

  /* Part 4 */
  $("#part4 h2").click(function() {
    $("#part4 div").slideToggle();
  });
});
