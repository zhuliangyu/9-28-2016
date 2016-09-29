/**
 * Created by macbook on 2016-09-28.
 */
// Assignment: variable scoping Next Module
//
// What would the following code print:
// (function() {
//     var a = b = 5;
// })();
//
// console.log(b);
// Explain.

var j=function() {
    c=6;
    var a = b = 5;
};


console.log(c);