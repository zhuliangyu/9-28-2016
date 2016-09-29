/**
 * Created by macbook on 2016-09-28.
 */
var string="Hellooooo World";
var obj={};

arr=string.split("");
console.log(arr);
for (var i = 0; i < arr.length; i++) {
    var key = arr[i];
    // console.log(obj[key]);
    if(obj[key]){

        obj[key]++;

    }else{
        obj[key]=1;
    }



}

console.log(obj);
o