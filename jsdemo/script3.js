window.onload = () => {
  
  let greeting = (name) => {
    alert('Hello ' + name);
  };

  let processUserInput = (callback) => {
    let name = window.prompt('Please enter your name.');
    //callback(name);
    alert('Hello ' + name);
  };

  processUserInput(greeting);  
    
};