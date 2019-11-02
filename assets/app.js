$(document). ready(function() {
    var goal=0;
    var win =0;
    var lose=0;
    var currentVal=0;
    var red, blue, green, yellow;
    
       //display the score
       $("#currentVal").text("Current crystals: " + currentVal);
       $("#wins").text("Wins: " + win);
       $("#losses").text("Losses: " + lose);
       $("#goal").text("Your goal is: " + goal);
   

    //assign random goal value 
    
    
    var goal = Math.floor(Math.random()*100)+19; {
        $("#goal").text("Your goal is: " + goal);
        console.log("your goal is: " + goal);
    }


    //assign random value to each gem
   
    var red = Math.floor(Math.random()*10) + 1; {
        console.log("red value is: " + red);
    }
    var blue = Math.floor(Math.random()*10) + 1; {
        console.log("blue value is: " + blue);
    }
    var green = Math.floor(Math.random()*10) + 1; {
        console.log("green value is: " + green);
    }
    var yellow = Math.floor(Math.random()*10) + 1; {
        console.log("yellow value is: " + yellow);
    }



    //assign on click function to each gem and the sum of each to the current value
    $("#red").on("click", function() {
        currentVal+= red;
        $("#currentVal").text("Current crystals: " + currentVal);  
        console.log("current value: " + currentVal);
        
    if (currentVal === goal) {
        win++;
        $("#wins").text("Wins: " + win);
        win = parseInt(win);
        
    }if (currentVal > goal) {
        lose++;
        $("#losses").text("Losses: " + lose);
        lose = parseInt(lose);
        }
    })
    $("#green").on("click", function() {
        currentVal+= green;
        $("#currentVal").text("Current crystals: " + currentVal);  
        console.log("current value: " + currentVal);
        
    if (currentVal === goal) {
        win++;
        $("#wins").text("Wins: " + win);
        win = parseInt(win);
        
    }if (currentVal > goal) {
        lose++;
        $("#losses").text("Losses: " + lose);
        lose = parseInt(lose);
        }
    })
    $("#blue").on("click", function() {
        currentVal+= blue;
        $("#currentVal").text("Current crystals: " + currentVal);  
        console.log("current value: " + currentVal);
        
    if (currentVal === goal) {
        win++;
        $("#wins").text("Wins: " + win);
        win = parseInt(win);
        
    }if (currentVal > goal) {
        lose++;
        $("#losses").text("Losses: " + lose);
        lose = parseInt(lose);
        }
    })
    $("#yellow").on("click", function() {
        currentVal+= yellow;
        $("#currentVal").text("Current crystals: " + currentVal);  
        console.log("current value: " + currentVal);
        
    })



    if (currentVal == goal) {
        win++;
        $("#wins").text("Wins: " + win);
        win = parseInt(win);
        
    }if (currentVal > goal) {
        lose++;
        $("#losses").text("Losses: " + lose);
        lose = parseInt(lose);
        }

        
    
})


