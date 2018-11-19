function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
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

            $("#form1").empty();
            document.getElementById("time").innerText = "TIMES UP!";
            $("#timer").hide();
        }
    }, 1000);
}

jQuery(function ($) {
    var oneMinute = 60,
        display = $('#time');
    startTimer(oneMinute, display);
    
});

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

    $("#form1").empty();
    document.getElementById("time").innerText = "TIMES UP!";
    $("#timer").hide();    

    return false;
}



