export const validateNumbers = (numbers: string): boolean => /^(\d|,)+$/.test(numbers);

export const validateNumber = (number: string): boolean => /^\d+$/.test(number);
