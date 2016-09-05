import angular from 'angular';

import ionicSetup from './ionic.setup';

import routing from './app.routes';

import navbar from './components/navbar';
import hello from './components/hello';
import goodbye from './components/goodbye';

angular.module('app', [
  'ionic',
  navbar,
  hello,
  goodbye
])
  .config(routing)
  .run(ionicSetup);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
