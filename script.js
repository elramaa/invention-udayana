$(function () {
  // setup function time
  const timeOpened = new Date();
  setInterval(() => {
    const date = new Date(); // new ambil object time bang
    const time = new Intl.DateTimeFormat("id-ID", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(date);
    console.log(time);
    // Set Countdown Hot Deals
  }, 1000);
});

// mobile nav
function toggleMobileMenu() {
  document.querySelector(".menu-overlay").classList.toggle("active");
  document.querySelector(".menu-backdrop").classList.toggle("active");
}

document.querySelector(".menu-toggle").addEventListener("click", function () {
  toggleMobileMenu();
});

document.querySelector(".menu-backdrop").addEventListener("click", function () {
  toggleMobileMenu();
});

document.querySelectorAll(".menu-overlay nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    toggleMobileMenu();
  });
});
