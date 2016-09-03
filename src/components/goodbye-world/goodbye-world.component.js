export default {
  template: require('./goodbye-world.template.html'),
  controller: function() {
    const goodbye = 'Goodbye';
    this.text = `${goodbye}, world!`;
  }
};
