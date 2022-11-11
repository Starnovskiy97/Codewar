//DESCRIPTION:

//Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

//All non-vowels including non alpha characters (spaces,commas etc.) should be included.

//Examples:

//vowelOne( "abceios" ) // "1001110"

//vowelOne( "aeiou, abc" ) // "1111100100"



//Мое решение:
function vowelOne(s){
	const arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
	let res = ''
	for (let i = 0; i < s.length; i++) {
	  arr.includes(s[i]) ? res += '1' : res += '0'
	}
	return res
}