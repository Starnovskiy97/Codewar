//DESCRIPTION:
//Check to see if a string has the same amount of 'x's and 'o's.
//The method must return a boolean and be case insensitive.
//The string can contain any char.

//Examples input/output:

//XO("ooxx") => true
//XO("xooxx") => false
//XO("ooxXm") => true
//XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
//XO("zzoo") => false



//Мое решение:
function XO(str) {
	let lowCase = str.toLowerCase();
	let a = 0;
	let b = 0;
	for (let i = 0; i < lowCase.length; i++) {
		if (lowCase[i] === 'x') { a++ };
		if (lowCase[i] === 'o') { b++ };
	}
	if (a === b) return true;
	if (a !== b) return false;
}