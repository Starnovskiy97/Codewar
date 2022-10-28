//DESCRIPTION:
//Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

//Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case



//Мое решение:
var countBits = function (n) {
	let res = 0;
	let num = n.toString(2).split('');
	for (let i = 0; i < num.length; i++) {
		if (num[i] == 1) res += Number(num[i]);
	}
	return res;
};