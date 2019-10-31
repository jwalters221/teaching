let data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
];

// The goal of this article is going to be to write some
// JavaScript that will sum all of the dogs ages in dog years, using filter, map, and foreach

    // Select only the dogs
    // Translate their ages into dog years (multiply them by seven)
    // Sum the results

    let dogs = data.filter((x) => {
        return x.type === 'dog';
    });

    console.log(dogs);

    let dogs2 = dogs.map((x) => {
      return {"name": x.name, "age": x.age * 7, "type": x.type};
    });

    console.log(dogs2);

    let dogAgeTotal = 0;

    dogs2.forEach((x) => {
        dogAgeTotal += x.age;
    });

    console.log(dogAgeTotal);