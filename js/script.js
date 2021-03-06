const orderButtonElement = document.querySelector(".order-button");
const searchElement = document.querySelector(".search");
const searchFormElement = searchElement.querySelector(".search-form");
const dateInElement = searchElement.querySelector("[name=datein]");
const dateOutElement = searchElement.querySelector("[name=dateout]");
const adultElement = searchElement.querySelector("[name=adult]");
const childrenElement = searchElement.querySelector("[name=children]");

orderButtonElement.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchElement.classList.toggle("search-hide");
});

searchFormElement.addEventListener("submit", function (evt) {
  if (!dateInElement.value || !dateOutElement.value || !adultElement.value || !childrenElement.value) {
    evt.preventDefault();
  }
});
