// @ngInject
export default $mdThemingProvider => {
  $mdThemingProvider.definePalette('customBlue', {
    50: '#9BBBDD',
    100: '#87ADD6',
    200: '#739FD0',
    300: '#5F92C9',
    400: '#4B84C2',
    500: '#3877bc', // XXX: Toolbar color
    600: '#326BA9',
    700: '#2C5F96',
    800: '#275383',
    900: '#214770',
    A100: '#1C3B5E',
    A200: '#162F4B',
    A400: '#102338',
    A700: '#0B1725',
    contrastDefaultColor: 'light'
  });

  $mdThemingProvider.definePalette('customOrange', {
    50: '#FFFFFF',
    100: '#FDF6EA',
    200: '#FDF6EA',
    300: '#FCEDD6',
    400: '#FBE4C2',
    500: '#FADBAE',
    600: '#F9D29A',
    700: '#F7C986',
    800: '#F6C072',
    900: '#F5B75E',
    A100: '#F4AE4A',
    A200: '#f3a536', // XXX: Active navbar element border-bottom and text color
    A400: '#DA9430',
    A700: '#C2842B',
    contrastDefaultColor: 'light'
  });

  $mdThemingProvider.theme('default')
    .primaryPalette('customBlue')
    .accentPalette('customOrange');
};
