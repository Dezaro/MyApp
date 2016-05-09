Ext.define('MyApp.view.tree.Tree', {
  extend: 'Ext.tree.Panel',
  xtype: 'treeList',
  id: 'treeList',
  requires: [
    'Ext.tree.*',
    'Ext.data.*',
    'MyApp.view.tree.TreeController'
  ],
  controller: 'tree-tree',
  width: 250,
  title: 'Files',
  useArrows: true,
  store: 'TreeItems',
  srets: '',
  rootVisible: false,
  displayField: 'name'
});