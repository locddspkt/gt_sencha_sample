Ext.define('MyApp.model.Movie', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        mapping: 'id.attributes["im:id"]'
    }, {
        name: 'movie',
        mapping: '["im:name"].label'
    }, {
        name: 'image',
        mapping: '["im:image"][2].label'
    }],
    proxy: {
        type: 'jsonp',
        url: 'https://itunes.apple.com/us/rss/topmovies/limit=5/json',
        reader: {
            type: 'json',
            rootProperty: 'feed.entry'
        }
    }
});