agendaUnibratec
    .config(function ($stateProvider, $urlRouterProvider){
        
    	$urlRouterProvider.otherwise("/pages/agenda/contatos");
        
        $stateProvider
            .state ('pages', {
                url: '/pages',
                templateUrl: 'views/common.html'
            })
        
            .state ('pages.agenda', {
                url: '/agenda',
                templateUrl: 'views/agenda.html'
            })
            
             .state ('pages.agenda.contatos', {
                url: '/contatos',
                templateUrl: 'views/contatos.html'
            })
            
             .state ('pages.agenda.aniversariantes', {
                url: '/aniversariantes',
                templateUrl: 'views/aniversariantes.html'
            })

            
    });
