/**
 * Created by macbook on 2016-09-28.
 */
// Assignment: [lab] Largest numberByOrder in an array Next Module
//
// Write a function called largestNumber that takes from an array of numbers the largest numberByOrder.

var arr=[1,2,31,40,5665];

var largestNumber=function (arr) {
    var max=-Infinity;
    for(var index=0;index<arr.length;index++){
        if(arr[index]>max){
            max=arr[index];

        }
    }

    return max;
}

console.log(largestNumber(arr));
