function toggleMenu () {
    const navbar = document.querySelector(".sideNav");
    // const burger = document.getElementById("menuBtn");
    const burger = document.querySelector(".nav-open-btn");
    const cross = document.querySelector(".nav-close-btn")
    burger.addEventListener("click", () => {
        navbar.classList.toggle("show-nav");
        cross.classList.toggle("showcross");
        // navbar.style.display('block');
        // cross.style.opacity='0';
    })
    cross.addEventListener("click", () => {
        navbar.classList.toggle("show-nav");
        cross.classList.toggle("showcross");
        // navbar.style.display='block';
        // cross.style.opacity='100%';
    })
}

toggleMenu();