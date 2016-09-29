/**
 * Created by macbook on 2016-09-28.
 */

var sheep={name:"zhu"};
var clone=function (obj) {
    var clone_obj={};
    for(var prop in obj ){
        console.log(prop);
        clone_obj[prop]=obj[prop];

    }
    return clone_obj;
}

var sheep2=clone(sheep)
console.log(sheep2);