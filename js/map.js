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
  return numbers.map((number) => (number % 2 !== 0 ? number ** 2 : number));
};

console.log(squareOddNumbers(numbers));

const people = ["Jack", "Mike", "Doris", "Peter"];

//return with index
const userPosition = (arr)=>{
    arr.map((person,index,arr)=>console.log(person+":"+index+"=>"+arr))
}
// userPosition(people)

const Labourers = ["Jack", "Mike", "Doris", "Peter"];

const getLabourers = (labours)=>{
  labours.map((labour, index, arr)=> console.log(labour+":"+index+"=>"+arr));
}
getLabourers(Labourers);

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
