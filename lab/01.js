// /**
//  * Created by macbook on 2016-09-28.
//  */
// Assignment: [demo] most recurring letter Next Module
//
// Write a function that returns the most recurring letter in a string using javascript
// Example
// mostRecurring('Your name is John Lennon') //returns 'n'
// mostRecurring('abccdefg') //returns 'c'

var string = "Yyour name is John Lennon";
var mostRecurring = function () {

    var letterArray = string.split("");

    var obj = {};
    for (var i = 0; i < letterArray.length; i++) {
        var key = letterArray[i].toLowerCase();
        if (key == " ") {
            continue;

        }
        else if (obj[key]) {
            obj[key]++;
        } else {
            obj[key] = 1;
        }

    }

    var max=-Infinity;
    for(var prop in obj){
        if (obj[prop]>max){
            max=prop;
        }


    }


    return max;
};

//test code
console.log(mostRecurring());