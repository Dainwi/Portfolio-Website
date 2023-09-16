// Navbar background on scroll
function onScroll() {
  const nav = document.getElementById('nav');
  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
}
window.addEventListener("scroll", onScroll);



// Typing Effect
var typingEffect = new Typed('.multiText', {
  strings: ["CodeAssits", "Web Developer", "Freelancer", "Youtuber"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDealy: 1500
});

// Skills tab change
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove('active-link');
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove('active-tab');
  }
  event.currentTarget.classList.add('active-link');
  document.getElementById(tabname).classList.add('active-tab');
}
