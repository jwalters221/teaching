// The parent class 
class Car {
  constructor(){
    //private property
  	this._model = '';
  }
  
  // Public methods and properties can be used by both the parent and the child classes.
  setModel(model)
  {
    this._model = model;
  }
   
  getModel()
  {
    return this._model;
  }
}
//The child class can use the code it inherited from the parent class, 
// and it can also have its own code. Note extends syntax
class SportsCar extends Car{
 
  constructor(){
    
  	//you have to call the super constructor always. 
  	//**Note- super can take in parameters for parent class constructor
  	super();
  	
	this._style = 'fast and furious';
  }
 
  driveItWithStyle()
  {
    return `Drive a ${this.getModel()}, ${this._style}`;
  }
}
 
 
//create an instance from the child class
let sportsCar1 = new SportsCar();
   
// Use a method that the child class inherited from the parent class
sportsCar1.setModel('Ferrari');
  
// Use a method that was added to the child class
console.log(sportsCar1.driveItWithStyle());
