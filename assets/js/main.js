const sideBarCloseButton = document.getElementById("close-btn");
const openMenuButton = document.getElementById("menu-btn");
const bannercloseButton = document.getElementById("dismiss-btn");

bannercloseButton.addEventListener("click", (e) => {
  document.getElementById("blue-banner").classList.add("hidden");
});

sideBarCloseButton.addEventListener("click", (e) => {
  document.getElementById("sidebar").classList.add("hidden");
});

openMenuButton.addEventListener("click", (e) => {
  document.getElementById("sidebar").classList.remove("hidden");
});
