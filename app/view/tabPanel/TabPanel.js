Ext.define("MyApp.view.tabPanel.TabPanel", {
  extend: 'Ext.TabPanel',
  id: 'tabs12',
  alias: 'widget.tabPanel',
  reference: 'tabpanel',
  views: ['iframe.Iframe'],
  border: false,
  items: [
    {
      title: '',
      border: false,
      icon: "resources/img/icon/config1.png",
      glyph: null,
      items: [{
          xtype: 'image',
          width: 800,
          height: 450,
          style: 'margin-left: 15%;',
          src: 'resources/img/icon/evropat.jpg'
        }]
    }
  ]
});
