/* global Ext */

Ext.define('MyApp.view.tree.TreeController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.tree-tree',
  init: function() {
    this.control({
      'treeList': {
        select: this.onItemSelect
      }
    });
  },
  onItemSelect: function() {
    return console.log('Item is selected! :)');
  }
});
