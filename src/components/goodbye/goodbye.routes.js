export default function($stateProvider) {
  $stateProvider
    .state('goodbye', {
      url: '/goodbye',
      template: '<goodbye-world></goodbye-world>'
      /* TODO: Add resolve
      resolve: {
        goodbye() {
          return {value: 'Goodbye'};
        }
      } */
    });
}
