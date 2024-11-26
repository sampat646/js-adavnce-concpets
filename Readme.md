Basic Questions

1. Simple Destructuring:
Given the array const numbers = [10, 20, 30, 40], destructure it to extract the first two numbers into variables a and b.


2. Default Values:
Use array destructuring with default values to handle the array const fruits = ["apple"] so that fruit1 becomes "apple" and fruit2 becomes "banana" if the second value is missing.


3. Skipping Elements:
From the array const animals = ["cat", "dog", "rabbit", "parrot"], extract "cat" and "rabbit" into separate variables while skipping "dog".




---

Intermediate Questions

4. Swapping Variables:
Use array destructuring to swap the values of two variables let x = 5 and let y = 10.


5. Nested Arrays:
Given the nested array const matrix = [[1, 2], [3, 4], [5, 6]], destructure the second inner array into variables a and b.


6. Rest Pattern:
From the array const cities = ["New York", "Los Angeles", "Chicago", "Houston"], extract the first city into city1 and the rest into a variable otherCities.




---

Advanced Questions

7. Destructuring in Loops:
Given the array const students = [["Alice", 90], ["Bob", 85], ["Charlie", 92]], use array destructuring in a for...of loop to print each student's name and score.


8. Function Return Value:
Write a function getMinMax that takes an array of numbers and returns an array [min, max]. Use destructuring to extract min and max when calling the function.


9. Complex Nested Arrays:
From the array const data = ["John", [28, "Engineer"], ["USA", "New York"]], destructure it to get the name, age, job, country, and city into separate variables.


10. Real-Life Example (API Simulation):
Simulate an API response with the array const weather = ["Sunny", 25, "Moderate Wind"]. Destructure it to get the weather condition, temperature, and wind status.

Since you're confident with **array destructuring**, the next step could be exploring more advanced concepts related to object manipulation and destructuring. Here’s a suggested progression:

### Next Topics:
1. **Object Destructuring:**
   - Learn how to extract properties from objects and assign them to variables.
   - Practice nested object destructuring and default values.

   Example:
   ```javascript
   const person = {
       name: "Alice",
       age: 30,
       job: {
           title: "Engineer",
           location: "New York"
       }
   };
   const { name, age, job: { title, location } } = person;
   console.log(name, age, title, location);
   ```

2. **Parameter Destructuring in Functions:**
   - Use destructuring directly in function parameters to make your code more readable and efficient.

   Example:
   ```javascript
   function displayPerson({ name, age }) {
       console.log(`Name: ${name}, Age: ${age}`);
   }
   displayPerson({ name: "John", age: 28 });
   ```

3. **Combining Array and Object Destructuring:**
   - Work on scenarios where arrays contain objects or vice versa.

   Example:
   ```javascript
   const data = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
   for (const { id, name } of data) {
       console.log(`ID: ${id}, Name: ${name}`);
   }
   ```

4. **Rest and Spread Syntax:**
   - Learn how to use the rest operator (`...`) to collect remaining elements or properties.
   - Explore the spread operator to clone or merge arrays and objects.

   Example:
   ```javascript
   const arr = [1, 2, 3, 4];
   const [first, ...rest] = arr;
   console.log(first, rest); // Output: 1 [2, 3, 4]
   ```

5. **Real-World Applications:**
   - Work on small projects or examples that use destructuring heavily, such as APIs returning complex JSON data.

Let me know if you'd like to start with any specific topic!