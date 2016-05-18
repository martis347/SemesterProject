requirejs.config({
    baseUrl: 'scripts/app',
    paths: {
        elements: 'elements',
        actions: 'actions',
        containers: 'elements/containers',
        cards: 'elements/cards',
        utils: 'elements/utils',
        api: 'api',
        jquery: 'https://code.jquery.com/jquery-2.2.3.min',
		pixi: '../lib/pixi',
		sweetAlert: '../lib/sweetalert.min'
    },
	optimize: 'uglify'
});

requirejs(['init'], function (init) {
    init();
});
