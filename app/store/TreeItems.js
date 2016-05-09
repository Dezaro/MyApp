Ext.define("MyApp.store.TreeItems", {
  extend: "Ext.data.TreeStore",
  model: "MyApp.view.tree.TreeModel",
  autoLoad: true,
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
