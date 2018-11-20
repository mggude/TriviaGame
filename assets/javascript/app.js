var number = 50;
var intervalId;

$(document).ready(function () {
    $("#form1").hide();
});

$("#start").on("click", run);

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    $("#form1").show();
}

function gameOver() {
    $("#form1").empty();
    clearInterval(intervalId);
    $("#start").empty();
    $("#start").html("TRY AGAIN!");
    $("#start").click(function() {
        location.reload();
    }); 
}

function decrement() {
    number--;
    $("#start").html("Time Remaining: " + number);
    if (number === 0) {
        gameOver();
        middle = parseInt(document.querySelector('input[name = "middle"]:checked').value);
        chamber = parseInt(document.querySelector('input[name = "chamber"]:checked').value);
        elder = parseInt(document.querySelector('input[name = "elder"]:checked').value);
        hallow = parseInt(document.querySelector('input[name = "hallow"]:checked').value);
        spell = parseInt(document.querySelector('input[name = "spell"]:checked').value);

        result = middle + chamber + elder + hallow + spell;

        if (result == 0) { result2 = "You're a muggle!" };
        if (result == 20) { result2 = "You're a squib!" };
        if (result == 40) { result2 = "You need to go back to Hogwarts!" };
        if (result == 60) { result2 = "You're a Wizard!" };
        if (result == 80) { result2 = "100 points to Gryffindor!" };
        if (result == 100) { result2 = "You're nominated for Minister of Magic!" };

        stop();
    }
}

function stop() {
    clearInterval(intervalId);
    $("#form1").hide();
    document.getElementById("grade").innerHTML = "YOUR SCORE: " + result;
    document.getElementById("grade2").innerHTML = result2;
}

document.getElementById("form1").onsubmit = function () {
    middle = parseInt(document.querySelector('input[name = "middle"]:checked').value);
    chamber = parseInt(document.querySelector('input[name = "chamber"]:checked').value);
    elder = parseInt(document.querySelector('input[name = "elder"]:checked').value);
    hallow = parseInt(document.querySelector('input[name = "hallow"]:checked').value);
    spell = parseInt(document.querySelector('input[name = "spell"]:checked').value);

    result = middle + chamber + elder + hallow + spell;

    document.getElementById("grade").innerHTML = "YOUR SCORE: " + result;

    if (result == 0) { result2 = "You're a muggle!" };
    if (result == 20) { result2 = "You're a squib!" };
    if (result == 40) { result2 = "You need to go back to Hogwarts!" };
    if (result == 60) { result2 = "You're a Wizard!" };
    if (result == 80) { result2 = "100 points to Gryffindor!" };
    if (result == 100) { result2 = "You're nominated for Minister of Magic!" };
    
    document.getElementById("grade2").innerHTML = result2;

    gameOver();
     
    return false;
}



