//DESCRIPTION:
//Build a function that returns an array of integers from n to 1 where n>0.

//Example : n=5 --> [5,4,3,2,1]


//Мое решение:
const reverseSeq = n => {
   let arrayOne = [];
   for (let i = 0; i <= n; i++) {
      if (i <= n, i != 0) {
         arrayOne.push(i);
      }
   }
   return arrayOne.reverse();
}