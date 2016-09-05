import angular from 'angular';

import routing from './app.routes';

import navbar from './components/navbar';
import hello from './components/hello';
import goodbye from './components/goodbye';

angular.module('app', [
  navbar,
  hello,
  goodbye
])
  .config(routing);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
