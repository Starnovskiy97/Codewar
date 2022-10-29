//DESCRIPTION:
//Write a simple parser that will parse and run Deadfish.

//Deadfish has 4 commands, each 1 character long:

//i increments the value (initially 0)
//d decrements the value
//s squares the value
//o outputs the value into the return array
//Invalid characters should be ignored.

//parse("iiisdoso") => [ 8, 64 ]



//Мое решение:
function parse(data) {
	let result = [];
	let num = 0;
	let arr = Array.from(data);
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == "i") num += 1;
		if (arr[i] == "d") num -= 1;
		if (arr[i] == "s") num = num * num;
		if (arr[i] == "o") result.push(num);
	}
	return result;
}