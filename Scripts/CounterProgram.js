const DecreaseButton = document.getElementById("Decreased");
const ResetButton = document.getElementById("Reset");
const IncreaseButton = document.getElementById("Increased");
const Label = document.getElementById("MyLabel");
let count = 0;

IncreaseButton.onclick = function() {
    count++;
    Label.textContent = count;
}

DecreaseButton.onclick = function() {
    count--;
    Label.textContent = count;
}

ResetButton.onclick = function() {
    count = 0;
    Label.textContent = count;
}