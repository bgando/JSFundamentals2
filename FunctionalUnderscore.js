//Functional Programming in JS
//Author: William Johnson https://github.com/wcjohnson11
//Editor: Monthy Python https://github.com/monthypython
=======================================
//We're going to use some native methods and
//the underscore library to do some functional 
//programming exercises!
//Underscore is a JS library full of functional
//programming helpers that help you become productive
//fast!! It also helps patch over many cross-browser
//compatability issues!

//We have made and used some of these helpers before,
//such as filter, map, range, reduce, and each. If you haven't
//written these before no worries, we are using underscore
//in order to get a more practical understanding of 
//functional programming in javascript. The cool thing is
//that underscore is a professional JS library so once you 
//have mastered the below, you'll be ready to start
//including higher order functions in your code!!!

*//A QUICK WORD ON THE DIFFERENCE BETWEEN OOP AND
//FUNCTIONAL PROGRAMMING

//Different programming styles' primary goals are to break
//problems into parts. These parts are then aggregated to
//compose larger parts. Think of OOP as breaking the problem
//into sets of nouns, or objects. We can then think of 
//functional programming as breaking the same problem into
//verbs, or functions. Functional programming works
//by linking several functions so that a value is 
//gradually transformed.
//JS supports both styles and both should be used, as you
//practice implementing them, you will decide which method
//you prefer for certain situations. For now, let's focus
//on getting some hands-on experience.

=======================================
//First things first, let's build a traditional for
//loop that will call a function, like alert on
//each item in an array.


//Old news right? Now let's take a look at a native
//method that was added in ECMA Script 5, forEach()

forEach()
[1,4,5].forEach(alert);

//it takes a function (alert), passes it an array,
//and calls the function on each value in the array
//one after the other. forEach is a method(function)
//and we've passed it an array and a function.
//So this is Functional Programming, not so scary right? 

//Let's list out all even numbers from 1 to 1,000, inclusive.

//This is an easy transition to the underscore method
// _.each, the syntax is a little different but it
//accomplishes the same goal

_.each([1,2,3], alert);

//Use _.each to rewrite the above exercise: list out all even 
//numbers from 1 to 1,000, inclusive. 

=============================================================
//Cool, remember filter? It looks through each value in a list,
//returning an array of all values that pass a predicate test.

_.filter(list, predicate);

//Declare an array variable with some numbers, even and odd, inside
//now declare a predicate function "even", that will only evaluate true
//if the value passed in is even, then use _.filter with your
//creations.

//Sweet right? Now, say we have an array of names and we only want to
//return the names that start with the letters A-M, try that with 
//_.filter()

//Now use _.each to create an array from 1, 1000 (inclusive) and
//then use _.filter to filter out all prime numbers from the
//array.

=============================================================
//Alright! Now, how about map()? It produces a new array of values by
//passing each value in a list to a function and returns the result

_.map(list, transformingFunction)

//Let's use the Math.sqrt() method to get the square root of all numbers
//in an array that we pass in.


//Say for, formatting's sake we need to transform an array of strings
//into uppercase. Get after it!

=============================================================
//Ok, onto reduce! It, well, reduces a list of values into a
//single value. It takes the list, a transforming Function,
//and a initialized value.

_.reduce(list, transformingFunction, initial);

//Use reduce to take an array of numbers and calculate their sum

//Now use reduce to take an array of strings and join them to 
//create a sentence

//Exercise: Write a function countZeroes, which takes an array 
//of numbers as its argument and returns the amount of zeroes 
//that occur in it. Use reduce.

//Then, write the higher-order function count, which takes an 
//array and a test function as arguments, and returns the amount 
//of elements in the array for which the test function returned true. 
//Re-implement countZeroes using this function.

=============================================================
//Now on to range. This function creates flexibly-numbered lists
//If you omit start it will be 0, if you omit step, it will be 1

_.range([start], stop, [step])

//Try it for yourself and see how easy it is to build a range between
//1 and 10. Then from 1000 to 1. What about with negative numbers?

=============================================================
//It's pretty simple but let's see how it can work with other
//underscore functions to do some cool stuff

//Build a function called matrix that builds a 10x10 multiplication
//table using range and map. This will require building an array of
//arrays, this is how you will use the multiplication table

matrix[5][7]; => 35

//Create a factorial function using reduce and range to make 
//a factorial function

//MORE CHALLENGES!
=============================================================
//And how about we use our underscore functions to return the
//longest string in an array.

//Another challenge! Let's use underscore to change each letter
//in a string to the following letter in the alphabet!

//Let's use underscore to determine whether or not a number is
//a power of two!

//Use underscore to determine whether the mode === mean in an
//array of numbers.

//Now let's look at using underscore with objects
==============================================================
//Since all JS data types are objects, let's do some cool stuff
//with objects!

//Where is an underscore function that can look into a list
//and returns only the objects contain specified key value pairs

_.where(list, properties);

//Declare an object listOfPeople that contains several inner objects
//key, value pairs for name, hobby and favorite color then query the
//listOfPeople to return only the inner objects with the specific property

//Example
_.where(listOfPeople, {hobby: "Coding", favColor: "purple"});
==>[{name: "Will", hobby: "Coding", favColor: "purple"},
	{name: "Bianca", hobby: "Coding", favColor: "purple"}]



//Exercises from: Spencer Handley https://github.com/spencer48
//Let's use underscore to return just the keys of an object. create an
// object called animals with the key being the animal's name and the values 
// being the color of the animal. Then use _.keys, which takes an object and 
// returns an array of it's keys.

// Now call _.values on that same object. Cool huh? There's more where that came from.
// Call _.invert on the same object and chain _.keys to it. What did you get?


//another cool Object method in underscore is _.pick. it's sort of similar to filter but
// allows you to select specifically what keys you want returned in an array. 
// Example:
_.pick({name: 'moe', age: 50, userid: 'moe1'}, 'name', 'age');
=> {name: 'moe', age: 50}

// The opposite of that is _.omit try it on your animals object.

//  What if you want an array of array's that contain your key value pairs. 
// Welp, underscore delivers. test out _.pairs on your animals object.
// ... thanks underscore, you're pretty cool

// Along with all this goodness, underscore also has a wide variety of was to 
// check if something has a certain quality. for example _.isEmpty(object), 
// _.isArray(object), _.isObject(value), _.isString(object), _.isUndefined(value), etc... 
// create a function that take a param called thingy and checks if thingy is an object. 
//If it is, return it's key value pairs with _.pairs  

// here's somethign random, try using _.random, which take a min and a max value and 
// outputs a random number between them. make another function called beer which creates a random 
// number between 1 and 100, if the number is greater than 80 log "I don't dance", 
// if it's greater than 50 but less than 79 log "hey I kinda like this song", 
// if it's less that 49 and greater than 20 log "Uh huh, I can get down with this",
// if it's less than 19, log "Lookout dancefloor, here I come!"... HINT: you could use a switch










