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
    if (item.classList.contains("kopikala")) namaProduk = "Kopikala.png";
    else if (item.classList.contains("susu-aren")) namaProduk = "susuAren.png";
    else if (item.classList.contains("kopi-susu")) namaProduk = "kopiSusu.png";
    else if (item.classList.contains("susu-pisang"))
      namaProduk = "susuPisang.png";

    if (namaProduk) {
      fotoProduct.src = `src/img/${namaProduk}`;
    }
  });
});
