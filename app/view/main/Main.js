/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */

Ext.create('Ext.window.Window', {
  id: 'winID',
  title: 'Information',
  closable: true,
  closeAction: 'hide',
  width: 400,
  modal: true,
  minWidth: 350,
  height: 150,
  layout: 'fit',
  items: [{
      html: '<div style="text-align: center; color: blue;"><b>Продукт, разработен от IT отдел на "Европът-2000" АД. <br>Година: 2016г.</b></div>'
    }]
});

var btnLogout = {
  text: '<b><span style="color: #DC143C;">Изход</span></b>',
  icon: 'resources/img/icon/logOut.png',
  handler: 'onClickButton'
};

var emptyBtn = {width: 0};

var btnShow = {
  text: '<b><span style="color: #083772;">ПОКАЖИ</span></b>',
  icon: 'resources/img/icon/book_open.png',
  handler: 'onInfoClick'
};

var changePassword = {
  text: '<b><span style="color: #083772;">Смяна на парола</span></b>',
  icon: 'resources/img/icon/password.png',
  handler: 'onInfoClick'
};

var changeOffice = {
  text: '<b><span style="color: #083772;">Смяна на офис</span></b>',
  icon: 'resources/img/icon/building_edit.png',
  handler: 'onInfoClick'
};

var textField = {
  xtype: 'textfield',
  width: 80,
  name: 'bCode',
  allowBlank: true
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
      xtype: 'title',
      text: '<div class="container">\n\
              <div class="left-element"> "Европът - 2000" АД</div>\n\
              <div class="middle-element"><img style= "width: 75px; height: 30px;" src="resources/img/icon/logo2.png"></div>\n\
              <div class="right-element">Куриер - 2016</div>\n\
            </div>',
      cls: 'panel-title'
    },
    {
      xtype: 'toolbar',
      border: false,
      items: [
        emptyBtn,
        '<b><span style="color: #083772;">БАРКОД: </span></b>',
        textField,
        btnShow,
        '->',
        changeOffice,
        '-',
        changePassword,
        '-',
        btnLogout
      ]
    },
    panel
  ]
});
