/**
 * Validates CPF (Cadastro de Pessoa Física)
 *
 * @param {string} cpf CPF code
 * @returns {bool} valid or invalid
 */
var validate_cpf = function(cpf){
	var valid = false;
	if (!cpf || cpf.length === 0)
		return valid;

	cpf = cpf.trim();
	if (cpf.length === 14){
		cpf = cpf.replace( '/^\D+/g', '' );
		console.log(cpf);
	}
	console.log(cpf);

	for (var i = 0; i < cpf.length; i++){
	}
}
validate_cpf()
validate_cpf('009.613.760-66')
