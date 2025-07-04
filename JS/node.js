// ------------------ select images for the device --------------------
// find what is the device
let Device = document.documentElement.clientWidth < 700 ? "mobile" : "desktop";
// elements selector
let ImgSelector = document.querySelectorAll(".creations .projects img");
ImgSelector = Array.from(ImgSelector);
let hero = document.getElementsByClassName("hero")[0];
// images names 
let ImgsNames = [
    "deep-earth",
    "night-arcade",
    "soccer-team",
    "grid",
    "from-above",
    "pocket-borealis",
    "curiosity",
    "fisheye"
];
// add the images for the page
ImgSelector.forEach((e, i) => {
    e.src = `images/${Device}/image-${ImgsNames[i]}.jpg`;
});
hero.setAttribute("style", `background-image: url(images/${Device}/image-hero.jpg);`);

// -------------------------- Menu section ---------------------------
// elements selector
const closeBtn = document.getElementsByClassName("close")[0];
const hamburgerBtn = document.getElementsByClassName("hamburger")[0];
const linksList = document.getElementsByClassName("links")[0];
// clicks events
hamburgerBtn.addEventListener('click', () => {
    linksList.classList.add("open-menu");
    document.body.style = 'position: fixed;';
    closeBtn.classList.remove("hide");
    // Hide .hero h1 and .logo
    document.querySelector('.hero h1').style.display = 'none';
    document.querySelector('.logo').style.display = 'none';
});
closeBtn.addEventListener('click', () => {
    linksList.classList.remove("open-menu");
    document.body.style = 'position: block;';
    closeBtn.classList.add("hide");
    // Show .hero h1 and .logo
    document.querySelector('.hero h1').style.display = '';
    document.querySelector('.logo').style.display = '';
});