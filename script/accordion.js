const accordion = document.querySelectorAll(".accordion");
// console.log(accordion);
accordion.forEach((knopka) => {
  knopka.addEventListener("click", () => {
    knopka.classList.toggle("action");
  });
});
