Ext.define('MyApp.view.login.LoginController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.login-login',
  onLoginClick: function () {
    Ext.Ajax.request({
      url: 'data/login.php',
      method: 'POST',
      params: {
        userName: Ext.getCmp('uNameLog').getValue(),
        password: Ext.getCmp('passLog').getValue()
      },
      scope: this,
      success: this.onLoginSuccess,
      failure: this.onLoginFailure
    });
  },
  onLoginFailure: function (err) {
    Ext.MessageBox.alert('Error occured during Login', 'Please try again!');
  },
  onLoginSuccess: function (response, opts) {
    response = Ext.decode(response.responseText);
    if (response.success) {
      localStorage.setItem('loggedIn', true);
      this.getView().destroy();
      Ext.widget('app-main');
    } else {
      Ext.MessageBox.alert('Login failed', response.message);
    }
  }
});
