Ext.define('ModernTunes.service.ItunesService', {
    alias: 'ItunesService',
    requires: [
        'ModernTunes.service.ServiceBase'
    ],

    statics: {
        search: function (params, callback) {
            var url = ModernTunes.globals.apiUrl + 'itunes_search';
            ModernTunes.service.ServiceBase.post(url, {
                params: params
            }, function (response) {
                console.log(response);
                return;
                if (response.code == 0) {
                    if (callback) {
                        callback(true);
                    }
                } else {
                    if (callback) {
                        callback(false);
                    }
                }
            });
        },
        rss_top_movies: function (limit, callback) {
            var url = ModernTunes.globals.apiUrl + 'itunes_rss_top_movies';
            ModernTunes.service.ServiceBase.post(url, {
                params: {limit: limit}
            }, function (response) {
                console.log(response);
                return;
                if (response.code == 0) {
                    if (callback) {
                        callback(true);
                    }
                } else {
                    if (callback) {
                        callback(false);
                    }
                }
            });
        },
        rss_top_music_videos: function (limit, callback) {
            var url = ModernTunes.globals.apiUrl + 'itunes_rss_top_music_videos';
            ModernTunes.service.ServiceBase.post(url, {
                params: {limit: limit}
            }, function (response) {
                console.log(response);
                return;
                if (response.code == 0) {
                    if (callback) {
                        callback(true);
                    }
                } else {
                    if (callback) {
                        callback(false);
                    }
                }
            });
        },
    },
});
