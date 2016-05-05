/* global Ext */


Ext.define("MyApp.store.TreeItems", {
  extend: "Ext.data.TreeStore",
//  model: {
//    xtype: 'datamodel',
//    fields: [
//      'item_id',
//      'name',
//      'description'
//    ]
//  },
  model: "MyApp.view.tree.TreeModel",
  autoLoad: true,
  // stores: ["TreeItems"],
  // models: ["TreeModel"],
  proxy: {
    type: "ajax",
    url: "data/items.php",
    reader: {
      type: "json"
    }
  },
  root: {
    expanded: true
  }
});
