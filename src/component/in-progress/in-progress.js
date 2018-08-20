module.controller("inProgress", inProgress);
function inProgress($rootScope, $scope, $window, $interval) {
	this.$onInit = function() {
		$window.scrollTo(0, 0);
		$rootScope.navbarVisible = true;
		$rootScope.navbarContactVisible=true;
		$scope.loaderVisibility = true;
		$scope.promise = $interval(function(){
			if($window.document.readyState==="complete"){
				$scope.loaderVisibility = false;
				$interval.cancel($scope.promise);
			}
		}, 10);
	};
}
inProgress.$inject = ['$rootScope', '$scope', '$window', '$interval'];