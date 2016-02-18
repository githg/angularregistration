myApp.controller('RegistrationController', ['$scope', 
    function($scope){
    $scope.message = "Welcome to my app";
    $scope.regex = /^[A-Za-z]*$/;
    $scope.login = function(){
        $scope.message = "Welcome" + $scope.user.email;
    };
}]);

