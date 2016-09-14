// @ngInject
export default function router($stateProvider) {
  $stateProvider
    .state('profile', {
      url: '/profile',
      template: '<profile></profile>'
    });
}
