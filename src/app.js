import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import config from './app.config';
import router from './app.router';

import navbarComponent from './components/navbar/navbar.component';

import helloWorldComponent from './components/hello-world/hello-world.component';
import goodbyeWorldComponent from './components/goodbye-world/goodbye-world.component';

export default angular.module('helloWorld', [
  uirouter
])
  .config(config)
  .config(router)
  .component('navbar', navbarComponent)
  .component('helloWorld', helloWorldComponent)
  .component('goodbyeWorld', goodbyeWorldComponent)
  .name; // Exports name of module to use it in external files
