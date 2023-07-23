
document.addEventListener("DOMContentLoaded", () => {
    const loading = document.querySelector(".progColor");

    loading.addEventListener("animationend", () => {
        const loadingScreen = document.querySelector("#loadingScreenDisplay");
        console.log(loadingScreen);
        
        loadingScreen.style.transition = "0.2s";
        loadingScreen.style.opacity = "0";

        loadingScreen.addEventListener("transitionend", () => {
            var websiteScreen = document.getElementById("websiteDisplay");

            websiteScreen.style.transition = "opacity 0.5s";
            websiteScreen.style.opacity = "100";
            // makes sure we start at the top
            window.scrollTo(0,0);
        });
    });
});

