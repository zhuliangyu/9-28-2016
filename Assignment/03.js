/**
 * Created by macbook on 2016-09-28.
 */
// Assignment: Hoisting Next Module
//
// What would the following print to the console:
// function test() {
//     console.log(a);
//     console.log(foo());
//
//     var a = 1;
//     function foo() {
//         return 2;
//     }
// }
//
// test();
// Explain the reasoning. Hint: Research a bit about hoisting in Javascript before giving an answer or trying to run the code.

function test() {
    console.log(a);
    console.log(foo());
    var a = 1;

    function foo() {
        return 2;
    }
}

test();