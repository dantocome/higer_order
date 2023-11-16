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
    console.log(arr);

}
appWord("apple");
