const product = document.querySelectorAll(".product");
const fotoProduct = document.querySelector(".foto-product img");

// navbar start
document.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");

  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
// navbar end

// product.forEach((item) => {
//   item.addEventListener("click", () => {
//     product.forEach((item) => {
//       // item.classList.remove("#FFE8B6");
//       item.classList.remove("bg-lightBrown");
//       item.classList.remove("text-black");
//       item.classList.add("text-slate-50");
//     });
//     item.classList.add("bg-lightBrown");
//     item.classList.add("text-black");

//     if (item.classList.contains("kopikala")) {
//       fotoProduct.src = "img/kopikala.png";
//     } else if (item.classList.contains("susu-aren")) {
//       fotoProduct.src = "img/susuAren.png";
//     } else if (item.classList.contains("kopi-susu")) {
//       fotoProduct.src = "img/kopiSusu.png";
//     } else if (item.classList.contains("susu-pisang")) {
//       fotoProduct.src = "img/susuPisang.png";
//     }
//   });
// });
product.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("Menu diklik:", item.classList); // Debugging

    product.forEach((menu) => {
      menu.classList.remove("bg-lightBrown", "text-black");
      menu.classList.add("text-slate-50");
    });

    item.classList.add("bg-lightBrown", "text-black");

    // Ambil nama produk berdasarkan class
    let namaProduk = "";
    if (item.classList.contains("kopikala")) namaProduk = "kopikala.png";
    else if (item.classList.contains("susu-aren")) namaProduk = "susuAren.png";
    else if (item.classList.contains("kopi-susu")) namaProduk = "kopiSusu.png";
    else if (item.classList.contains("susu-pisang"))
      namaProduk = "susuPisang.png";

    // Ubah gambar tanpa mengubah path awalnya
    if (namaProduk) {
      fotoProduct.src = fotoProduct.src.replace(/[^/]+$/, namaProduk);
      console.log("Gambar berubah ke:", fotoProduct.src); // Debugging
    }
  });
});
