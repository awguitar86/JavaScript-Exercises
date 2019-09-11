//ARRAYS

//Odds and Evens to an Array
/*Write a function called "oddsAndEvens" that loops through a parameter "nums" (an array).
For each number in the given array, if it is even, it is added to the evens array, if the
number is odd, it is added to the odds array.*/
var evens = []; // Do not edit this line.
var odds = []; // Do not edit this line.

function oddsAndEvens(){
  //...code here
}


//Even Finder of an Array
/*Create a function called evenFinder that takes an array as an argument and returns
an array with all of the odd numbers removed.*/
function evenFinder(){
  //...code here
}


//Reverse Loop Array
/*Create a function called 'reversedLooper' that will be passed one parameter, which will be an array.
The function will loop through the array backwards and do the following:

	•	Subtract 2 from the last element
	•	Subtract 1 from the second to last element
	•	Subtract 0 from to the third to last element
	•	Add one to the fourth to last element
	•	Add 2 to the fifth to last.
	•	Continue increasing the amount added by 1, until it reaches the front of the array.

Return the modified array when you are done*/
function reversedLooper(){
  //...code here
}


//Find Element in Array
/*Write a function called 'findInArray' that takes in two parameters.
The first parameter represents the array to be searched and the second parameter represents the value to be searched for.
Return true if the value exists in the array. If it doesn't exist return false.*/
function findInArray(){
  //...code here
}


//Return Longer Array of Two Arrays
/*You are provided some code that adds a set of random numbers to both arr1 and arr2.
Write a function called 'longer' that is given arr1 and arr2 as its only arguments and returns the array that is longer.*/
var arr1 = [];
var arr2 = [];

function longer(){
  //...code here
}


//Remove and Add Item to Array
/*Write a function called removeItem with two parameters.
The first parameter is an array called myGroceryList, and the second is an item to remove from myGroceryList.
If the second argument (the item to remove) matches an item in myGroceryList, remove that item from your grocery list
Return the new, updated grocery list.

Once you do that, write another function called addItem with two parameters.
The first is myGroceryList and the second is an item to add to your grocery list.
If the item is already in the grocery list, do not add it a second time.
If it's not in the list, then add it to the end of the array.
Return the new list.*/
function removeItem(){
  //...code here
}



//Arrays: Even Finder by removing odds in array
/*Write a function named evenFinder that is given nums as it's only argument and removes
all values that aren't even from the given array.*/
function evenFinder(){
  //...code here
}



//Array: Using array.map to change index property
/*This is another way to find the index of a property in an array of objects.
The array parameter is an array of objects. Using the array parameter and the
index variable, update the object email address (.email or ["email"]) to be the newEmail parameter.*/
function changeEmail() {
    //...code here
}



//ARRAY: Fill empty array with strings
/*Instructions
For loops are especially useful when combined with arrays.
Create an empty array called myArray
Then create a function called arrayFiller that takes one parameter (the parameter will be a number).
hen fill myArray with the string "item" the number of times indicated by the parameter.
Return the filled array.
For example if I were to call arrayFiller(2) I would expect the return value to be ["item","item"] . */
function arrayFiller () {
  //...code here
}



//ARRAY: Create Array and Fill with Numbers
/*Instructions
Write a function called 'maker' that creates an array and fills that array with numbers 1 to 25, then returns the array.
*/
function maker() {
  //...code here
}



//ARRAY: Increment numbers in array by 5
/*Instructions
Create a function called "looper" that when passed an array of numbers will increment each value in the array by 5
and then return the updated array.*/
function looper() {
  //...code here
}



/* backWards Array */
//Below we have a function that will loop over an array in reverse.
//What you need to do is add the index to the newArray on every iteration
function backWards() {
  //...code here
}



/* findInArray */
//Below we have a  function called 'findInArray' that takes in two parameters, the first representing the
//array to be searched and the second representing the value to be searched for. Return true if the array has the value
function findInArray() {
  //...code here
}



//Add Ten to given numbers in an Array
/*Write a function called addTen that is given 'numbers' as it's only argument and returns a
new array after adding ten to each item in numbers.
*Verify your answer is correct. --> [15, 19, 26, 29, 35, 44, 58]*/
function addTen(){
  //...code here
}


/* Parse string to integer and addTen */
//This problem is the same as the previous problem, the only difference is that we have both strings and integers in
//our numbers array. You will need to parse the strings into integers before you add ten.
function againAddTen(arr) {
  //...code here
}



/* deleteUser object from array of objects */
//Imagine a world where you have an array of user objects, and you need to delete one of those users.
//Inside your if statement, remove the object from the array of objects.
function deleteUser() {
  //...code here
}



/* Update User Object Email */
//Inside your if statement, update the user's email property to the newEmail being passed in.
function updateUserEmail() {
  //...code here
}



/* Change Password in array of Objects */
//On each iteration, check the array index for a property that is equal to the value being passed in.
//If that condition is met, change the object's password property value to equal newPassword.
function changePassword(array, property, value, newPassword) {
  //...code here
}



/* RETURN DUPLICATES IN AN ARRAY */
//Write a function that takes two arrays and returns the matching numbers in both of those arrays.
function both() {
  //...code here
}



/* DESCENDING ORDER */
//Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order.
//Essentially, rearrange the digits to create the highest possible number.
function descendingOrder(){
  //...code here
}



/* INCREMENT A NUMBER  */
//Create a function called myLoop that takes in two parameters.
//The first parameter should represent a starting number and the second is how many times the starting number should be incremented.
//Use a for loop to increment the first parameter a number of times equal to the second parameter.  Then return the modified number.
//For example, if the first parameter is 3 and the second parameter is 4, the number three should be increased by one each time the
//for loop runs, and the for loop should run 4 times. This should return the number 7
function myLoop() {
  //...code here
}



/* EDITING, ADDING, AND REMOVING FROM ARRAY */
// Using this array do the following
var heroes = ['superman', 'batman', 'flash'];
// add 'wonderwoman' to the end
// remove 'superman' and store him in a variable called firstHero
// add 'spongebob' to the start of the array
// remove 'flash' from the array and store him in a variable called secondHero
// leave batman in the array but put a copy of him on a variable called thirdHero



/* REMOVE ALL INSTANCES IN ARRAY */
// Write a function called removeItem that takes in an array of strings, and a string.
// Removes all instances of that string from the array. And return the modified array.
// The order of the array should not be changed
function removeItem(){
	//...code here
}



/* CONVERT BINARY */
// Given an array of one's and zero's convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1



/* NUMBER OF PEOPLE IN THE BUS */
// There is a bus moving in the city, and it takes and drop some people in each bus stop.
// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
// The second value in the first integer array is 0, since the bus is empty in the first bus stop.
function number(){
  //...code here
}



/* SORTED? YES? NO? HOW? */
// Complete the method which accepts an array of integers, and returns one of the following:
// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.
function isSortedAndHow() {
  //...code here
}



/* Sort Array by String Length */
//Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings,
//ordered from shortest to longest.
function sortByLength () {
  //...code here
};



/* Find Unique Number */
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// It’s guaranteed that array contains more than 3 numbers.
function findUniq(arr) {
  //...code here
}