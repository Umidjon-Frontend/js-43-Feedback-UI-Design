const itemsContainer = document.querySelector(".container");
const items = document.querySelectorAll(".item");
const texts = document.querySelectorAll(".item p");
const btn = document.querySelector(".btn");

let text = "Satisfied";

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    removeActiveClass();

    item.classList.add("active");

    text = texts[index].innerHTML;
  });
});

function removeActiveClass() {
  items.forEach((item) => {
    item.classList.remove("active");
  });
}

btn.addEventListener("click", () => {
  itemsContainer.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${text}</strong>
    <p>We'll use your feedback to improve our customer support</p>
  `;
});
