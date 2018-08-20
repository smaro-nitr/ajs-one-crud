module.directive("customFooter", customFooter);

function customFooter(){
    return {
        scope:{},
        templateUrl : "src/directive/footer/footer.html"
    };
}