class HelloController {
  constructor() {
    const hello = 'Hello';
    this.text = `${hello}, world!`;
  }
}

export default {
  template: require('./hello.template.html'),
  controller: HelloController
};
