// const number = [10,20,30,40,50,60]
// const [a,b,...other] = number

// console.log(a,b);
// console.log(other);

// const fruits = ["apple","banana","pineapple","papaya"]
// const [a,,b] = fruits;

// console.log(a);
// console.log(b);

// let x = 10;
// let y = 20;

// [x,y]=[y,x]
// console.log(x);
// console.log(y);

// const matrix = [[1, 2], [3, 4], [5, 6]]
// const [a,,b] = matrix
// console.log(a);
// console.log(b);

// const cities = ["New York", "Los Angeles", "Chicago", "Houston"]
// const [city1,...otherCities]= cities;
// console.log(city1);
// console.log(otherCities);

// const students = [
//   ["Alice", 90],
//   ["Bob", 85],
//   ["Charlie", 92],
// ];
// const [name, age] = students;
// for (const [name, age] of students) {
//   console.log(`Name: ${name} Age: ${age}`);
// }

// const arr = [1,2,4,8,7,5,4,4,8];
// let max = -Infinity
// let min = Infinity
// function getMinMax(arr) {

//   for (const e of arr) {
//     max = max > e ? max : e;
//     min = min < e ? min : e;
//   }
//   return [max,min]
// }
// console.log(getMinMax(arr));
// getMinMax(arr)

// const data = ["John", [28, "Engineer"], ["USA", "New York"]];

// const [Pname, [age, degree], [country1, country2]] = data;

// function name(data) {
//   console.log(
//     ` my name is ${Pname} and my age is ${age} my degree is ${degree} And i travel lot so recently gone ${country1} and ${country2}`
//   );
// }
// name()
