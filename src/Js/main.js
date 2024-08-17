const headerBarButton = document.querySelector(".header-bar_btn");
const headerMenuCloseButton = document.querySelector(".close-header_menu");

headerBarButton.addEventListener("click", (e) => {
  document.querySelector(".header-menu").classList.add("show");
});

headerMenuCloseButton.addEventListener("click", () => {
  document.querySelector(".header-menu").classList.remove("show");
});
