/**
 * Remove code formatting
 * @param {string} code Code
 * @returns {list} list of digits
 */
function getNumbers(code){
	numbers = []
	if (!code || code.length === 0)
		return numbers
	for (var i = 0; i < code.length; i++){
		if (!isNaN(code[i])){
			numbers.push(parseInt(code[i], 10));
		}
	}
	return numbers;
}

/**
 * Get both CPF check digits.
 * @param {string} cpf CPF numbers only
 * @returns {list} digit 1 and 2
 */
function getCPFCheckDigits(cpf){
	var digit1 = 0;
	var digit2 = 0;
	for (var i = 0; i < 9; i++){
		digit1 = digit1 + cpf[i] * (10 - i);
		digit2 = digit2 + cpf[i] * (11 - i);
	}
	digit1 = (digit1 % 11) > 1 ? 11 - (digit1 % 11) : 0;
	digit2 = digit2 + digit1 * 2;
	digit2 = (digit2 % 11) > 1 ? 11 - (digit2 % 11) : 0;
	return [digit1, digit2];
}

/**
 * Validates CPF (Cadastro de Pessoa Física)
 * @param {string} cpf CPF code, which can be formatted or not
 * @returns {bool} valid or invalid
 */
function isCPFValid(cpf){
	var valid = false;
	cpf = getNumbers(cpf);
	if (cpf.length != 11)
		return false;

	var checkdigits = getCPFCheckDigits(cpf);

	return checkdigits[0] == cpf[9] && checkdigits[1] == cpf[10];
}

console.log(isCPFValid());
console.log(isCPFValid(''));
console.log(isCPFValid('123.456.789-09'));
console.log(isCPFValid('843.667.254-28'));
console.log(isCPFValid('111.444.777-35'));
