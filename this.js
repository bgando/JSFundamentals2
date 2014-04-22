THE FOUR RULES OF 
***THIS***

WIFI: hackreactor
PW: awesome bullets

Coffee + Tea: in the kitchen









====================
console.log(this);














====================
var obj = {testing: '123'};
obj.fn = function(){ 
  console.log(this);
};

obj.fn();

Object {testing: "123", fn: function};







====================
Method Invocation

obj.fn = function(){ 
  console.log(this)
}

obj.fn()









====================
Rule #1: Method Invocation

The object to the left of the dot ***at 
call time***
of the function referencing this









====================
What is this?
Rule #1: Method Invocation
The object to the left of the dot at call time
of the function referencing this

var obj = {which: 'I am obj :D'};
obj.fn = function () {

 console.log(this.which);

};
console.log(obj.fn);

var x = {
  which: 'I am x',
  fn2: obj.fn
};

x.fn2();

====================
Rule #1: Method Invocation

The object to the left of the dot at call time
of the method referencing this
var obj = {};
obj.fn = function () {

 console.log(this);

};

var fn = obj.fn;

fn();

====================
Rule #2: Window
2a. Free Function Invocation
var obj = {};
obj.fn = function () {
  console.log(this);
};

setTimeout(obj.fn, 0);






====================
Rule #2: Window
2b. Global Scope

console.log(this);










====================
Rule #2: Window

fn = function () {
  console.log(this);
};

fn();







====================
var fn = function () {
  // console.log(this);
  var anotherFun = function(){
    console.log('helloooo', this);
  };

  this.anotherFun();
};

fn();
//setTimeout(fn, 1000)










====================
Rule #3: constructor invocation

var fn = function(name){
  console.log(this);
}

var newInstance = new fn();







====================
Rule #3: constructor invocation

var person = function(name){
  this.name = name;
  console.log(this)
}

var newInstance = new person('Joe');






====================
Rule #4: Using .call or .apply
(or bind)

var fn = function(param){
  console.log(this, ' huh? '
    , param);
}
var thingy = {name: "B", 
awesome: true};

fn.call(thingy, 
  'belly-button');

thingy.fn('belly-button');


==========================
1. Define an object,
cat, that has four
properties:
- name
- type
- owner
- a method, speak,
that uses 'this'
to introduce your
cat with its name,
type, and owner.
example:
"My name is Albrey,
I am a Calico. My
owner is
Javascript ;)"

2. Define an object,
cat2, that has three
properties:
- name
- type
- owner

Use the call method
to access the speak method
for cat2. 












====================
Rule #1: 
Rule #2:
Rule #3:
Rule #4:






