let username;

//username= window.prompt("Enter your username:");

//console.log("Username entered:", username);



document.getElementById("Mysubmit").onclick = function () {
    let username = document.getElementById("MyUsername").value;
    console.log(username);
    document.getElementById("MyH1").textContent = `Hello ${username}`;
};
