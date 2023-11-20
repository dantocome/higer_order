// const man = "the-stealth-warrio";
// function  upperKase(str){
//     return str.replace(/-/g, "");
// }
// console.log(upperKase("the-stealth-warrio"));

// // convert this string to an array and make the firdt letter uppercase
// let string = "the-stealth-warrio";

// const wordCase = (str)=> {
//     const arr = str.split("");
//     arr.replace(/-/g, "");
//     arr.charAt(0).toupperCase()+arr.slice(1);
//     str = arr.join("");
//     console.log(str);

// }
// wordCase("the-stealth-warrio");

const appWord = (str) =>{
    const arr = str.split("");
    arr.reverse();
    str = arr.join("");
    return str;

}
// console.log(appWord("apple"));

// const caseBattle = (str)=>{
//     const  arr = str.split("");
//     arr.replace(/-/g, "");
//     console.log(str);
//     // arr.charAt(0).toUpperCase();
    
// }
// caseBattle("the-stealth-warrio");

// square odd no using map

const numbers = [2,3,4,5,6,7]
const squareOdd = (numbers)=>{
    // return numbers.map((number)=> number% 2==0? number*2:number)
    return numbers.filter((number)=> number%2==0)
}
// console.log(squareOdd(numbers));

// function evenNumbers(arr){
//     let newArr= [];
//     for(let i=0;i<arr.length;i++){
//         let num = arr[i];
//         if(num%2==0){
//             newArr.push(num);
//         }
//     }
//     return newArr
// }
// console.log(evenNumbers(numbers));

// this is the best lecturer
const capitalised = (sentence)=>{
    return sentence.split(" ").map((word)=> word.charAt(0).toUpperCase()+word.slice(1)).join(" ")
} 
console.log(capitalised("this is the best lecturer"));


