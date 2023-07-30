
// When you click outside of popup, it will automatically close it
document.addEventListener('click', function(event) {  
    const darkBackground = document.querySelector(".darkenedBackground");
    const popup = document.querySelector(".popup");
    const openPopup = document.querySelector(".card-img-top");
    const closeBtn = document.querySelector(".btn-close");
    const outsideElement = event.target;

    if (popup.style.visibility == 'visible' && 
    outsideElement !== openPopup &&
    outsideElement !== closeBtn &&
    !popup.contains(outsideElement)) {
        console.log(outsideElement);
        console.log("Popup closed through outside click");
        popup.style.visibility = 'hidden';
        darkBackground.style.visibility = 'hidden'; 
    }
});

function openPopup() {
    const popup = document.querySelector(".popup");
    const darkBackground = document.querySelector(".darkenedBackground");

    console.log("Popup opened");
    popup.style.visibility = 'visible';
    darkBackground.style.visibility = 'visible';
}

function closePopup() {
    const popup = document.querySelector(".popup");
    const darkBackground = document.querySelector(".darkenedBackground");

    console.log("Popup closed through x button");
    popup.style.visibility = 'hidden';
    darkBackground.style.visibility = 'hidden';
}


