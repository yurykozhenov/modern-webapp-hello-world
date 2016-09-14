import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './profile.routes';
import profileComponent from './profile.component';

export default angular.module('app.profile', [uirouter])
  .config(routing)
  .component('profile', profileComponent)
  .name;
