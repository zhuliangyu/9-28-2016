/**
 * Created by macbook on 2016-09-28.
 */
// Assignment: [lab] Loop through a multi-dimensional array Next Module
//
// Write a function called printMulti that takes an array of arrays, such as:
//
// var myArray = [[2,3,4], ["Hello CodeCore", 1, true]];
// and logs every element to the console as follows:
//
// > printMulti(myArray)
// Hello CodeCore
// true

var myArray = [[2,3,4], ["Hello CodeCore", 1, true]];
var printMulti=function (array) {
    var new_array=[];
    for (var i = 0; i < array.length; i++) {
        var obj = array[i];

        if(Array.isArray(obj)){

            for (var j = 0; j < obj.length; j++) {
                new_array.push(obj[j]);

            }
        }
    }





    return new_array ;
}

console.log(printMulti(myArray));