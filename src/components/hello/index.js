import routing from './hello.routes';
import helloComponent from './hello.component';

export default angular.module('app.hello', [])
  .config(routing)
  .component('helloWorld', helloComponent)
  .name;
