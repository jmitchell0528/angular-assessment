angular.module("assessment", ['ui.router'])

  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/")

    $stateProvider

      .state('home', {
        url: '/',
        templateUrl: "views/home.html",
        // controller: ""
      })

      .state('about', {
        url: '/about',
        templateUrl: "views/about.html",
        // controller: ""
      })

      .state('blog', {
        url: '/blog',
        templateUrl: "views/blog.html",
        // controller: ""
      })

      .state('shop', {
        url: '/shop/:id',
        templateUrl: "views/shop.html",
        controller: "shopCtrl"
      })



  })
