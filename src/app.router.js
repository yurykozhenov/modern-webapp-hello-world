export default function($stateProvider) {
  $stateProvider
    .state('root', {
      url: '/',
      template: `
        <h1 class="text-center">
          I AM THE GREAT BLANK PAGE! BEHOLD MY POWER!
        </h1>
      `
    })
    .state('hello', {
      url: '/hello',
      // component: 'helloWorld' // FIXME: Make this work!
      template: '<hello-world></hello-world>'
    })
    .state('goodbye', {
      url: '/goodbye',
      // component: 'goodbyeWorld' // FIXME: Make this work!
      template: '<goodbye-world></goodbye-world>'
    });
}
