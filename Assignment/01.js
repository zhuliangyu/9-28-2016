/**
 * Created by macbook on 2016-09-28.
 */
// Assignment: Reversing a string Next Module
//
// There is no method in Javascript to reverse a string. Write a function that takes in a string and returns another string with the characters in the reverse order. Is it possible to modify the string itself instead of returning a copy of the original string? Why or why not

var input="123456";
var reverse=function (input) {
    var new_array=[];
    for (var i = input.length - 1; i >= 0; i--) {
        var letter = input[i];

        new_array.push(letter);
    }
    return new_array;
};

console.log(reverse(input));
