document.addEventListener("DOMContentLoaded", function () {
// Hover over personal project card
  document.querySelector(".card").addEventListener("mouseover", function () {
    const blurCard = document.querySelector(".hoverBlur");
    const projHover = document.querySelector(".projectHover");
    const hoverText = document.querySelector(".hoverText");

    // console.log("Hovering card");
    blurCard.style.visibility = "visible";
    projHover.style.visibility = "visible";
    hoverText.style.visibility = "visible";
  });
// Remove mouse over personal project card
  document.querySelector(".card").addEventListener("mouseout", function () {
    const blurCard = document.querySelector(".hoverBlur");
    const projHover = document.querySelector(".projectHover");
    const hoverText = document.querySelector(".hoverText");

    // console.log("Not hovering card");
    blurCard.style.visibility = "hidden";
    projHover.style.visibility = "hidden";
    hoverText.style.visibility = "hidden";
  });

  // When you click outside of popup, it will automatically close it
  document.addEventListener("click", function (event) {
    const popup = document.querySelector(".popup");
    const openPopup = document.querySelector(".card-img-top");
    const closeBtn = document.querySelector(".btn-close");
    const blurCard = document.querySelector(".hoverBlur");
    const projHover = document.querySelector(".projectHover");
    const hoverText = document.querySelector(".hoverText");

    const darkBackground = document.querySelector(".darkenedBackground");
    const outsideElement = event.target;

    if (
      popup.style.visibility == "visible" &&
      outsideElement !== openPopup &&
      outsideElement !== closeBtn &&
      outsideElement !== blurCard &&
      outsideElement !== projHover &&
      outsideElement !== hoverText &&
      !popup.contains(outsideElement)
    ) {
      console.log(outsideElement);
      console.log("Popup closed through outside click");
      popup.style.visibility = "hidden";
      darkBackground.style.visibility = "hidden";
    }
  });
});

function openPopup() {
  const popup = document.querySelector(".popup");
  const darkBackground = document.querySelector(".darkenedBackground");

  console.log("Popup opened");
  popup.style.visibility = "visible";
  darkBackground.style.visibility = "visible";
}

function closePopup() {
  const popup = document.querySelector(".popup");
  const darkBackground = document.querySelector(".darkenedBackground");

  console.log("Popup closed through x button");
  popup.style.visibility = "hidden";
  darkBackground.style.visibility = "hidden";
}
