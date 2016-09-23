import routing from './profile.routes';
import profileComponent from './profile.component';

export default angular.module('app.profile', [])
  .config(routing)
  .component('profile', profileComponent)
  .name;
