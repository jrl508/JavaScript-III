/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding: in the global scope "this" will reference the console object
* 2. Implicit Binding: one of the most common applications, when the called function is called by a preceding function (like an Object function) that Object function would be "this"
* 3. New Binding: Seems best used in creating a new Object in a Class eg. if you create a Person class and create a const Jon Snow = new Person; Jon Snow is "this" within his Object
* 4. Explicit Binding: Whenever the apply or call function is used, "this" is explicitly established
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
    function shoutOut(words) {
        console.log(this);
        return words;
    }
    shoutOut("What are Those!?");

// Principle 2

// code example for Implicit Binding

    const Obj = {
        foo: 'bar',
        objFun: function(name) {
        console.log(`${this.foo} ${call}!`);
        console.log(this);
        }
    };
    Obj.objFun('Crawl');

// Principle 3

// code example for New Binding

function Jedi(name){
    this.phrase = 'called from this I was';
    this.name = name;
    this.speak = function(){
        console.log(`${this.name} my name is, ${this.phrase}`);
    }
}
const yoda = new Jedi("Yoda");
yoda.speak();
// Principle 4

// code example for Explicit Binding
Padawan.prototype = Object.create(Jedi.prototype)

function Padawan(pattr){
    Jedi.call(this,pattr);
    this.lightsaber = "green"
    this.greet = function(){
        console.log(`Hello I am padawan ${this.name}, I was also called from this. My lightsaber is ${this.lightsaber}`)
        console.log(this);
    }
}

const ashoka = new Padawan("Ashoka Tano");
ashoka.greet();
