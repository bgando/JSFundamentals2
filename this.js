THE FOUR RULES OF 
***THIS***

WIFI: hackreactor
PW: awesome bullets

Coffee + Tea: in the kitchen









====================
console.log(this);

var obj = {}












====================
obj.fn = function(){ 
  console.log(this)
}











====================
Method Invocation
obj.fn = function(){ 
  console.log(this)
}
obj.fn()









====================
Rule #1: Method Invocation

The object to the left of the dot at 
call time
of the function referencing this









====================
Rule #1: Method Invocation
The object to the left of the dot at call time
of the function referencing this

obj.fn = function () {

 console.log(this);

};
var x = {
  fn: obj.fn
};

obj.fn();
x.fn();

====================
Rule #1: Method Invocation

The object to the left of the dot at call time
of the function referencing this

obj.fn = function () {

 console.log(this);

};

var fn = obj.fn;

fn();

====================
Rule #2: Window
2a. Free Function Invocation

obj.fn = function () {
  console.log(this);
};

setTimeout(obj.fn, 0);






====================
Rule #2: Window
2a. Global

console.log(this);










====================
Rule #2: Window

fn = function () {
  console.log(this);
};

fn();







====================
fn = function () {
  console.log(this);
};

setTimeout(fn, 1000)










====================
Rule #3: constructor invocation

var fn = function(){
  console.log(this);
}

var newInstance = new fn();







====================
Rule #3: constructor invocation

var fn = function(name){
  this.name = name;
  console.log(this)
}

var newInstance = new fn('Joe');






====================
Rule #4: Using .call or .apply

var fn = function(){
  console.log(this);
}









====================
Rule #1: 
Rule #2:
Rule #3:
Rule #4:






