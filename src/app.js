// import './styles.scss'
// import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';

import helloWorldComponent from './hello-world/hello-world.component';

export default angular.module('helloWorld', [
  // Dependencies
])
  .component('helloWorld', helloWorldComponent);
