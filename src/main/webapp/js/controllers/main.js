agendaUnibratec
    .controller('agendaUnibratecCtrl', function($timeout, $state, $scope, $cookies){
        
        //Skin Switch
        this.currentSkin = getTema($cookies.get('tema')) ;

        this.skinList = [
            'lightblue',
            'bluegray',
            'cyan',
            'teal',
            'green',
            'orange',
            'blue',
            'purple'
        ]

        this.skinSwitch = function (color) {
            this.currentSkin = color;
            $cookies.put('tema', color);
        }
    
    })

    
    function getTema(val) {
	    
		if(val==null)
			return "bluegray"
			
		return val;	
	}

