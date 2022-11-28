function toggleMenu() {
  const navbar = document.querySelector(".sideNav");
  const burger = document.querySelector(".nav-open-btn");
  const cross = document.querySelector(".nav-close-btn");
  const web3Section = document.querySelector(".web3Section");

  burger.addEventListener("click", () => {
    navbar.classList.toggle("show-nav");
    cross.classList.toggle("showcross");
    web3Section.style.opacity ="0.4";
    web3Section.style.transition ="all 2s";
    

  });
  cross.addEventListener("click", () => {
    navbar.classList.toggle("show-nav");
    cross.classList.toggle("showcross");
    web3Section.style.opacity="1";
  });
}

toggleMenu();
