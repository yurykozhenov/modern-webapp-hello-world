import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './goodbye.routes';
import goodbyeComponent from './goodbye.component';

export default angular.module('app.goodbye', [uirouter])
  .config(routing)
  .component('goodbyeWorld', goodbyeComponent)
  .name;
