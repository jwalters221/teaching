window.onload = () => {
    
        let person = {
            name: "John",                    
            lastname: "Doe",
            age: 35,                        
            gender: "male",
            lucky_numbers: [ 7, 11, 13, 17], 
            significant_other: person2       
        };
        
        var person2 = {
            name: "Jane",
            lastname: "Doe",
            age: 38,
            gender: "female",
            lucky_numbers: [ 2, 4, 6, 8],
            significant_other: person
        };

        let person3 = {
          name: "Jimmy",
          lastname: "Doe",
          age: 13,
          gender: "male",
          lucky_numbers: [1,2,3,4],
          significant_other: null
        };
        
        let doeFamily = {
            lastname: "Doe",
            members: [person, person2]       
        };
        
        person.lucky_numbers[3] = 33;
        
        doeFamily.members.push(person3);
        
        let addAllFamilyNumbers = (family) => {
        
                 let sumOfAllpersons = 0;
        
                 for(let x in family.members) {
        
                   let luckynumberArray = family.members[x].lucky_numbers;
                   console.log(luckynumberArray);
        
                   luckynumberArray.forEach((x) => {
                     sumOfAllpersons += x;
                   });
                 }
                 return sumOfAllpersons;
        
               };
        
        console.log(addAllFamilyNumbers(doeFamily));    
    
};

