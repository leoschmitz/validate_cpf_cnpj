/**
 * Remove code formatting
 * @param {string} code Code
 * @returns {string} unformatted code
 */
var get_numbers = function(code){
	numbers = ''
	if (!code || code.length === 0)
		return numbers
	for (var i = 0; i < code.length; i++){
		if (!isNaN(code[i])){
			numbers += code[i];
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
	if (cpf.length != 10)
		return false;
	return true
}

console.log(validate_cpf());
console.log(validate_cpf('0000000000'));
console.log(validate_cpf('000.000.00-00'));
