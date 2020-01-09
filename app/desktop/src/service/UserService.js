Ext.define('ModernTunes.service.UserService', {
    alias: 'UserService',
    requires: [
        'ModernTunes.service.ServiceBase'
    ],

    statics: {
        login: function (user, callback) {
            var url =  ModernTunes.globals.apiUrl + '/users';
            var query = {
                email: user.email,
                password: user.password,
            };
            ModernTunes.service.ServiceBase.post(url, {
                params:query
            },function(response) {
                if (response.code == 0) {
                    if (callback) {
                        callback(true);
                    }
                }
                else {
                    if (callback) {
                        callback(false);
                    }
                }
            });
        },
    },
});
