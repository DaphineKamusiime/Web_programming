const hostels=["Tupendane","Chronos","Sky courts","David's ark"]

const aar1=[1,3,3,5,6,4]

const arr2=[1,3,3,"BOY",6,"HII"]

console.log(hostels[1]);

console.log(hostels.length)//length of the array

hostels.push("Sabiiti");

console.log(hostels)

function mentionHostels(){
    for (let i=0; i<hostels.length;i++){
        console.log("The hostel is ", (i+1),".",hostels[i])
    }
}
mentionHostels()
/**
 
let n=100;

let sum=0;
for(let number= 1; number<=n; number++){
    console.log("The number output is ", number)
    sum+=number;
  }
console.log("SUM = ",sum)
*/
