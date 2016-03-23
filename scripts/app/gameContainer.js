define(['pixi'], function (PIXI) {
    
    var gameWidth = window.screen.width / 1.1; //1745.4545454545453
	var gameHeigth =  window.screen.height / 1.25; //864
	var scaleRatio = gameWidth / (1920 / 1.1);
    var renderer  = PIXI.autoDetectRenderer(gameWidth, gameHeigth, {view:document.getElementById("game-canvas")}, true);
	var stage = new PIXI.Container(0x66FF99);	
	stage.scale.x = scaleRatio;
	stage.scale.y = scaleRatio;
   	stage.interactive = true;

    return {
        gameWidth,
        gameHeigth,
        scaleRatio,
        renderer,
        stage
    }
});