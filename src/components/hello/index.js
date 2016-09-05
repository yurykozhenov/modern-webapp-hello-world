import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './hello.routes';
import helloComponent from './hello.component';

import 'assets/img/cat.jpg';

export default angular.module('app.hello', [uirouter])
  .config(routing)
  .component('helloWorld', helloComponent)
  .name;
