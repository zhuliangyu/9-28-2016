/**
 * Created by macbook on 2016-09-28.
 */
// Assignment: Substrings Next Module
//
// Write a JavaScript program which returns a subset of a string.
//  Sample Data : dog
// Expected Output : ["d", "do", "dog", "o", "og", "g"]

var string = "dog";
var len = string.length;
// var end = len - 1;
var begin = 0;

// for (begin; begin < len; begin++) {
//     for(var end=0;end<=len-begin;end++){
//         console.log(string.substring(begin,end));
//
//     }
// }

for(var i=0;i<len;i++){
    for(var j=i+1;j<=len;j++){
        console.log(string.substring(i,j));
    }
}

