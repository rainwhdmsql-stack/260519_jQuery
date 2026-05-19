$(function () {
  //   slideDown
  $(".slideDown").click(function () {
    $(".box").slideDown(800);
  });
  //slideUp
  $(".slideUp").click(function () {
    $(".box").slideUp(1000);
  });
  //  slideToggle
  $(".slideToggle").click(function () {
    $(".box").slideToggle(800);
  });
  //  fadeIn
  $(".fadeIn").click(function () {
    $(".box").fadeIn(1000);
  });
  //  fadeOut
  $(".fadeOut").click(function () {
    $(".box").fadeOut(1000);
  });
  //  fadeToggle
  $(".fadeToggle").click(function () {
    $(".box").fadeOut(1000);
  });
  //  hide
  $(".hide").click(function () {
    $(".box").hide(800);
  });
  //  show
  $(".show").click(function () {
    $(".box").show(800);
  });
  //  toggle
  $(".toggle").click(function () {
    $(".box").toggle(1000);
  });
});
