//DESCRIPTION:
//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

//moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]




//Мое решение:
function moveZeros(arr) {
	const currZiro = arr.filter(el => el === 0)
	const newArr = arr.filter(el => el !== 0)

	for (let i = 0; i < currZiro.length; i++) {
		newArr.push(0)
	}

	return newArr
}