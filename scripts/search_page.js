$(function () {
  console.log("web loaded");
  // const filterAccordionActive = [null];
  $(".filter-accordion-btn").on("click", function () {
    $(this).toggleClass("active");
    console.log("accordion active");
  });
});
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
