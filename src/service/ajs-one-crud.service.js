module.service('aocService', aocService);

function aocService($http) {
    this.fetchJsonData = function(fileName) {
        var pathUrl = "src/assets/mocker/"+fileName+".json";
		return $http({
			method: 'GET',
			url: pathUrl
        }).then(
            function success(data) {
			    return data.data;
            }, 
            function response() {
			    return [];
            }
        )
    };
}
aocService.$inject = ['$http'];