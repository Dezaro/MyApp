/* global Ext */

Ext.define('MyApp.view.tree.Tree', {
  extend: 'Ext.tree.Panel',
  xtype: 'treeList',
  requires: [
    'Ext.tree.*',
    'Ext.data.*'
  ],
  width: 250,
  title: 'Files',
  useArrows: true,
  store: 'TreeItems', 
  srets: '',
  rootVisible: false,
  displayField: 'name'
//  initComponent: function() {
//    Ext.apply(this, {
//      store: new Ext.data.TreeStore({
//        proxy: {
//          type: "ajax",
//          url: "data/items.php",
//          reader: {
//            type: "json"
//          }
//        },
//        root: {
//          expanded: true
//        },
//        folderSort: true,
//        sorters: [{
//            property: 'text',
//            direction: 'ASC'
//          }]
//      }),
//      viewConfig: {
//        plugins: {
//          ptype: 'treeviewdragdrop',
//          containerScroll: true
//        }
//      }
//    });
//    this.callParent();
//  }
});