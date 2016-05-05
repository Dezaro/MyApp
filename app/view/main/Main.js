/* global Ext */

/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.Main', {
  extend: 'Ext.container.Container',
  requires: [
    'MyApp.view.main.MainController',
    'MyApp.view.main.MainModel',
    'MyApp.view.tree.Tree'
  ],
  xtype: 'app-main',
  controller: 'main',
  viewModel: {
    type: 'main'
  },
  layout: {
    type: 'border'
  },
  items: [{
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
    }, {
      region: 'center',
      xtype: 'tabpanel',
      items: [{
          title: 'Tab 1',
          html: '<h2>Content appropriate for the current navigation.</h2>'
        }]
    }]
});
