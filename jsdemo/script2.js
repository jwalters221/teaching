window.onload = () => {
  
  let celsiusArray = [-2, 34, 56, -10];
  
  let fahrenheitArray = celsiusArray.map((x) => {
      return (x * 9/5) + 32;
  });
  
  console.log(fahrenheitArray);
    
};