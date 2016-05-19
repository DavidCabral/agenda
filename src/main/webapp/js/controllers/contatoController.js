agendaUnibratec.controller("ContatoController", function($scope,$filter, $sce, ngTableParams, contatoService) {
	$scope.contatos = [];
	$scope.contato = {};
	
	$scope.contato.sexo = "M"
	
	loadRemoteData();
	
	$scope.saveContato = function() {
		contatoService.saveContato($scope.contato).then(saveSucesso,saveError);
		$scope.limpar();
	};
	
	$scope.atualiza = function(){
		loadRemoteData();
	};
	
	$scope.alterar = function(contato){
		$scope.contato = contato;
	};
	
	$scope.limpar = function(){
		$scope.contato = {};
		$scope.contato.sexo = "M";
		loadRemoteData();
	}; 
	
	$scope.removeContato = function() {
        //Dialogo de confirmação
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
		console.log(contato);
		
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
	
	function loadRemoteData() {
		contatoService.getContatos().then(function(contato) {
			applyRemoteData(contato);
		});
	}
});