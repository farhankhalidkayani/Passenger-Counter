let count = 0;

const incrementBtn = document.querySelector("#increment-btn");
const saveBtn = document.querySelector("#save-btn");
const p = document.querySelector("p");

const peopleCount = document.querySelector("#count");
incrementBtn.addEventListener("click", () => {
  count++;
  peopleCount.innerText = count;
});
saveBtn.addEventListener("click", () => {
  p.innerText += count + "-";
  count = 0;
  peopleCount.innerText = count;
});
