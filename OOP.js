Why OOP?
===============================================
*Inheritance
*Encapsulation

Functional Instantiation
===============================================
var Car = function() {

};

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
var Car = function() {
  
};

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
var Car = function() {
  var results = {};

  return results;
  
};

Prototypical Recipe
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
var Car = function() {
  var results = {};

  return results;
  
};

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
