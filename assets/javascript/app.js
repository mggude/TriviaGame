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
    $("#start").click(function () {
        location.reload();
    });
}

function checkScore() {
    middle = parseInt(document.querySelector('input[name = "middle"]:checked').value);
    chamber = parseInt(document.querySelector('input[name = "chamber"]:checked').value);
    elder = parseInt(document.querySelector('input[name = "elder"]:checked').value);
    hallow = parseInt(document.querySelector('input[name = "hallow"]:checked').value);
    spell = parseInt(document.querySelector('input[name = "spell"]:checked').value);

    result = middle + chamber + elder + hallow + spell;

    if (result == 0) { result2 = "You're a muggle!<br /><img src='https://media0.giphy.com/media/7RGg0Tg5k0u1G/giphy.gif?cid=3640f6095bf387e84c3863586b124cda' width='100%' />" };
    if (result == 20) { result2 = "You're a squib!<br /><img src='https://media0.giphy.com/media/Vq2FdyzwkKHEk/giphy.gif?cid=3640f6095bf390bb774b58546757d27f' width='100%' />" };
    if (result == 40) { result2 = "You need to go back to Hogwarts!<br /><img src='https://media0.giphy.com/media/7RGg0Tg5k0u1G/giphy.gif?cid=3640f6095bf387e84c3863586b124cda' width='100%' />" };
    if (result == 60) { result2 = "You're a Wizard!<br /><img src='https://media1.giphy.com/media/VwUquCGtIatGg/giphy.gif?cid=3640f6095bf38a93517039754da20db0' width='100%' />" };
    if (result == 80) { result2 = "You're nominated for Minister of Magic!<br /><img src='https://media3.giphy.com/media/40KXzKllSl6ve/giphy.gif?cid=3640f6095bf39219792f37424dd902eb' width='100%' />" };
    if (result == 100) { result2 = "100 points to Gryffindor!<br /><img src='https://media1.giphy.com/media/hsBZfDG7wiWHu/giphy.gif?cid=3640f6095bf387c43569444c55b1be07' width='100%' />" };
}

function decrement() {
    number--;
    $("#start").html("Time Remaining: " + number);
    if (number === 0) {
        gameOver();
        checkScore();
        stop();
    }
}

function stop() {
    clearInterval(intervalId);
    $("#form1").hide();
    $("#grade").html("YOUR SCORE: " + result);
    $("#grade2").html(result2);
}

document.getElementById("form1").onsubmit = function () {
    checkScore();
    $("#grade").html("YOUR SCORE: " + result);
    $("#grade2").html(result2);
    gameOver();

    return false;
}