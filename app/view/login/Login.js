var userName = {
  xtype: 'textfield',
  id: 'uNameLog',
  name: 'username',
  labelWidth: 55,
  fieldLabel: 'Username',
  allowBlank: true
};

var password = {
  xtype: 'textfield',
  id: 'passLog',
  name: 'password',
  inputType: 'password',
  labelWidth: 55,
  fieldLabel: 'Password',
  allowBlank: true
};

var btnLogin = {
  text: 'Login',
  formBind: true,
  listeners: {
    click: 'onLoginClick'
  }
};

var loginForm = {
  xtype: 'form',
  border: false,
  bodyStyle: 'background:none; ',
  reference: 'form',
  items: [
    userName,
    password
  ],
  buttons: [
    btnLogin
  ],
  buttonAlign: 'center'
};

Ext.define("MyApp.view.login.Login", {
  extend: 'Ext.window.Window',
  viewModel: {
    type: "login-login"
  },
  alias: 'widget.login',
  xtype: 'login',
  requires: [
    'MyApp.view.login.LoginController'
  ],
  controller: "login-login",
  bodyPadding: 10,
  title: 'Login Window',
  closable: false,
  autoShow: true,
  layout: {
    type: 'vbox',
    padding: '5',
    align: 'center',
    pack: 'center'
  },
  items: [
    loginForm
  ]
});
