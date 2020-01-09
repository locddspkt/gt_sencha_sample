Ext.application({
    extend: 'ModernTunes.Application',
    name: 'ModernTunes',
    requires: [
        // This will automatically load all classes in the ModernTunes namespace
        // so that application classes do not need to require each other.
        'ModernTunes.*'
    ],
})