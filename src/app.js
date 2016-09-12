import angular from 'angular';
import angularMaterial from 'angular-material';

import routing from './config/routing';
import icons from './config/icons';
import theme from './config/theme';

import navbar from './components/navbar';
import hello from './components/hello';
import goodbye from './components/goodbye';

angular.module('app', [
  // Vendor modules
  angularMaterial,

  // App modules
  navbar,
  hello,
  goodbye
])
  .config(routing)
  .config(icons)
  .config(theme);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
