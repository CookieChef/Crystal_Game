$(document). ready(function () {
    var goal;
    var win;
    var lose;
    var currentVal;
    var red, blue, green, yellow;
    
    var goal = Math.floor(Math.random()*100)+19; {
        $("#goal").text("Your goal is: " + goal);
        console.log("your goal is: " + goal);
    }

    var red = Math.floor(Math.random()*15) + 1; {
        console.log("red value is: " + red);
    }
    var blue = Math.floor(Math.random()*15) + 1; {
        console.log("blue value is: " + blue);
    }
    var green = Math.floor(Math.random()*15) + 1; {
        console.log("green value is: " + green);
    }
    var yellow = Math.floor(Math.random()*10) + 1; {
        console.log("yellow value is: " + yellow);
    }

    $("#currentVal").text("Current crystals: " + currentVal);
    $("#wins").text("Wins: " + win);
    $("#losses").text("Losses: " + lose);

    
})

