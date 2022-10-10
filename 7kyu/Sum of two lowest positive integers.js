//DESCRIPTION:
//Create a function that returns the sum of the two lowest positive numbers given an array
//of minimum 4 positive integers. No floats or non-positive integers will be passed.

//For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

//[10, 343445353, 3453445, 3453545353453] should return 3453455.



//Мое решение:
function sumTwoSmallestNumbers(numbers) {
   numbers.sort((a, b) => a - b);
   let result = numbers.slice(0, 2);
   let total = 0;
   for (let i = 0; i < 2; i++) {
      total += result[i];
   }
   return total;
}