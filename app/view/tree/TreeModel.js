/* global Ext */

Ext.define('MyApp.view.tree.TreeModel', {
  extend: 'Ext.data.Model',
  alias: 'viewmodel.tree-tree',
  data: {
    name: 'MyApp'
  },
  fields: [
    'item_id',
    'name',
    'description'
  ]
});
