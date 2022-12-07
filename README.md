# Array Methods: find(), some(), every(), includes()

---

### find()

The find method takes an array and accepts a function in which we specify a set of criteria. If any value inside of the array meets this criteria, the method will return the first instance in which it passes. In my example, we are using the "days" array in which we are hoping to find an instance in which the number value is greater than 10. Since 23 is the first number in our array that passes this criteria, we log to the console our "day" element using the find method and determine that 23, in fact, is our first instance in which the elements number value is greater than 23.

### some()

The some method takes an array and accepts a function in which we pass through a set of criteria. If ANY value in the array passes this criteria, the some method will return a boolean value of true or false. In my example, we test whether or not any values within the array are positive numbers and store that value inside of a variable. Since all of them are odd, we log to the console this new variable and find that our result is "false".

### every()

The every method works in the same manner as the some method with the only difference being that every element within the array must pass our specified criteria in order to return a boolean value of true. In my example, I test whether or not all values within my "days" array are false, in wich they are, so we are given a boolean value of "true" when we log this variable to the console.

### includes()

The includes method tests whether or not a specified value exists within an array. It will return a boolean value is and the most straight-forward method of the methods covered above. In my example, we are trying to determine if the number 23 is included within the days array (it is) so we are left with a boolean value of true.

---

## Key Takeaways

Of all of these methods, the only one that will return an actual value from an array is the find() method. The other methods listed will all return boolean values, but still hold significance when attempting to scour through information within an array.
