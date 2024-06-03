/* defination of laxical scoping is the ability of a function to access the variables of its parent function even after the parent function has finished executing.
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function.*/

//eg for laxical scoping from MDN
function init() {
    // name is a local variable created by init
   var name = "Mozilla";
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();//output Mozilla

var counter = (function() {
    var privatecount=0;
    function makechange(variable) {
        privatecount+=variable;
        
    }
    return {
        increment :()=> {
            makechange(1);
        },
        decrement:()=> {
            makechange(-1);
        },
        value:()=> {
            return privatecount;
        }
    }
})();
console.log(counter.value());//output 0
counter.increment();//increment by 1
counter.increment();//increment by 1
console.log(counter.value());//output 2
counter.decrement();//decrement by 1
console.log(counter.value());//output 1

// refernce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

