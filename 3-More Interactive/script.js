let countEl = document.getElementById("count-el");
// console.log(countEl);
let count = 0;

let saveEl = document.getElementById("save-el");
console.log(saveEl);

function increment() {
  count += 1;
  countEl.textContent = count; // innerText only human readable, not for hidden element, so in these case i'm using textContext
}

// save feature
// let saveBtn = document.getElementById("save-btn");
// console.log(saveBtn);

function save() {
  let concatString = count + " - ";
  saveEl.textContent += concatString; // innerText only human readable, not for hidden element, so in these case i'm using textContext
  console.log(count);
}
