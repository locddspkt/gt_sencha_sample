Ext.define('ModernTunes.view.TunesView', {
    extend: 'Ext.dataview.DataView',
    xtype: 'tunesview',
    scrollable: true,
    layout: {
        type: 'box',
        pack: 'space-around',
        wrap: true
    },
    itemTpl: [
        '<figure>',
        '<div class="thumbnail" style="background-image:url(\'{image}\')"></div>',
        '<figcaption><div class=\'title\'>{title}</div><div class=\'artist\'>{artist}</div></figcaption>',
        '</figure>'
    ],
    itemCls: 'video',
    cls: 'tunes-view',
});