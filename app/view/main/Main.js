/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */

var btnLogout = {
  text: 'logout',
  handler: 'onClickButton'
};

var btnInfo = {
  text: 'info',
  handler: ''
};

var tree = {
  xtype: 'treeList',
  useArrows: true,
  bind: {
    title: '{name}'
  },
  title: 'Модули',
  autoScroll: false,
  collapsible: true,
  collapseDirection: Ext.Component.DIRECTION_LEFT,
  collapsed: false,
  floatable: false,
  region: 'west',
  width: 250,
  split: true
};

var tabPanel = {
  xtype: 'panel',
  region: 'center',
  border: false,
  autoScroll: false,
  scrollable: false,
  layout: {
    type: 'fit'
  },
  items: [{
      xtype: 'tabPanel',
      scrollable: false,
      layout: {
        type: 'fit'
      }
    }
  ]
};

var panel = {
  xtype: 'panel',
  autoScroll: false,
  animScroll: true,
  border: false,
  layout: {
    type: 'border',
    padding: 3
  },
  items: [
    tree,
    tabPanel
  ],
  bbar: ['Content appropriate for the current navigation'],
  flex: 1
};

Ext.define('MyApp.view.main.Main', {
  extend: 'Ext.container.Container',
  requires: [
    'MyApp.view.main.MainController',
    'MyApp.view.main.MainModel',
    'MyApp.view.tree.Tree',
    'MyApp.view.tabPanel.TabPanel'
  ],
  xtype: 'app-main',
  controller: 'main',
  plugins: 'viewport',
  viewModel: {
    type: 'main'
  },
//  layout: {
//    type: 'border'
//  },
  layout: {
    type: 'vbox',
    align: 'stretch'
  },
  items: [
    {
      xtype: 'toolbar',
      border: false,
      items: [
        btnInfo,
        '->',
        btnLogout
      ]
    },
    panel
  ]
});
