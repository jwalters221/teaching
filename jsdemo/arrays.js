window.onload = () => {

    let myNumbers = [3, 5, 8, 12];

    myNumbers[2] = 66;

    console.log(myNumbers);



    console.log(myNumbers.length);

    myNumbers.pop();

    console.log(myNumbers);



    let myColors = ['blue', 'green', 'red', 'yellow'];

    let slice = myColors.slice(1,3);

    console.log(slice);


    myColors.splice(1,0,'orange');

    console.log(myColors);


    myColors.splice(3,1,'purple');

    console.log(myColors);

    myColors.splice(3,1);

    console.log(myColors);


}