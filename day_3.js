// Assignment Day 3 -- Sudipta Banik

(()=>{


    // Example of closure

    function externalFunction() {
        var capturedVariable = 'The capturedVariable';
        function internalFunction() {
        console.log('From Inner function : ', capturedVariable);
        }
        return internalFunction;
    }
  
    var f = externalFunction();
    f(); // => "From Inner function :  The capturedVariablee"

})();


(()=>{

    // example of functions like classes and prototype

    function Shape(nSides){
        // fields
        this.nSides = nSides;
    
        // class variables
        Shape.count +=1;
    }
    Shape.count = 0;
    Shape.prototype.printArea = function(){ // some random formula
        console.log(`Number of sides is ${this.nSides}, and  Area is `,this.nSides*this.nSides*10);
    }

    const circle =new Shape(1);
    const square = new Shape(4);
    
    circle.printArea(); // => "Number of sides is 1, and  Area is  10"
    square.printArea(); // => "Number of sides is 4, and  Area is  160"

})();

(()=>{


    // property desctiptor

    let obj = {};
    // configurable
    Object.defineProperty(obj, 'val', {
        value: 5,
        writable: false,
        enumerable: false,
        configurable: true
    });

    obj.val = 10; // doesn't work

    console.log(obj);   //  => {}

    Object.defineProperty(obj, 'val', {
        value: 10,
        writable: true,
        enumerable: true,
        configurable: false
    });

    console.log(obj); // => {val: 10}

    obj.val = 2; // now works
    console.log(obj); // => {val: 2}

})();
