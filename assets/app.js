$(document).ready(function () {
    var goal = 0;
    var currentVal = 0;
    var red, blue, green, yellow;

    //display the score
    $("#currentVal").text("Current crystals: " + currentVal);
    $("#goal").text("Your goal is: " + goal);

    //assign random goal value

    var goal = Math.floor(Math.random() * 100) + 19; {
        $("#goal").text("Your goal is: " + goal);
        console.log("your goal is: " + goal);
    }

    //assign random value to each gem

    var red = Math.floor(Math.random() * 10) + 1; {
        console.log("red value is: " + red);
    }
    var blue = Math.floor(Math.random() * 10) + 1; {
        console.log("blue value is: " + blue);
    }
    var green = Math.floor(Math.random() * 10) + 1; {
        console.log("green value is: " + green);
    }
    var yellow = Math.floor(Math.random() * 10) + 1; {
        console.log("yellow value is: " + yellow);
    }

    //assign on click function to each gem and the sum of each to the current value
    $("#red").on("click", function () {
        currentVal += red;
        $("#currentVal").text("Current crystals: " + currentVal);
        console.log("current value: " + currentVal);

        if (currentVal === goal) {
            alert("You Win!!");
            window.location = "index.html";

        } if (currentVal > goal) {
            alert("You Lose!");
            window.location = "index.html";
        }
    })
    $("#green").on("click", function () {
        currentVal += green;
        $("#currentVal").text("Current crystals: " + currentVal);
        console.log("current value: " + currentVal);

        if (currentVal === goal) {
            alert("You Win!!");
            window.location = "index.html";

        } if (currentVal > goal) {
            alert("You Lose!");
            window.location = "index.html";
        }
    })
    $("#blue").on("click", function () {
        currentVal += blue;
        $("#currentVal").text("Current crystals: " + currentVal);
        console.log("current value: " + currentVal);

        if (currentVal === goal) {
            alert("You Win!!");
            window.location = "index.html";

        } if (currentVal > goal) {
            alert("You Lose!");
            window.location = "index.html";
        }
    })
    $("#yellow").on("click", function () {
        currentVal += yellow;
        $("#currentVal").text("Current crystals: " + currentVal);
        console.log("current value: " + currentVal);
        if (currentVal == goal) {
            alert("You Win!!");
            window.location = "index.html";

        } if (currentVal > goal) {
            alert("You Lose!");
            window.location = "index.html";
        }

    })
})


