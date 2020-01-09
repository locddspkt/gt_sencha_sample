Ext.define('ModernTunes.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    requires: [
        // 'ModernTunes.service.ServiceBase',
        // 'ModernTunes.service.UserService'
    ],

    onLoginClick: function () {
        var usernameComponent = Ext.ComponentQuery.query("[name=username]")[0];
        var passwordComponent = Ext.ComponentQuery.query("[name=password]")[0];

        var user = {
            email: usernameComponent.value,
            password: passwordComponent.value,
        };

        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.

        var view = this.getView();
        ModernTunes.service.UserService.login(user, function(logged) {
            if (logged) {
                // Set the localStorage value to true
                localStorage.setItem("TutorialLoggedIn", true);

                // Remove Login Window
                view.destroy();

                // Add the main view to the viewport
                Ext.widget('mainview');
            }
            else {
                Ext.Msg.alert('Error', 'Invalid user.', function(btn, text){
                    usernameComponent.focus();
                });
            }
        });
    },
    onUsernameKeyUp: function (field, event) {
        var passwordComponent = Ext.ComponentQuery.query("[name=password]")[0];
        if (event.keyCode == 13) {
            passwordComponent.focus();
        }
    },
    onPasswordKeyUp: function (field, event) {
        var buttonLoginComponent = Ext.ComponentQuery.query("#btnLogin")[0];

        var view = this.getView();

        if (event.keyCode == 13) {
            //todo: fire the click of the button
        }
    },
});