//DESCRIPTION:
//Write simple.camelCase method(camel_case function in PHP, CamelCase in C# or camelCase in Java)
//for strings.All words must have their first letter capitalized without spaces.

//For instance:

//"hello case".camelCase() => HelloCase
//"camel case word".camelCase() => CamelCaseWord




//Мое решение:
String.prototype.camelCase = function () {
	let arr = this.split(' ')
	let result = ''
	for (let i = 0; i < arr.length; i++) {
		result += arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
	}
	return result
}