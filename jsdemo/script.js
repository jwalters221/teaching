window.onload = () => {
  
let people = [
  {name: 'John', birthDate: new Date(1985,10,24)}
  ];
  
let simplifier = function(person){
  return 'Hello, my name is ' + person.name + ' and i am ' + person.birthDate;
};

console.log(people.map(simplifier));
    
};