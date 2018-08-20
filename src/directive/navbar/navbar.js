module.directive("customNavbar", customNavbar);

function customNavbar(){
    return {
        scope:{},
        controller: controller,
        templateUrl : "src/directive/navbar/navbar.html"
    };
}

function controller($rootScope) {
    this.$onInit = function () {
        $rootScope.navbarVisible=true;
        $rootScope.navbarContactVisible=true;
    };
}
controller.$inject = ['$rootScope'];