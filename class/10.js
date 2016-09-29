/**
 * Created by macbook on 2016-09-28.
 */

function add10(num) {
    return num+10;
}
function call(fn, arg) {
    return fn(arg);
}
var result=call(add10,10);
console.log(result);