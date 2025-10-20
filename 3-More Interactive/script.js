let countEl = document.getElementById("count-el");
// console.log(countEl);
let count = 0;

let saveEl = document.getElementById("save-el");
console.log(saveEl);

function increment() {
  count += 1;
  countEl.innerText = count;
}

// save feature
// let saveBtn = document.getElementById("save-btn");
// console.log(saveBtn);

function save() {
  let concatString = count + " - ";
  saveEl.innerText += concatString;
  console.log(count);
}
