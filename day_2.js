// Sudipta Banik



// level 1 Object

l1 = {
    level: 1,
    getName: function(){
        return `Level ${this.level} Object`;
    }
};

// level 2 Object

l2 = Object.create(l1);

l2.level = 2;

l3 = Object.create(l2);

l3.level = 3;


// example of prototype chaining across 3 generations 
// getName is only declared in level 1 object
console.log(l1.level);
console.log(l1.getName());

console.log(l2.level);
console.log(l2.getName());

console.log(l3.level);
console.log(l3.getName());

// example of undefined 

console.log(l3.someRandomProperty)



// method hoisting
function fa(a,b){
    console.log(a,b);
}
function fa(a){
    console.log(a) // this will be called twice
}

fa(1,2)
fa(1)

// function context

global_func = function(){
    console.log('global_func');
    console.log(this);
}

var var_func = function(){
    console.log('var_func');
    console.log(this);
}

function local_func(){
    console.log('local_func');
    console.log(this);
}

obj = {
    member_func : function(){
        console.log('member_func');
        console.log(this);
    }
}


// variable hoisting vs non-hoisting
c = 1;
var c;
console.log(c); // won't throw error
x = 1;
let x;
console.log(x); // will throw error
