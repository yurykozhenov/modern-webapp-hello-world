// @ngInject
export default function router($stateProvider) {
  $stateProvider
    .state('hello', {
      url: '/hello',
      template: '<hello-world></hello-world>'
    })
    .state('hello.someone', {
      url: '/:someone',
      template: '<h3 class="text-center">Hello, {{$ctrl.someone}}!</h3>',
      controller($stateParams) {
        this.someone = $stateParams.someone;
      },
      controllerAs: '$ctrl'
    });
}
