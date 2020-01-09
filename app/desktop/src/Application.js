Ext.define('ModernTunes.Application', {
    extend: 'Ext.app.Application',
    name: 'ModernTunes',
    requires: ['ModernTunes.*'],
    services: [
        'ModernTunes.service.ServiceBase',
        'ModernTunes.service.ItunesService',
    ],

    launch: function () {
        Ext.Viewport.add([{xtype: 'mainview'}]);

        return;

        ModernTunes.service.ItunesService.rss_top_movies(20,function(response) {
            console.log(response);
        });

        return;


        ModernTunes.service.ItunesService.rss_top_movies(20,function(response) {
            console.log(response);
        });
        return;

        ModernTunes.service.ItunesService.search({
            'term':'jack johnson',
        },function(response) {
            console.log(response);
        });

        return;
        Ext.Viewport.add([{xtype: 'mainview'}]);
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload()
                }
            }
        )
    }
})
