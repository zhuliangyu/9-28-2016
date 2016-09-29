
var m=function () {
    console.log("Hi");

    };

var obj={
    morning:m
};

var name="morning";
obj.morning();
obj["morning"]();
obj[name]();
obj.name();