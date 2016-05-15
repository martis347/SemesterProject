requirejs.config({
    baseUrl: 'scripts/lib',
    paths: {
        app: '../app',
        elements: '../app/elements',
        actions: '../app/actions',
        containers: '../app/elements/containers',
        cards: '../app/elements/cards',
        utils: '../app/elements/utils',
        api: '../app/api',
        jquery: 'https://code.jquery.com/jquery-2.2.3.min'
    },
    shim: {
        "actions": { exports: "actions" },
        "action": "actions" 
    }
});