console.log(ModernTunes);

Ext.define('ModernTunes.model.Tune', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.proxy.JsonP',
        'ModernTunes.service.ConstantsService'
    ],
    fields: [{
        name: 'id',
        mapping: 'id.attributes["im:id"]'
    }, {
        name: 'title',
        mapping: '["im:name"].label'
    }, {
        name: 'image',
        mapping: '["im:image"][2].label'
    }, {
        name: 'artist',
        mapping: '["im:artist"].label'
    }, {
        name: 'itunesstore',
        mapping: 'link[0].attributes.href'
    }, {
        name: 'preview',
        mapping: 'link[1].attributes.href'
    }, {
        name: 'release_date',
        mapping: '["im:releaseDate"].attributes.label'
    }],
    proxy: {
        type: 'jsonp',
        // url: 'https://itunes.apple.com/us/rss/topmusicvideos/limit=50/json',
        url: ModernTunes.service.ConstantsService.apiUrl + '/itunes_rss_top_music_videos_paging',
        reader: {
            type: 'json',
            rootProperty: 'data.feed.entry'
        }
    }
});