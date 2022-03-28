let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el")



function increment(){
    count += 1
    countEl.textContent = count
}

function save(){
    let countDash = count + " - "
    saveEl.textContent += countDash
    count = 0
    countEl.textContent = count
}