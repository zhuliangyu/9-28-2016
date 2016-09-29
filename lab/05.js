/**
 * Created by macbook on 2016-09-28.
 */
/*
 Assignment: [lab] Card Shuffling Next Module

 Create a javascript object that stores deck of cards.

 - Add a print method on it that will print the cards in order.
 - Add a method shuffle that will shuffle the cards
 - Add a randomCard method that give your a random card from your collection
 */


//

var numberByOrder = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

var numbersRandom=['Jack','King','3','7',"4"];
var suit=["Clubs","Diamonds","Hearts","Spades"];

var printCards=function (number,suit) {
    var cardObj={};
    for (var i = 0; i < suit.length; i++) {
        var key = suit[i];
        cardObj[key]=number;
    }


    return cardObj;

}

var sortCards=function (random) {
    var new_arr=[];
    for (var i = 0; i < random.length; i++) {
        for (var j = 0; j < numberByOrder.length; j++) {
            if(numberByOrder[j]==random[i]){
                var index=numberByOrder.indexOf(random[i]);
                new_arr.push([random[i],index]);

            }

        }


    }

    //sort new_obj by value(index);
    new_arr.sort(function (a,b) {
        return a[1]-b[1];
    })

    //[ [ '3', 2 ], [ '7', 6 ], [ 'Jack', 10 ], [ 'King', 12 ] ]
    //push the first item of array into a new array called final_array
    //=>['3','7','Jack','King']

    var final_arr=[];
    for(var i=0;i<new_arr.length;i++){
        final_arr.push(new_arr[i][0]);
    }



    return final_arr;
}



var shuffleCards=function (array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

console.log(shuffleCards(numberByOrder));

var ran=shuffleCards(numberByOrder);

console.log(sortCards(ran));


// console.log(printCards(numberByOrder,suit));
