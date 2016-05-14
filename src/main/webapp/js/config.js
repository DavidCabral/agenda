agendaUnibratec
    .config(function ($stateProvider, $urlRouterProvider){
        
    	$urlRouterProvider.otherwise("/agenda");
        
        $stateProvider
	        .state ('agenda', {
	            url: '/agenda',
	            templateUrl: 'views/agenda.html'
	        })

            
    });
