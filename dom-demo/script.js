window.onload = () => {

/*

  let btnArray = document.querySelectorAll('.btn');

  console.log(btnArray);



  btnArray.forEach((x, y) => {
    btnArray[y].style.backgroundColor = 'red';
    btnArray[y].style.color = 'white';
  });



  let body = document.querySelector('body');

  body.style.backgroundColor = 'red';

  document.querySelector('#content').innerHTML = "The dom is awesome!";



  let box = document.querySelectorAll('.box');

  console.log(box);

  box.forEach((x) => {
      console.log(x);
  });


  let list = document.querySelector('#theList');



  let listArray = list.childNodes;

  listArray.forEach((x) => {
    console.log(x);
  });




  document.querySelector('#content').innerHTML = "<div>div 1</div><div>div2</div>";

  let content = document.querySelector('#content');

  content.innerHTML = "The dom is awesome!";


  content.style.backgroundColor = 'blue';
  content.style.color = '#fff';


  let body = document.querySelector('body');

  body.style.backgroundColor = 'red';


  let div = document.querySelectorAll('div');

  div.forEach((x, y) => {
    div[y].style.backgroundColor = '#fff';
  });

  */

   let greenBackground = () => {
     document.querySelector('body').style.backgroundColor = 'green';
   };

   document.querySelector('#btnGreen').addEventListener("click", greenBackground);



   document.querySelector('#btnYellow').addEventListener("click", () => { document.querySelector('body').style.backgroundColor = 'yellow'; });


};