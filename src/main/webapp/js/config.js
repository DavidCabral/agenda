materialAdmin
    .config(function ($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/agenda");


        $stateProvider
        
            //------------------------------
            // HOME
            //------------------------------
	        .state ('home2', {
	            url: '/agenda',
	            templateUrl: 'views/home2.html'
	        })
        

            
    });
