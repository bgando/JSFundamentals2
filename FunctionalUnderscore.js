//Functional Programming in JS
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
// problems into parts. These parts are then aggregated to
// compose larger parts. Think of OOP as breaking the problem
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


//This is an easy transition to the underscore method
// _.each, the syntax is a little different but it
//accomplishes the same goal

_.each([1,2,3], alert);

=============================================================
//Cool, remember filter? It looks through each value in a list,
//returning an array of all values that pass a predicate test.

_.filter(list, predicate);

//Declare an array variable with some numbers, even and odd, inside
//now declare a predicate function even, that will only evaluate true
//if the value passed in is even, then use _.filter with your
//creations

//Sweet right? Now, say we have an array of names and we only want to
//return the names that start with the letters A-M, try that with 
//_.filter()

=============================================================
//Alright! Now, how about map()? It produces a new array of values by
//passing each value in a list to a function and returns the result

_.map(list, transformingFunction)

//Let's use the Math.sqrt() method to get the square root of all numbers
//in an array that we pass in


//Say for, formatting's sake we need to transform an array of strings
//into uppercase. Get after it!

=============================================================
//Ok, onto reduce! It, well, reduces a list of values into a
//single value. It takes the list, a transforming Function,
//and a initialized value

_.reduce(list, transformingFunction, initial);

//Use reduce to take an array of numbers and calculate their sum

//Now use reduce to take an array of strings and join them to 
//create a sentence

=============================================================
//Now on to range. This function creates flexibly-numbered lists
//If you omit start it will be 0, if you omit step, it will be 1

_.range([start], stop, [step])

//Try it for yourself and see how easy it is to build a range between
//1 and 10. What about with negative numbers?

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
//longest string in an array

//Another challenge! Let's use underscore to change each letter
//in a string to the following letter in the alphabet!

//Let's use underscore to determine whether or not a number is
//a power of two!

//Use underscore to determine whether the mode === mean in an
//array of numbers

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













