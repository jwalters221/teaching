window.onload = () => {
    
    let chr = '';
    
    for(let x=1; x <=7; x++)
    {
       for (let y=1; y < x; y++)
         {
        chr=chr+("*");        
          }
     console.log(chr);
     
     chr='';    
    }
};