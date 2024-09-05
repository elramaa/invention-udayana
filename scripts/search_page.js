$(function () {
  console.log("web loaded");
  // const filterAccordionActive = [null];
  $(".filter-accordion-btn").on("click", function () {
    $(this).toggleClass("active");
    console.log("accordion active");
  });
});
