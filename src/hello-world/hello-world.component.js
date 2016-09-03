export default {
  template: require('./hello-world.template.html'),
  controller: function() {
    const world = 'world!';
    this.text = `Hello, ${world}`;
  }
};
