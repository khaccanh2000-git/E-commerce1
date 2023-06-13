const bar = document.querySelector("#bar");
const nav = document.querySelector("#navbar");
const closenav = document.querySelector("#closenav");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (closenav) {
  closenav.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
