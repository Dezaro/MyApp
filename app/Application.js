/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('MyApp.Application', {
  extend: 'Ext.app.Application',
  name: 'MyApp',
  requires: ['MyApp.view.Viewport'],
  stores: [
    // TODO: add global / shared stores here
    'TreeItems'
  ],
  views: [
    'MyApp.view.login.Login',
    'MyApp.view.main.Main'
  ],
  launch: function() {
    // TODO - Launch the application
    var loggedIn;
    loggedIn = localStorage.getItem('loggedIn');
    Ext.widget(loggedIn ? 'app-main' : 'login');
  }
});
