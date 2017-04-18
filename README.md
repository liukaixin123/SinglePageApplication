AngularJS课程设计说明
使用AngularJS开发单页面应用
1. 页面中点击“最新动态”“简介”“消息”实现页面局部刷新，
	使用路由实现视图的切换，
	本质是分别加载三个页面的内容到首页。
	给用户的感觉是页面局部刷新，
	不用进行页面的跳转。
	具体方法采用路由实现，
	见app.js文件
	app.config(function($routeProvider){
	$routeProvider.when('/userinfo',{
		templateUrl:'view/userInfo.html',
		controller:'UserInfoController'
	}).when('/latestnews', {
		templateUrl:'view/latestnews.html',
		controller:'LatestNewsController'
	}).when('/intro', {
		templateUrl:'view/introduce.html',
		controller:'IntroController'
	}).when('/message', {
		templateUrl:'view/message.html',
		controller:'MessageController'
	}).otherwise({
		redirectTo:'/latestnews'
	});
});
2. 页面左侧导航栏采用ng-repeat循环显示列表项

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
		
	点击页面左侧“操作”，
	可弹出折叠菜单，
	折叠菜单使用ng-click和ng-if实现。
	导航栏的控制器见controllers.js文件
	控制折叠菜单部分的代码详见
	app.js文件中showAccordion函数
		app.controller('AppController', ['$scope', function($scope){
			// 点击导航栏中的“操作”,打开折叠菜单
			$scope.show = false;
			$scope.showAccordion = function(){
				$scope.show = !$scope.show;
			};
		}]);

3.  实现用户头像及用户名双向数据绑定

	(1)用户头像采用ng-src进行双向数据绑定

	(2)用户名输入框可以修改的部分使用ng-model进行双向数据绑定

	视图展示部分使用ng-bind进行单向数据绑定
	控制器为controller.js中的UserInfoController
		userModule.controller('UserInfoController', ['$scope', 
	    function($scope) {
	        $scope.userInfo = {
	            username:"刘凯欣",
	            userImage:"images/a9.jpg"
	        };
	        $scope.setFormData = function(){
	            $scope.userInfo = {
	                username:"夜闪冰"
	            };
	        };
	        $scope.resetFormData = function(){
	            $scope.userInfo = {
	                username:"刘凯欣"
	            };
	        };
	    }
	]);

4.  用户点赞量的累计
	点击一次，点赞量加1