
agendaUnibratec.service("contatoService", function($http, $q) {
	// Return public API.
	return ({
		saveContato : saveContato,
		getContatos : getContatos,
		removeContato : removeContato
	});
	
	function saveContato(contato) {
		var request = $http.post("api/contatos/salvar", contato);
		
		return (request.then(handleSuccess, handleError));
	}

	function getContatos() {
		var request =$http.get("api/contatos");
		
		return (request.then(handleSuccess, handleError));
	}

	function removeContato(contato) {
		var request = $http.post("api/contatos/remover", contato);
		return (request.then(handleSuccess, handleError));
	}
	
	
	function handleError(response) {
		return ($q.reject(response.data));
	}
	
	function handleSuccess(response) {
		return (response.data);
	}
});