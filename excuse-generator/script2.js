window.onload = () => {
  
    let names =  ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];
    
    let filteredNames = names.filter((x) => {
       
       if(x.charAt(0) === "R"){
          return x; 
       }
        
    });
    
    console.log(filteredNames);
    
};