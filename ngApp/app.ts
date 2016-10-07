namespace ajaxresource {

    angular.module('ajaxresource', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('Home', {
                url: '/',
                templateUrl: '/ngApp/views/list.html',
                controller: ajaxresource.Controllers.MoviesListController,
                controllerAs: 'vm'
            })
            .state('Add', {
                url: '/add',
                templateUrl: '/ngApp/views/add.html',
                controller: ajaxresource.Controllers.MoviesAddController,
                controllerAs: 'vm'
            })
            .state('Edit', {
                url: '/edit/:id',
                templateUrl: '/ngApp/views/edit.html',
                controller: ajaxresource.Controllers.MoviesEditController,
                controllerAs: 'vm'
            })
            .state('Delete', {
                url: '/delete/:id',
                templateUrl: '/ngApp/views/delete.html',
                controller: ajaxresource.Controllers.MoviesDeleteController,
                controllerAs: 'vm'
            })

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
