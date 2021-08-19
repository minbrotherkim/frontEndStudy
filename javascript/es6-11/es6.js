"use strict";

{
  const minbro1 = {
    name: "Minbro",
    age: "25",
  };

  const name = "Minbro";
  const age = "25";

  const minbro2 = {
    name: name,
    age: age,
  };

  const minbro3 = {
    name,
    age,
  };
  console.log(minbro1, minbro2, minbro3);
}

{
  // object
  const student = {
    name: "James",
    level: 3,
  };

  {
    const name = student.name;
    const level = student.level;
    console.log(name, level);
  }

  {
    const { name, level } = student;
    console.log(name, level);

    const { name: studentName, level: studentLevel } = student;
    console.log(studentName, studentLevel);
  }

  // array
  const animals = ["🐷", "🐵"];

  {
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
  }

  {
    const [first, second] = animals;
    console.log(first, second);
  }
}

{
  const obj1 = { key: "key1" };
  const obj2 = { key: "key2" };
  const array = [obj1, obj2];

  // array copy
  const arrayCopy = [...array];

  // array copy & add
  const arrayCopy2 = [...array, { key: "key3" }];

  // object copy
  const obj3 = {...obj1}
  
  // array concatenation
  const fruit1 = ['🍎', '🍌']
  const fruit2 = ['🍓', '🍒']
  const fruits = [...fruit1, ...fruit2]
  console.log(fruits)

  // object concatenation
  const cat1 = {cat1: '🐱'}
  const cat2 = {cat2: '🐈'}
  const cats = {...cat1, ...cat2}
  console.log(cats)
}

{
    {
        function printMessage(message) {
            if (message == null) {
                message = 'default message'
            }
            console.log(message)
        }

        printMessage('hi')
        printMessage()
    }

    {
        function printMessage(message = 'default message') {
            console.log(message)
        }

        printMessage('hi')
        printMessage()
    }
}