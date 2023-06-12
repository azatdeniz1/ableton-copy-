const sticky = document.querySelector(".sticky-bar");
const header = document.querySelector(".header");
const show_more = document.querySelector(".show-more");
let lastScroll = 0;
const stickyCords = sticky.getBoundingClientRect();
const MContainer = document.querySelector(".MContainer");
const sections = document.querySelector(".sections");
const navbar = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll && !header.classList.contains("scroll-down")) {
    header.classList.remove("scroll-up");
    header.classList.add("scroll-down");
  } //else if (currentScroll <= 0) {
  //header.classList.remove("scroll-up");
  //header.classList.remove("scroll-down");
  //header.classList.add("trasition");
  //header.classList.add(".current");
  //}
  else if (
    currentScroll < lastScroll &&
    header.classList.contains("scroll-down")
  ) {
    header.classList.remove("scroll-down");
    header.classList.add("scroll-up");
    header.classList.add("trasition");
  } else if (
    currentScroll < lastScroll &&
    header.classList.contains("scroll-down")
  ) {
    header.classList.remove("scroll-down");
    header.classList.add("scroll-up");
    header.classList.add("trasition");
  } else if (
    currentScroll < lastScroll &&
    !MContainer.classList.contains("more") &&
    currentScroll > 0
  ) {
    header.classList.remove("scroll-down");
    header.classList.add("new-scroll-up");
    console.log("oluyo");
  } else if (window.pageYOffset < 1) {
    header.classList.remove("scroll-down");
    header.classList.remove("scroll-up");
    header.classList.remove("new-scroll-up");
    header.classList.add("trasition");
    console.log("oldu");
  }

  //else if (
  //  currentScroll <= 0 &&
  //  header.classList.contains("new-scroll-up") &&
  //	MContainer.classList.contains("more")
  //) {
  //   header.classList.add("scroll-down");
  //   header.classList.remove("new-scroll-up");
  // }
  lastScroll = currentScroll;
});

show_more.addEventListener("click", (e) => {
  console.log(e);
  console.log(e.target.classList.contains("list-item" || "show-more"));
  if (e.target.closest(".show-more")) {
    console.log("it works");
    navbar.classList.toggle("border");
    MContainer.classList.toggle("more");
    MContainer.classList.toggle("border");
    sections.classList.remove("section");
    sections.classList.toggle("header-margin");
  }
  //else if(e.target.classList.contains("current"&&"list-item") ){
  //	console.log("true")
  //	sections.classList.add("section")
  //	sections.classList.remove("header-margin")
  //	show_more.classList.remove(".current")
  //}
});
