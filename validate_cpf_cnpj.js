/**
 * Remove code formatting
 * @param {string} code Code
 * @returns {list} list of digits
 */
var get_numbers = function(code){
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
 * Validates CPF (Cadastro de Pessoa Física)
 *
 * @param {string} cpf CPF code, which can be formatted or not
 * @returns {bool} valid or invalid
 */
var validate_cpf = function(cpf){
	var valid = false;
	cpf = get_numbers(cpf);
	if (cpf.length != 11)
		return false;

	var digit1 = 0;
	var digit2 = 0;
	for (var i = 0; i < 9; i++){
		digit1 = digit1 + cpf[i] * (10 - i);
		digit2 = digit2 + cpf[i] * (11 - i);
	}
	digit1 = (digit1 % 11) > 1 ? 11 - (digit1 % 11) : 0;
	digit2 = digit2 + digit1 * 2;
	digit2 = (digit2 % 11) > 1 ? 11 - (digit2 % 11) : 0;

	return digit2 == cpf[10] && digit1 == cpf[9];
}

console.log(validate_cpf());
console.log(validate_cpf(''));
console.log(validate_cpf('123.456.789-09'));
console.log(validate_cpf('843.667.254-28'));
console.log(validate_cpf('111.444.777-35'));
