const orderButton = document.querySelector(".order-button");
const search = document.querySelector(".search");
const searchForm = search.querySelector(".search-form");
const dateIn = search.querySelector("[name=datein]");
const dateOut =  search.querySelector("[name=dateout]");
const adult =  search.querySelector("[name=adult]");
const children =  search.querySelector("[name=children]");

orderButton.addEventListener("click", function (evt) {
  evt.preventDefault();
    search.classList.toggle("search-hide");
});

searchForm.addEventListener("submit", function (evt) {
  if (!dateIn.value || !dateOut.value || !adult.value || !children.value) {
    evt.preventDefault();
  }
});
