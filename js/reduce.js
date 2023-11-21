// syntax
// Array.reduce(callbackfn(total, curValue, curIndex, array))


const numbers = [1,2,3,4,5];
// let sum  = 0;
// for(let i=0; i<=numbers.length;i++){
//     sum+=i;
// }
// console.log("sum= "+sum);

let sum = numbers.reduce((acc,curValue)=> acc + curValue,0)

// console.log(sum);

//sum the values in an object array

let obj = [
    {n:5},
    {n:9},
    {n:13},
    {n:25},
    {n:40},
]

let totalSum = obj.reduce((acc,curValue)=>acc+curValue.n,0);

// console.log("Sum = "+totalSum);

//flattering an arry of arrays

let mulNumbers = [[3,5],[1,7],[12,9]]; //=> [3,5,1,7,12,9]

let NeArray = mulNumbers.reduce((acc,curValue)=>{
    return acc.concat(curValue);
},[])

// console.log(NeArray);

//counting an instances in an object

let clubs = ["Chelsea","Arsenal","Chelsea","Totteham","Inter","Inter","Chelsea"];

let countClub  = clubs.reduce(function(allClubs,club){
if(club in allClubs){
    allClubs[club]+=1;
}else{
    allClubs[club] = 1;
}
if(!Object.values(allClubs)>1){
    return allClubs; 
}
},{})
console.log(countClub);