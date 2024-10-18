/*======================== toggle style switcher ========================*/

const styleSwitcherToggler = document.querySelector('.style-switcher-toggler');
styleSwitcherToggler.addEventListener("click", () =>{
    document.querySelector('.style-switcher').classList.toggle("open");
});

// Hide Style - switcher on scroll 
window.addEventListener("scroll", () =>{
    if (document.querySelector('.style-switcher').classList.contains("open")) {
        document.querySelector('.style-switcher').classList.remove("open");
    }
});

/*======================== theme colors ========================*/

const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    localStorage.setItem("color", color);  // Store color in localStorage

    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

/*======================== theme light and dark mode ========================*/

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});

// Load theme on page load
window.addEventListener("load", () => {
    // Apply dark mode by default
    document.body.classList.add("dark");
    dayNight.querySelector("i").classList.add("fa-sun");

    // Set default color to #f021b2
    const defaultColor = localStorage.getItem("color") || "f021b2"; // Retrieve from localStorage or set default
    setActiveStyle(defaultColor);
});
