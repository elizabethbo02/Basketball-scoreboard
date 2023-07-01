function plusoneHome(){
    var paragraph = document.getElementById("home");
    var currentValue = parseInt(paragraph.textContent);
    var newValue = currentValue + 1;
    paragraph.textContent = newValue;
}

function plustwoHome(){
    var paragraph = document.getElementById("home");
    var currentValue = parseInt(paragraph.textContent);
    var newValue = currentValue + 2;
    paragraph.textContent = newValue;
}

function plusthreeHome(){
    var paragraph = document.getElementById("home");
    var currentValue = parseInt(paragraph.textContent);
    var newValue = currentValue + 3;
    paragraph.textContent = newValue;
}

function plusoneGuest(){
    var paragraph = document.getElementById("guest");
    var currentValue = parseInt(paragraph.textContent);
    var newValue = currentValue + 1;
    paragraph.textContent = newValue;
}

function plustwoGuest(){
    var paragraph = document.getElementById("guest");
    var currentValue = parseInt(paragraph.textContent);
    var newValue = currentValue + 2;
    paragraph.textContent = newValue;
}

function plusthreeGuest(){
    var paragraph = document.getElementById("guest");
    var currentValue = parseInt(paragraph.textContent);
    var newValue = currentValue + 3;
    paragraph.textContent = newValue;
}

function newgame(){
    var paragraph = document.getElementById("home");
    paragraph.textContent = 0;
    var paragraph = document.getElementById("guest");
    paragraph.textContent = 0;
}