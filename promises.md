```javascrpit
// first method
const promiseone = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Promise one");
    resolve();
  }, 1000);
});
promiseone.then(function () {
  console.log("Promise one resolved");
});
//another method
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Promise two");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise two resolved");
});
```
```javascript
// data consumtion
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Promise three");
    resolve({ username: "sampat", email: "sampat@gmail.com" });
  }, 1000);
}).then(function (user) {
  console.log(user);
});
```
```javascript
//error handling
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false; //if error is true throw error else resolve;
    console.log("Promise one");
    if (error) {
      reject(new Error("Something went wrong"));
    } else {
      resolve({ name: "sampat", password: "123" });
    }
  }, 1000);
});
```
```javascript
promiseFour
  .then((user) => {
    return user.name;
  })
  .then((name) => {
    console.log(name);
  })
  .catch((error) => {
    //catch(error) is used to catch exceptions
    console.log(error);
  });
```
```javascript
//instead using .then() .catch() now we will use async await.
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false; //if error is true throw error else resolve;
    console.log("Promise one");
    if (error) {
      reject("Js went wrong");
    } else {
      resolve({ name: "js", password: "321" });
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const user = await promiseFive;
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}
//Here calling function is necessary
consumePromiseFive();
```
```javascript
//fetch api and getting the data from the url
async function apiGet() {
  try {
    const respose = await fetch("https://api.github.com/users/hiteshchoudhary"); //Don't forget to write await kyword becuse it takes time to fetch
    const data = await respose.json(); //Here also same.
    console.log(data);
  } catch (error) {
    console.log("E:", error);
  }
}
apiGet();
```
```javascript
//another type of fetch api and getting the data from the url
fetch('https://api.github.com/users/hiteshchoudhary')
.then((respose)=>{
 return respose.json();
}).then((data)=>{
 console.log(data)
}).catch((error)=>{
    console.log(error);
});
```
