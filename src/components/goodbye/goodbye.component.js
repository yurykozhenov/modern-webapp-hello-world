class GoodbyeController {
  constructor() {
    const goodbye = 'Goodbye';
    this.text = `${goodbye}, world!`;
  }
}

export default {
  template: require('./goodbye.template.html'),
  controller: GoodbyeController
};
