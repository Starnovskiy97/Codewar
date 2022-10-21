//DESCRIPTION:
//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//Examples
//"This is an example!" ==> "sihT si na !elpmaxe"
//"double  spaces"      ==> "elbuod  secaps"



//Мое решение:
function reverseWords(str) {
	let array = str.split(' ');
	let result = [];
	for (let i = 0; i < array.length; i++) {
		result.push(array[i].split('').reverse().join(''));
	}
	return result.join(' ');
}