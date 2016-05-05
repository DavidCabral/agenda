// I act a repository for the remote friend collection.
materialAdmin.service("contatoService", function($http, $q) {
	// Return public API.
	return ({
		saveContato : saveContato,
		getContatos : getContatos,
		removeContato : removeContato
	});
	// ---
	// PUBLIC METHODS.
	// ---
	// I add a friend with the given name to the remote collection.
	function saveContato(contato) {
		var request = $http.post("api/contatos/salvar", contato);
		
		return (request.then(handleSuccess, handleError));
	}
	// I get all of the friends in the remote collection.
	function getContatos() {
		var request =$http.get("api/contatos");
		
		return (request.then(handleSuccess, handleError));
	}
	// I remove the friend with the given ID from the remote collection.
	function removeContato(contato) {
		var request = $http.post("api/contatos/remover", contato);
		return (request.then(handleSuccess, handleError));
	}
	// ---
	// PRIVATE METHODS.
	// ---
	// I transform the error response, unwrapping the application dta from
	// the API response payload.
	function handleError(response) {		
		// Otherwise, use expected error message.
		console.log(response.data)
		return ($q.reject(response.data));
	}
	// I transform the successful response, unwrapping the application data
	// from the API response payload.
	function handleSuccess(response) {
		return (response.data);
	}
});