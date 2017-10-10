'use strict';
angular.module('catApp')
.controller('calcCtrl', ['$scope', 'adalAuthenticationService', function ($scope, adalService) {
	$scope.getToken2 = function(){
		 var resource = 'eb4c0c67-7376-4a50-b9fe-ed01fe020b58';
		 var resourceAdal = adalService.getClientID();
		 console.log('Adal ClientID = '+resourceAdal);
		 var tokenVal = adalService.getCachedToken(resource);
		 return tokenVal;
	};

}]);