/**
 * Created by macbook on 2016-09-28.
 */
// Assignment: [lab] Merging arrays Next Module
// Write a JavaScript function to merge two arrays and removes all duplicates elements. For example:
// var array1 = [1, 2, 3];
// var array2 = [3,4,5];
// console.log(merge(array1, array2));
// // [1,2,3,4,5]

var array1 = [1, 2, 3];
var array2 = [3,4,5];

var merge=function (array1, array2) {
    var obj={};
    var new_array=[];
    for (var i = 0; i < array1.length; i++) {
        var key = array1[i];
        obj[key]=key;

    }
    for (var i = 0; i < array2.length; i++) {
        var key = array2[i];
        obj[key]=key;

    }


    for(var prop in obj){
        new_array.push(prop);
    }


    return new_array;
    
}

console.log(merge(array1, array2));