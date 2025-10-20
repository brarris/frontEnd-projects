let countEl = document.getElementById("count-el");
console.log(countEl);

count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}

// save-btn
let saveBtn = document.getElementById("save-btn");
console.log(saveBtn);

function save() {
  console.log(count);
}
