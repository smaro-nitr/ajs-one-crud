module.controller("home", home);
function home(aocService, $rootScope, $scope, $window, $interval, $location) {
	this.$onInit = function() {
		$window.scrollTo(0, 0);
		$rootScope.navbarVisible = true;
		$rootScope.navbarContactVisible=true;
		$scope.loaderVisibility = true;
		$scope.codeNow("codenow");
		$scope.quickLink("quicklink");
		$scope.promise = $interval(function(){
			if($window.document.readyState==="complete"){
				$scope.loaderVisibility = false;
				$interval.cancel($scope.promise);
			}
		}, 10);
	};

	$scope.codeNow = function(fileName) {
		aocService.fetchJsonData(fileName)
		.then(function (response) {
			if (response.status) {
				$scope.errorMsg = "failed to fetch codenow json";
			}else{
				$scope.codeNowData = response;
			}
		});
	};

	$scope.quickLink = function(fileName) {
		aocService.fetchJsonData(fileName)
		.then(function (response) {
			if (response.status) {
				$scope.errorMsg = "failed to fetch quicklink json";
			}else{
				$scope.quickLinkData = response;
			}
		});
	};
}
home.$inject = ['aocService', '$rootScope', '$scope', '$window', '$interval', '$location'];