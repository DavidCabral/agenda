materialAdmin.controller("ContatoController", function($scope,$filter, $sce, ngTableParams, contatoService) {
	// I contain the list of friends to be rendered.
	$scope.contatos = [];
	// I contain the ngModel values for form interaction.
	$scope.contato = {};
	
	loadRemoteData();
	// ---
	// PUBLIC METHODS.
	// ---
	// I process the add-friend form.
	$scope.saveContato = function() {
		// If the data we provide is invalid, the promise will be rejected,
		// at which point we can tell the user that something went wrong. In
		// this case, I'm just logging to the console to keep things very
		// simple for the demo.
		contatoService.saveContato($scope.contato).then(saveSucesso,saveError);
		// Reset the form once values have been consumed.
		$scope.contato= {};
	};
	
	$scope.atualiza = function(){
		loadRemoteData();
	};
	
	$scope.alterar = function(contato){
		$scope.contato = contato;
	};
	
	$scope.limpar = function(){
		$scope.contato = {};
	}; 
	
	$scope.removeContato = function() {
        //Get confirmation, if confirmed
        swal({   
            title: "Atenção!!!",   
            text: "Deseja Realmente Excluir o Contato? "+ $scope.contato.nome,   
            type: "warning",   
            showCancelButton: true,   
            confirmButtonColor: "#F44336",
            cancelButtonText:  "Não",  
            confirmButtonText: "Sim, Remova",   
            closeOnConfirm: false 
        }, function(){
        	contatoService.removeContato($scope.contato).then(removidoSucesso,removidoErro);
        });
        
    }
	
	// ---
	// PRIVATE METHODS.
	// ---
	// I apply the remote data to the local scope.
	function applyRemoteData(contato) {
		$scope.contatos = contato;
		loadTableBasic(contato);
	}
	
	 
	function saveSucesso(contato) {
		loadRemoteData();
		$scope.limpar();
        swal("Feito!", "O Contato "+contato.nome+" foi salvo com sucesso!", "success");
	}
	
	function saveError(contato) {		
        swal("Ops!", "Não foi possível salvar o contato : "+contato.mensagem, "error");
	}
	
	function removidoSucesso(contato) {
		loadRemoteData();
		$scope.limpar();
        swal("Feito!", "O Contato "+contato.nome+" foi Excluido", "success");
	}
	
	function removidoErro(contato) {
		swal("Ops!", "Não foi possível excluir o contato:"+contato.mensagem, "error");
	}
	
	function loadTableBasic(contatos){
		//Basic Example
		 $scope.tableBasic = new ngTableParams({
	        page: 1,            // show first page
	        count: 10           // count per page
	    }, {
	        total: contatos.length, // length of data
	        getData: function ($defer, params) {
	            $defer.resolve(contatos.slice((params.page() - 1) * params.count(), params.page() * params.count()));
	        }
	    })
	}
	
	// I load the remote data from the server.
	function loadRemoteData() {
		// The friendService returns a promise.
		contatoService.getContatos().then(function(contato) {
			applyRemoteData(contato);
		});
	}
});