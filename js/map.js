const numbers = [2, 4, 5, 6, 7, 8, 9];

function doubleArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    
    arr[i] = arr[i] * 2;
  }
  return arr;
}

// console.log(doubleArray(numbers));

const doubleNumber = (numbers) => {
  return numbers.map((number) => number * 2);
};

// console.log(doubleNumber(numbers));

// square the odd numbers
const squareOddNumbers = (numbers) => {
 return numbers.map((number) =>number % 2 !== 0 ? number ** 2 : number && number%2==0? number**2 : number);
};
console.log(squareOddNumbers(numbers));

const people = ["Jack", "Mike", "Doris", "Peter"];

//return with index
const userPosition = (arr)=>{
   arr.map((person,index,arr)=>console.log(person+":"+index+"=>"+arr))
}
// userPosition(people);


// capitalise the first character in a given string

const sentence = "this is simply the best lecturer"//;=>This Is Simply The Best Lecturer
const capitalizeFirstLetter = (sentence) => {
  return sentence.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ')

}
// console.log(capitalizeFirstLetter(sentence));

const word = "this is me";
// console.log(word.split(' '));
//  console.log(capitalizeFirstLetter(sentence));

// const no = [3,5,6,7];
// console.log(no.slice(1));

// const series = [2,4,5,6,7];

// const newSeries= series.filter((item,index,arr)=>{
//   return index>2;
// });
// console.log(newSeries);


// problem involving filter, map and reduce
          // (A)
// You are given an array of objects representing a group of students,
//  each with a name and an array of test scores. Your task is to use map,
// filter, and reduce to calculate the average test score for each student,
//  and then return an array of objects containing
//  only the students who have an average score above 90.


//  const students = [
//   { name: "Alice", scores: [90, 85, 92] },
//   { name: "Bob", scores: [75, 80, 85] },
//   { name: "Charlie", scores: [90, 95, 85] },
//   { name: "Jack", scores: [100, 100, 100] }
// ];
// // Ans
// [ 
//   { name: 'Jack', average: 100 }
// ]

// Use map to calculate the average test score for each student
// const studentAverages = students.map(student => {
//   const sum = student.scores.reduce((acc, score) => acc + score);
//   return { name: student.name, average: sum / student.scores.length };
// });
// console.log(studentAverages(students));

// Use filter to only select students with an average above 90
// const highPerformers = studentAverages.filter(student => student.average > 90);
// console.log(highPerformers(students))

    // (B)
// You are given an array of objects representing a collection of products,
//  each with a name, price, and category. Your task is to use map, filter, 
// and reduce to calculate the average price of products in each category,
//  and then return an array of objects containing only the categories
// that have an average price above 50.

// const products = [
//   { name: "Product 1", price: 20, category: "Electronics" },
//   { name: "Product 2", price: 30, category: "Clothes" },
//   { name: "Product 3", price: 40, category: "Electronics" },
//   { name: "Product 4", price: 50, category: "Clothes" },
//   { name: "Product 5", price: 60, category: "Clothes" },
//   { name: "Product 6", price: 70, category: "Electronics" },
//   { name: "Product 7", price: 80, category: "Clothes" },
//   { name: "Product 8", price: 90, category: "Electronics" },
// ];
// // Ans
// [ 
//   { category: 'Clothes', average: 55 },
//   { category: 'Electronics', average: 55 }
// ]

/* Use map to create a dictionary with category as the key
and an array of products as the value */
// const productsByCategory = products.reduce((acc, product) => {
//   const category = product.category;
//   if (!acc[category]) {
//     acc[category] = [];
//   }
//   acc[category].push(product);
//   return acc;
// }, {});

// Use map to calculate the average price for each category
// const avgPriceByCategory = Object.keys(productsByCategory).map(category => {
//   const sum = productsByCategory[category].reduce((acc, product) => acc + product.price, 0);
//   return { category: category, average: sum / productsByCategory[category].length };
// });

// Use filter to only select categories with an average above a certain threshold
// const highPricedCategories = avgPriceByCategory.filter(category => category.average > 50);

  //  (C)
  // You are given an array of objects representing a collection of employees,
  // each with a name, salary, and department. Your task is to use map, filter,
  // and reduce to calculate the average salary for each department and then
  // return an array of objects containing only the departments that have an
  // average salary above 65000.


  //  const employees = [
  //  { name: "John", salary: 50000, department: "IT" },
  //  { name: "Jane", salary: 60000, department: "HR" },
  //  { name: "Bob", salary: 55000, department: "IT" },
  //  { name: "Sophie", salary: 75000, department: "HR" },
  //  { name: "Mike", salary: 65000, department: "IT" },
  //  { name: "Emily", salary: 80000, department: "HR" },
  //  { name: "David", salary: 70000, department: "IT" },
  //  ];
  // //  Ans= 
  // [
  //   { department: 'HR', average: 71666 }
  // ]
  
        
   /* Use reduce to create a dictionary with department as the key
   and an array of employee objects as the value */
  //   const employeesByDepartment = employees.reduce((acc, employee) => {
  //  const department = employee.department;
  //  if (!acc[department]) {
  //  acc[department] = [];
  //  }
  //  acc[department].push(employee);
  //   return acc;
  //  }, {});
        
   // Use map to calculate the average salary for each department
  // const avgSalaryByDepartment = Object.keys(employeesByDepartment).map(department => {
  // const sum = employeesByDepartment[department].reduce((acc, employee) => acc + employee.salary, 0);
  //  return { department: department, average: sum / employeesByDepartment[department].length };
  //  });
        
   // Use filter to only select departments with an average above a certain threshold
  //  const highPaidDepartments = avgSalaryByDepartment.filter(department => department.average > 65000);
        

