const sumOfNumbers = (numbers: string): number => {
	let arrayOfNumbers = numbers
		.split(',')
		.map(number => parseInt(number))
		.filter(Boolean);

	// In case filter returns empty array
	if (!arrayOfNumbers.length) {
		arrayOfNumbers = [0];
	}
	const sumOfNumbers = arrayOfNumbers 
		.reduce((a, b) => a + b);
	return sumOfNumbers;
};

export default sumOfNumbers;
