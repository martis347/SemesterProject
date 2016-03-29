requirejs.config({
    baseUrl: 'scripts/lib',
    paths: {
        app: '../app',
        elements: '../app/elements',
        actions: '../app/actions',
        containers: '../app/elements/containers',
        cards: '../app/elements/cards',
        utils: '../app/elements/utils',
        api: '../app/api'
    },
    shim: {
        "actions": { exports: "actions" },
        "action": "actions" 
    }
});
