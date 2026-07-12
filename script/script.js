/* =====================================
   HEADER
===================================== */

const header = document.getElementById("header");
const logo = document.getElementById("logo-img");

let headerScrolled = false;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  /* =====================
       SCROLLED
    ===================== */

  if (scrollTop > 80 && !headerScrolled) {
    headerScrolled = true;

    header.classList.add("scrolled");

    logo.style.opacity = "0";

    setTimeout(() => {
      logo.src = "img/logo-black.png";

      logo.style.opacity = "1";
    }, 150);
  } else if (scrollTop <= 80 && headerScrolled) {
    /* =====================
       TOP
    ===================== */
    headerScrolled = false;

    header.classList.remove("scrolled");

    logo.style.opacity = "0";

    setTimeout(() => {
      logo.src = "img/logo-white.png";

      logo.style.opacity = "1";
    }, 150);
  }
});

// Footer Slogan

const slogan = document.querySelector(".sticky-slogan");
const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
  const footerTop = footer.getBoundingClientRect().top;

  if (footerTop < window.innerHeight) {
    slogan.style.position = "absolute";

    slogan.style.top = window.scrollY + footerTop - 60 + "px";
  } else {
    slogan.style.position = "fixed";

    slogan.style.top = "";

    slogan.style.bottom = "0";
  }
});
