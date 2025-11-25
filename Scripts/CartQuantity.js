const Decrease1Button = document.getElementById("decrease1");
const Decrease2Button = document.getElementById("decrease2");
const ResetButton = document.getElementById("resetCart");
const Increase1Button = document.getElementById("add1");
const Increase2Button = document.getElementById("add2");
const Label = document.getElementById("MyLabel");

let count = 0;



Increase1Button.onclick = function() {
    count++;
    Label.textContent = count;
}
Increase2Button.onclick = function() {
    count += 2;
    Label.textContent = count;
}

Decrease1Button.onclick = function() {
    count--;
    Label.textContent = count;
}

Decrease2Button.onclick = function() {
    count -= 2;
    Label.textContent = count;
}

ResetButton.onclick = function() {
    count = 0;
    Label.textContent = count;
}




document.getElementById("showQuantity").onclick = function () {
    let count = document.getElementById("MyLabel").textContent;
    document.getElementById("MyH2").textContent = `Cart Quantity: ${count}`;
    
};
document.getElementById("addToCart").onclick = function () {
    let count = document.getElementById("MyLabel").textContent;
    console.log(`Added ${count} items to cart.`);

}

document.getElementById("resetCart").onclick = function () {
    document.getElementById("MyH2").textContent = `Cart Quantity: 0`;
    
    console.log(`Cart has been reset.`);   
}