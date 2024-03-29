//common syntax
let greet = () => console.log('Hello');
greet(); // Hello


//using arrow functions as expressions
let age = 5;

let welcome = (age < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult');

welcome(); // Baby



//using arrow functions with "this" keyword
function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {

        // this is accessible
        console.log(this.age);

        function innerFunc() {

            // this refers to the global object
            console.log(this.age);
            console.log(this);
        }

        innerFunc();

    }
}

let x = new Person();
x.sayName();
