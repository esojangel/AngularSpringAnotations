(function(angular){
  angular.module('app', ['angle'])
    .config(["$urlRouterProvider","$stateProvider","RouteHelpersProvider",
      function($urlRouterProvider,$stateProvider,helper) {
      // defaults to todo
      $urlRouterProvider.otherwise('/app/todo');
      // -----------------------------------
      console.info("config router");
      $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: "./app",
            controller: 'AppController',
            resolve: helper.resolveFor('fastclick', 'modernizr', 'icons', 'screenfull', 'animo', 'sparklines', 'slimscroll', 'classyloader', 'toaster', 'whirl')
        })
        .state('app.colors', {
            url: '/colors',
            title: 'Colors',
            templateUrl: helper.basepath('colors.html'),
            controller: 'NullController'
        })
        .state('app.icons-font', {
            url: '/icons-font',
            title: 'Icons Font',
            templateUrl: helper.basepath('icons-font.html'),
            controller: 'NullController'
        })
        .state('app.todo', {
            url: '/todo',
            title: 'Todo List',
            templateUrl: helper.basepath('todo.html'),
            controller: 'TodoCtrl',
            resolve: helper.resolveFor('app.tareas')
        })
        .state('app.template', {
            url: '/template',
            title: 'Blank Template',
            templateUrl: helper.basepath('template.html'),
            controller: 'NullController'
        })
        .state('app.documentation', {
            url: '/documentation',
            title: 'Documentation',
            templateUrl: helper.basepath('documentation.html'),
            controller: 'NullController',
            resolve: helper.resolveFor('flatdoc')
        })
        //
        // Single Page Routes
        // -----------------------------------
        .state('page', {
            url: '/page',
            templateUrl: 'app/pages/page.html',
            resolve: helper.resolveFor('modernizr', 'icons', 'parsley')
        })
        .state('page.login', {
            url: '/login',
            title: "Login",
            templateUrl: 'app/pages/login.html'
        })
        .state('page.register', {
            url: '/register',
            title: "Register",
            templateUrl: 'app/pages/register.html'
        })
        .state('page.recover', {
            url: '/recover',
            title: "Recover",
            templateUrl: 'app/pages/recover.html'
        })
        .state('page.lock', {
            url: '/lock',
            title: "Lock",
            templateUrl: 'app/pages/lock.html'
        })
        .state('page.404', {
            url: '/404',
            title: "Not Found",
            templateUrl: 'app/pages/404.html'
        })
        //
        // CUSTOM RESOLVES
        //   Add your own resolves properties
        //   following this object extend
        //   method
        // -----------------------------------
        // .state('app.someroute', {
        //   url: '/some_url',
        //   templateUrl: 'path_to_template.html',
        //   controller: 'someController',
        //   resolve: angular.extend(
        //     helper.resolveFor(), {
        //     // YOUR RESOLVES GO HERE
        //     }
        //   )
        // })
        ;
    }])
    .run(['$rootScope',function ($rootScope) {
      // Uncomment this to disables template cache
      /*$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      if (typeof(toState) !== 'undefined'){
      $templateCache.remove(toState.templateUrl);
      }
      });*/

      // Scope Globals
      // -----------------------------------
      $rootScope.app = {
        name: 'AngularSpring',
        description: 'AngularSpringSeed',
        year: ((new Date()).getFullYear()),
        layout: {
          isFixed: true,
          isCollapsed: false,
          isBoxed: false,
          isRTL: false
        },
        useFullLayout: false,
        hiddenFooter: false,
        viewAnimation: 'ng-fadeInUp'
      };
      $rootScope.user = {
        name:     'Jose Angel',
        job:      'ng-Dev',
        picture:  'public/app/img/user/02.jpg'
      };

    }]);

})(angular);
