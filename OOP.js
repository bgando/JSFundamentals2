Why OOP?
===============================================
*Inheritance
*Encapsulation
*Reusability

Class: 
Book
instance: 
var book1= {
  tite : 'Harry Potter',
  pages: 300,
  edition: '1st'
} 

instance: Is Your Brain on Music? 

Functional Instantiation
===============================================
var Car = function(color, speed) {
    var result = {};
    result.color = color;
    result.speed = speed;
    result.location = 0;
    result.drive = function() {
      this.location += speed;
    }
    return result;
};

var redCar = Car('red', 100);
var grayCar = Car('gray', 50);

redCar.drive();
redCar.location;

Functional Instantiation Recipe
===============================================
Step 1: create a constructor function
--- inside the constructor function ---
Step 2: create an object literal
Step 3: assign properties, methods and values to obj
Step 4: return object
--- instantiate outside the constructor function ---
Step 5: call constructor function and assign to 
instance variable
Step 6: repeat #5

Functional w Shared Methods Instantiation
===============================================
var Car = function(color, speed) {
  var result = {};
  result.color = color;
  result.speed = speed;
  result.location = 0;
  _.extend(result, carMethods)

  return result;
  
};

var carMethods = {};

carMethods.drive = function(){
  return this.location += this.speed;
}

Functional w Shared Methods Recipe
===============================================
Step 1: create a constructor function
--- inside the constructor function ---
Step 2: create an object literal
Step 3: assign properties and values to obj
Step 4: extend object with classMethods (see step #6)
Step 5: return object
--- outside the constructor function ---
Step 6: define classMethods
--- instantiate ---
Step 7: call constructor function and assign to instance variable
Step 8: repeat 

Prototypical Instantiation
===============================================
var Car = function(color, speed) {
  var results = Object.create(Car.prototype);
  results.color = color;
  results.speed = speed;
  results.location = 0;
  return results;
  
};

Car.prototype.drive = function(){
  console.log('whatever');
};

var corvette = Car('purple', 64);
corvette.drive();

Prototypal Recipe
===============================================
Step 1: create a constructor function
--- inside the constructor function ---
Step 2: create an object literal
Step 3: assign properties and values to obj
Step 4: return object
--- outside the constructor function ---
Step 5: define methods on class prototype
--- instantiate ---
Step 6: call constructor function and assign to instance variable
Step 7: repeat 


Pseudoclassical Instantiation
===============================================
var Car = function(color, speed) { 
  //this = {};
  this.color = color;
  this.speed = speed;
  this.location = 0;
  //return this;
};

Car.prototype.drive = function(){
  console.log('whatever');
};

var corvette = new Car('lime green', 75);
corvette.drive();

Pseudoclassical Recipe
===============================================
Step 1: create a constructor function
--- inside the constructor function ---
Step 2: assign properties and values to this
--- outside the constructor function ---
Step 3: define methods on class prototype
--- instantiate ---
Step 4: call constructor function with keyword new and assign to instance variable
Step 5: repeat 
