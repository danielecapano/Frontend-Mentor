const card = document.querySelector(".card");
const thanks = document.querySelector(".thanks");
const submit = document.querySelector(".submit");
const btns = document.querySelectorAll(".btn");
const rate = document.getElementById("rate");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    rate.innerHTML = btn.innerHTML;
  });
});

submit.addEventListener("click", () => {
  thanks.classList.remove("hidden");
  card.classList.add("hidden");
  setTimeout(() => {
    window.location.reload();
  }, 3000);
});

//
