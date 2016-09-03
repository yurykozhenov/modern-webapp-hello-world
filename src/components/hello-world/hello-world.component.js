export default {
  template: require('./hello-world.template.html'),
  controller: function() {
    const hello = 'Hello';
    this.text = `${hello}, world!`;
  }
};
