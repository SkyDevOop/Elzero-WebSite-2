const menuToggle = document.querySelector(".c-toggle");
const links = document.querySelector(".links");
const Alinks = document.querySelectorAll(".Alink");
// when Click In Menu bar icon
menuToggle.addEventListener("click", () => {
  links.classList.toggle("active");
});
// when Click In li > a
Alinks.forEach((el) => {
  el.addEventListener("click", (eo) => {
    // remove class active in all a
    Alinks.forEach((el) => {
      if (el.classList.contains("active")) {
        el.classList.remove("active");
      }
    });
    // Add classe Active In a when click
    eo.target.classList.add("active");
    // remove nav when click in a
    links.classList.remove("active");
  });
});

// When Scroll
window.addEventListener('scroll', () => {
  links.classList.remove("active");
})

// Code shuffle (ul Links)
const btnShuffle = document.querySelectorAll('.btn-shuffle')
btnShuffle.forEach(el => {
  el.addEventListener('click', (eo) => {
    eo.preventDefault()
    btnShuffle.forEach(el => {
      el.classList.remove('active')
    });
    eo.target.classList.add('active')
  })
});

// Not Finish Code