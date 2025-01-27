const product = document.querySelectorAll(".product");

const fotoProduct = document.querySelector(".foto-product img");

product.forEach((item) => {
  item.addEventListener("click", () => {
    product.forEach((item) => {
      // item.classList.remove("#FFE8B6");
      item.classList.remove("bg-orange-300");
    });
    item.classList.add("bg-orange-300");

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
