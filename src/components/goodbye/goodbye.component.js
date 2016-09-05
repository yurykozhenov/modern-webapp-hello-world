class GoodbyeController {
  // @ngInject
  constructor() {
    // const goodbye = 'Goodbye';
    this.text = `${this.goodbye.value}, world!`;
  }
}

export default {
  template: require('./goodbye.template.html'),
  controller: GoodbyeController,
  bindings: {
    goodbye: '='
  }
};
