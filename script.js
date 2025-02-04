const product = document.querySelectorAll(".product");
const fotoProduct = document.querySelector(".foto-product img");
const heroElement = document.querySelector("section.hero")

// navbar start
const heroObserver = new IntersectionObserver(
  (entries) => {
    const [entry] = entries;

    if(entry.isIntersecting){
      document.querySelector("nav").classList.add("scrolled")
    }else{
      document.querySelector("nav").remove("scrolled")
    }
  }, {threshold : 0.9})

heroObserver.observe(heroElement);
// navbar end


product.forEach((item) => {
  item.addEventListener("click", () => {
    product.forEach((item) => {
      // item.classList.remove("#FFE8B6");
      item.classList.remove("bg-lightBrown");
      item.classList.remove("text-black");
      item.classList.add("text-slate-50");
    });
    item.classList.add("bg-lightBrown");
    item.classList.add("text-black");

    if (item.classList.contains("kopikala")) {
      fotoProduct.src = "/img/kopikala.png";
    } else if (item.classList.contains("susu-aren")) {
      fotoProduct.src = "/img/susuAren.png";
    } else if (item.classList.contains("kopi-susu")) {
      fotoProduct.src = "/img/kopiSusu.png";
    } else if (item.classList.contains("susu-pisang")) {
      fotoProduct.src = "/img/susuPisang.png";
    }
  });
});

// // Mobile Menu Toggle
// const hamburger = document.createElement("button");
// hamburger.className = "hamburger fa fa-bars";
// document.querySelector(".nav-list").appendChild(hamburger);

// hamburger.addEventListener("click", () => {
//   document.querySelector(".nav-menu").classList.toggle("active");
// });

// // Close menu when clicking outside
// document.addEventListener("click", (e) => {
//   if (!e.target.closest(".nav-list")) {
//     document.querySelector(".nav-menu").classList.remove("active");
//   }
// });
