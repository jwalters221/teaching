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

    // Select only the dogs
    // Translate their ages into dog years (multiply them by seven)
    // Sum the results

    let dogs = data.filter((x) => {
        return x.type === 'dog';
    });

    console.log(dogs);