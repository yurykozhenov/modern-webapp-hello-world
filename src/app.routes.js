// @ngInject
export default function router($urlRouterProvider, $locationProvider,
    $stateProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      url: '/',
      template: `
        <h1 class="text-center">
          I AM THE GREAT BLANK ROOT PAGE! BEHOLD MY POWER!
        </h1>
      `
    });
}
