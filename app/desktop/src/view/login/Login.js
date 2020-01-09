Ext.define('ModernTunes.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'ModernTunes.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',
    bodyPadding: 10,
    title: 'Login Window',
    closable: false,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Username',
            allowBlank: false,
            enableKeyEvents : true,
            listeners: {
                keyup: 'onUsernameKeyUp'
            }
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false,
            enableKeyEvents : true,
            listeners: {
                keyup: 'onPasswordKeyUp'
            }
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Enter any non-blank password'
        }],
        buttons: [{
            text: 'Login',
            id: 'btnLogin',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }]
    }
});