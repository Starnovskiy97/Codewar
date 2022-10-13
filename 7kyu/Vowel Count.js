//DESCRIPTION:
//Return the number (count) of vowels in the given string.

//We will consider a, e, i, o, u as vowels for this Kata (but not y).

//The input string will only consist of lower case letters and/or spaces.



//Мое решение:
function getCount(str) {
	let result = 0;
	for (let i = 0; i < str.length; i++) {
		if ('aeiou'.includes(str[i].toLowerCase())) {
			result += 1;
		}
	}
	return result;
}