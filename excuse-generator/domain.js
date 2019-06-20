window.onload = () => {
 

    let pronoun = ['the','our'];
    let adj = ['great', 'big' ];
    let noun = ['jogger','racoon'];
    
    let domain = '';
    
    pronoun.forEach((pronoun) => {
      
       adj.forEach((adj) => {
        
         noun.forEach((noun) => {
           
           domain += pronoun + adj + noun + '.com' + '<br>';
           
         });
         
      });
      
    });
    
    document.querySelector('#theexcuse').innerHTML = domain; 
  
};