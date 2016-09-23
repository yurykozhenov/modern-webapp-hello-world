import angularMaterial from 'angular-material';
import uirouter from 'angular-ui-router';

import './styles/main.scss';

import routing from './config/routing';
import icons from './config/icons';
import theme from './config/theme';

import navbar from './components/navbar';
import hello from './components/hello';
import goodbye from './components/goodbye';
import profile from './components/profile';

angular.module('app', [
  // Vendor modules
  angularMaterial,
  uirouter,
  // App modules
  navbar,
  hello,
  goodbye,
  profile
])
  .config(routing)
  .config(icons)
  .config(theme);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
