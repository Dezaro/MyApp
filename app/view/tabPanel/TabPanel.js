Ext.define("MyApp.view.tabPanel.TabPanel", {
  extend: 'Ext.TabPanel',
  id: 'tabs12',
  alias: 'widget.tabPanel',
  reference: 'tabpanel',
  views: ['iframe.Iframe'],
  border: false,
  items: [{
      title: '',
      border: false,
      icon: "resources/img/icon/config1.png",
      glyph: null
    }
  ]
});
