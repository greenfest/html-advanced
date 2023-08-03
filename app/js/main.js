$(function () {
  const headerBurger = document.querySelector(".header__burger");
  const headerMenu = document.querySelector(".header__menu");

  headerBurger.addEventListener("click", (e) => {
    e.preventDefault();
    if (headerMenu.style.visibility === "hidden") {
      headerMenu.style.visibility = "visible";
      headerMenu.style.opacity = "1";
    } else {
      headerMenu.style.visibility = "hidden";
      headerMenu.style.opacity = "0";
    }
  });

  $(".product__slider").slick({
    infinite: false,
    speed: 500,
    fade: true,
    cssEase: "linear",
    arrows: true,
    prevArrow:
      '<div class=\'product__icon product__prewArr\'><svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">\n' +
      '<path d="M21.6998 7.7499L13.9498 15.4999L21.6998 23.2499L20.1498 26.3499L9.2998 15.4999L20.1498 4.6499L21.6998 7.7499Z" fill="black"/>\n' +
      "</svg></div>",
    nextArrow:
      '<div class=\'product__icon product__nextArr\'><svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">\n' +
      '  <path d="M9.2998 23.2499L17.0498 15.4999L9.2998 7.7499L10.8498 4.6499L21.6998 15.4999L10.8498 26.3499L9.2998 23.2499Z" fill="black"/>\n' +
      "</svg></div>",
    centerMode: true,
  });
});
