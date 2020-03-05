


let myArray = [2, 8, 10, 1];

//forEach
myArray.forEach((x, y) => {
    console.log(y + ':' + x);
});

//map
let myMap = myArray.map((x) => {
    return x * 3;
});

//filter
let myFilter = myArray.filter((number) => {
    return number >= 8;
});

//find
let myFind = myArray.find((y) => {
    return y > 2;
});

console.log(myMap);
console.log(myFilter);
console.log(myFind);
console.log(add);
