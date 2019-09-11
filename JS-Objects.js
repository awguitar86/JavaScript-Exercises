//OBJECTS

//Person Object With Name and Age Property
/*Create a function called getPerson.
Inside that function, create a person object with a name property (string) and an age property (number) and return it.*/




//Car object with Make and Model Properties
/*Create a newCar function that takes in two parameters: make and model.
Using those parameters, create a car object, give it make and model properties, and return it from the function*/




//Person Object that has Name and Age Property
/*Create a function called canDrive that takes in a person object that has a name and an age property.
If the person's age is greater than or equal to 16 then return a string concatenating their name with the
string " is old enough to drive." If the person's age is less than 16 then return a string concatenating
their name with the string " is not old enough to drive.”*/




//Change Email Function with User Object
/*Create a function called changeEmail that takes in a user object and a newEmail string.
Replace the user's current email address (assigned to the email property) with the newEmail
string, then return the updated user object.*/




//Change User Object Role in a Function
/*Create a function called addRole that takes in a user object and a string.
This string will represent the user's new role in the system (i.e. admin,
creator, editor, visitor). Create a new property on the user object called
"role" and assign the passed in string to it, then return the updated user object.*/




//Remove Role Object Property with Function
/*Create a function called removeRole that takes in a user object.
Delete the user's role property and return the updated user.*/




//Change all Object Property Values to Unknown with Loop in a Function
/*Create a function called unknownPerson that takes in a person object.
This person object will have properties such as name, age, gender, etc.
Loop through all the properties of the object and set each value to "Unknown", then return the object.
For example, if "person" is {name: "Dolph L.", age: 33} then the function would return {name: "Unknown", age: “Unknown"}.*/




//Truthy Object
/*Create a function called truthyObject that takes in a user object.
This function should loop through the user object checking to make sure that each of its values is truthy.
If a value is not truthy then remove it from the object.
Return the updated object after looping through it.*/




//Loop Through Object and Change values
/*Create a function called objectLooper that will take a number object and loop over it.
You need to change the value of each property to 0.*/




//Object: Check and Change each Value
//Check each value and if value is greater than 3000000, if true, set it to 0.




//Object: If false value remove it
//Create a function that loops through an object.
//If the value is falsy remove it. Once all the falsy values are removed return the obj.




//Object: Change values of object elements
/*Change the value of name to Ryan, change the value of pwHash to 43df90w_h and change the value of
username to ryanleeeallred. After you have updated all the values return the new object*/




//Object: Update Email property
//Create a function to find and update the email property of an object then return the new email.




//Object: Check if person object is old enough
/*Write a function called isOldEnough that takes a person obj and checks if the person is old enough to enter the club.
 If they are 21 or older return true else return false.  The person's age can be found on the age property/key.*/




//Object: add role to user object
/*Create a function called addRole that takes in a user object and a string.
This string will represent the user's new role in the system (i.e. admin, creator, editor, visitor).
Create a new property on the user object called "role" and assign the passed in string to it, then
return the updated obj.role. Make sure you only return the obj.role otherwise the test will fail.*/




//Object: Zero out property values in object
/*Create a function called zeroOut that take a user object and then loops over that object and changes
all the values to 0. Return the user object at the end.*/




/* REMOVING KEYS IN OBJECT */
// Loop through this object and change all keys that start with the letter s to have a value of 's'
var snake = {
	sliters: 'sideways',
	eats: 'rodents',
	says: 'ssss',
	smells: 'heat',
	runs: 'legless'
};




/* OBJECT WITH TIMESTAMP */
// Write a function called makeChatMessage that takes in a message and author as parameters
// and returns an object with a message, author, and timestamp, that is
// the current time as a Date object