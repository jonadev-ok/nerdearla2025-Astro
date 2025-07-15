const countSpan = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

let count = 0;

incrementBtn.addEventListener("click", () => {
  count++;
  countSpan.textContent = count;
});

decrementBtn.addEventListener("click", () => {
  count--;
  countSpan.textContent = count;
});
