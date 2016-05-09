materialAdmin
    .config(function ($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/agenda");


        $stateProvider
        
            //------------------------------
            // HOME
            //------------------------------
	        .state ('agenda', {
	            url: '/agenda',
	            templateUrl: 'views/agenda.html'
	        })
        

            
    });
