import routing from './goodbye.routes';
import goodbyeComponent from './goodbye.component';

export default angular.module('app.goodbye', [])
  .config(routing)
  .component('goodbyeWorld', goodbyeComponent)
  .name;
