let countEl = document.getElementById("count-el");
console.log(countEl);

count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}
