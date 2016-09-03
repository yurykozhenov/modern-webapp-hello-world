import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';

import helloWorldComponent from './components/hello-world/hello-world.component';
import goodbyeWorldComponent from './components/goodbye-world/goodbye-world.component';

export default angular.module('helloWorld', [
  // Dependencies
])
  .component('helloWorld', helloWorldComponent)
  .component('goodbyeWorld', goodbyeWorldComponent);
