window.onload = () => {

let stuff = (a) => {
        a++;
        console.log(a);
};
    
document.querySelector(".clickMe").addEventListener("click", () => {stuff(4)});  

};