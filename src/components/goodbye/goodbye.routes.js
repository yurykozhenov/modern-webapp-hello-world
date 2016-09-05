class ResolveController {
  // @ngInject
  constructor(goodbye, $scope) {
    this.goodbye = goodbye;
  }
}

// @ngInject
export default function router($stateProvider) {
  $stateProvider
    .state('goodbye', {
      url: '/goodbye',
      template: '<goodbye-world goodbye="$resolve.goodbye"></goodbye-world>',
      controller: ResolveController,
      controllerAs: '$resolve',
      resolve: {
        // @ngInject
        goodbye() {
          return {value: 'Goodbye'};
        }
      }
    });
}
