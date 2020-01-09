Ext.define('ModernTunes.service.ServiceBase', {
    alias: 'ServiceBase',
    statics: {
        ping: function() {
            console.log('ModernTunes.service.ServiceBase.ping()');
            var url = ModernTunes.globals.apiUrl + '/ping';
            ModernTunes.service.ServiceBase.get(url,null,function(response) {
                console.log(response);
            })
        },
        request: function (url, method, options, callback) {
            if (typeof (options) == 'undefined') options = {};
            if (!options) options = {};
            var headers = options.headers;
            if (typeof headers == 'undefined') headers = {};

            var params = options.params;

            if (typeof url == 'undefined') {
                if (callback) {
                    callback(false);
                    return;
                }
                return false;
            }

            Ext.Ajax.request({
                url: url,
                method: method,
                headers: headers,
                jsonData: params,
                disableCaching: false,
                success: function (response) {
                    var o = Ext.decode(response.responseText);
                    if (callback) {
                        callback(o);
                    } else {
                        console.dir(o);
                    }
                },
                failure: function (response) {
                    var o = Ext.decode(response.responseText);
                    console.dir(o);
                    if (callback) {
                        callback(o);
                    }
                }
            });
        },
        post: function (url, options, callback) {
            ModernTunes.service.ServiceBase.request(url, 'Post', options, callback);
        },
        get: function (url, options, callback) {
            ModernTunes.service.ServiceBase.request(url, 'Get', options, callback);
        },
        delete: function (url, options, callback) {
            ModernTunes.service.ServiceBase.request(url, 'Delete', options, callback);
        }
    },
});
