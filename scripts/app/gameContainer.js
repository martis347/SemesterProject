define(['pixi'], function (PIXI) {
    var apiUri = "http://localhost:5000/";
    var userData;
    var gameWidth = window.screen.width / 1.1; //1745.4545454545453
    var gameHeigth = window.screen.height / 1.25; //864
    var scaleRatio = gameWidth / (1920 / 1.1);
    var renderer = PIXI.autoDetectRenderer(gameWidth, gameHeigth, { view: document.getElementById("game-canvas") }, true);
    var stage = new PIXI.Container(0x66FF99);
    stage.scale.x = scaleRatio;
    stage.scale.y = scaleRatio;
   	stage.interactive = true;
    var card = {
        scale: 3,
        buildingCard: {
            x: 150,
            y: 150
        },
        workerCard: {
            x: 107,
            y: 150
        }
    }

    return {
        gameWidth,
        gameHeigth,
        scaleRatio,
        renderer,
        stage,
        card,
        apiUri,
        userData
    }
});