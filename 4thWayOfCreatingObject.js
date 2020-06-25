// sudipta banik

function Shape(nSides){
    // fiels
    this.nSides = nSides;

    // class
    Shape.count +=1;

    // shared variables
    Shape.prototype.printArea = function(){ // some random formula
        console.log(`Number of sides is ${this.nSides}, and  Area is `,this.nSides*this.nSides*10);
    }
}

const circle =new Shape(1);
const square = new Shape(4);

circle.printArea();
square.printArea()
