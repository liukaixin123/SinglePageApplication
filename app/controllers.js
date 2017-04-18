var userModule = angular.module('userModule', []);

userModule.controller('UserInfoController', ['$scope',
    function($scope) {

    }
]);
userModule.controller('LatestNewsController', ['$scope',
    function($scope) {

    }
]);
userModule.controller('IntroController', ['$scope',
    function($scope) {

    }
]);

userModule.controller('MessageController', ['$scope',
    function($scope) {

    }
]);

userModule.controller('NavController', ['$scope',
    function($scope) {
        $scope.navbar = {
            home: "首页",
            intro: "简介",
            message: "信息",
            operation: "操作"
        };
    }
]);

userModule.controller('SecondNavController', ['$scope',
    function($scope) {
        $scope.navCategories = [
            "设置栏目",
            "更多设置",
            "分割线"
        ];
    }
]);
