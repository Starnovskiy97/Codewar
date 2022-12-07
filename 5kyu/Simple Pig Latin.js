//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

//Examples
//pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
//pigIt('Hello world !');     // elloHay orldway !



//Мое решение:
function pigIt(str) {
	const result = str.split(' ').map(el => {
		const firstLetter = el[0]
		const lastWord = el.slice(1)
		const letters = /[a-zA-Z]/

		return el.match(letters) ? lastWord + firstLetter + 'ay' : firstLetter

	}).join(' ')

	return result
}