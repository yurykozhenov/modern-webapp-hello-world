import angular from 'angular';
import angularMaterial from 'angular-material';

import routing from './app.routes';
import icons from './config/icons';
import theme from './config/theme';

import navbar from './components/navbar';
import hello from './components/hello';
import goodbye from './components/goodbye';

angular.module('app', [
  angularMaterial,
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
