const sumOfNumbers = (numbers: string): number => {
	const sumOfNumbers = numbers
		.split(',')
		.map(number => parseInt(number))
		.filter(Boolean)
		.reduce((a, b) => a + b);
	return sumOfNumbers;
};

export default sumOfNumbers;