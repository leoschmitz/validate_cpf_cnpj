/**
 * Remove code formatting
 * @param {string} code Code
 * @returns {list} list of digits
 */
function getNumbers(code){
	numbers = [];
	if (!code || code.length === 0)
		return numbers;
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

/**
 * Get both CNPJ check digits.
 * @param {string} cnpj CNPJ numbers only
 * @returns {list} digit 1 and 2
 */
function getCNPJCheckDigits(cnpj){
	var digit1 = 0;
	var digit2 = 0;
	for (var i = 0; i < 4; i++){
		digit1 = digit1 + cnpj[i] * (5 - i);
		digit2 = digit2 + cnpj[i] * (6 - i);
	}
	digit2 = digit2 + cnpj[4] * 2;
	for (var i = 0; i < 8; i++){
		digit1 = digit1 + cnpj[i + 4] * (9 - i);
		digit2 = digit2 + cnpj[i + 5] * (9 - i);
	}
	digit1 = (digit1 % 11) > 1 ? 11 - (digit1 % 11) : 0;
	digit2 = (digit2 % 11) > 1 ? 11 - (digit2 % 11) : 0;
	return [digit1, digit2];
}

/**
 * Validate CNPJ
 */
function isCNPJValid(cnpj){
	var valid = false;

	cnpj = getNumbers(cnpj);
	if (cnpj.length != 14)
		return false;
	
	var checkdigits = getCNPJCheckDigits(cnpj);
	return checkdigits[0] == cnpj[12] && checkdigits[1] == cnpj[13];
}

console.log(isCPFValid());
console.log(isCPFValid(''));
console.log(isCPFValid('123.456.789-09'));
console.log(isCPFValid('843.667.254-28'));
console.log(isCPFValid('111.444.777-35'));

console.log(isCNPJValid());
console.log(isCNPJValid(''));
// console.log(isCNPJValid('33.000.167/0001-01'));
console.log(isCNPJValid('11.444.777/0001-61'));
