/* global Ext */

Ext.define('MyApp.view.tree.TreeController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.tree-tree',
  requires: [
    'MyApp.view.iframe.Iframe'
  ],
  tabs: null,
  maxTabs: 5,
  init: function () {
    this.control({
      'treeList': {
        select: this.onItemSelect
      }
    });
  },
  onItemSelect: function (selModel, selection) {
    // Executed only when selection is a leaf
    this.tabs = Ext.getCmp('tabs12');
    var active = false;
    if (selection.data.leaf) {
      for (var i = 0; i < this.tabs.items.length; ++i) {
        if (selection.data.item_id === this.tabs.items.items[i].id) {
          this.tabs.setActiveTab(i);
          active = true;
        }
      }
      if (!active && this.tabs.items.length <= this.maxTabs) {
        this.tabs.add({
          id: selection.data.item_id,
          title: selection.data.name,
          closable: true,
          border: false,
          items: [
            {
              xtype: 'iframe',
              id: 'framePanel-' + selection.data.item_id,
              layout: {
                align: 'stretch'
              }
            }
          ]
        });
        this.tabs.setActiveTab(this.tabs.items.length - 1);
        Ext.getCmp('framePanel-' + selection.data.item_id).setSrc(selection.raw.description);
      }
    }
  }
});
