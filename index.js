console.log('A4 and A5 JS Questions')

/*function sumArray(numbersArray) {
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  const numbers = [5, 12, 7, 22, 35, 60, 42];
  
  console.log(sumArray(numbers));*/
  
  function countEvenOdd(numbersArray) {
    let result = {
      even: [],
      odd: [],
    };
    numbersArray.map((num) => {
      num % 2 === 0 ? result.even.push(num) : result.odd.push(num);
    });
    return result
  }
  
  const numbers = [5, 12, 7, 22, 35, 60, 42];
  
  console.log(countEvenOdd(numbers));
  // Expected Output: { even: 4, odd: 3 }

  const findLongestName = (students) => {
    return students.reduce((acc, curr) => 
        acc.name.length > curr.name.length ? acc : curr, students[0]
    )}

  const students = [
    { name: "Alice", age: 20 },
    { name: "Benjamin", age: 22 },
    { name: "Christopher", age: 19 },
    { name: "Eva", age: 21 }
  ];
  
  console.log(findLongestName(students));
  // Expected Output: { name: "Christopher", age: 19 }


  