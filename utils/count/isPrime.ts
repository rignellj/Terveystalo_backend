const isPrime = (number: number): boolean => {
	if (number <= 1) {
		return false;
	}
	for (let i = 2; i < number; i++) {
		if (number % i === 0) {
			return false;
		}
	}
	return true;
}

export default isPrime;