(function(){

function takeBuildingAction(sprite) {
}

function resizeBuildingAction(sprite) {
	var bigTexture = sprite.parent.texture;
	var bigSprite = new PIXI.Sprite(bigTexture);

	bigSprite.position.x = (window.game.gameWidth / 2) - 450 / 2;
	bigSprite.position.y = (window.game.gameHeigth / 2) - 450 / 2;

	bigSprite.scale.x = 3;
	bigSprite.scale.y = 3;
	bigSprite.hitArea = new PIXI.Rectangle(0, 0, 150, 150);
	bigSprite.interactive = true;

	closeSprite = icon("exitS", closeBuildingAction);
	closeSprite.position.x = 123;
	closeSprite.position.y = -8;
	bigSprite.addChild(closeSprite);

	takeSprite = icon("takeS", takeBuildingAction);
	takeSprite.position.x = 60;
	takeSprite.position.y = 120;
	bigSprite.addChild(takeSprite);

	addMouseOvers(bigSprite);

	window.game.stage.addChild(bigSprite);
}

function closeBuildingAction(sprite) {
	sprite.parent.parent.removeChild(sprite.parent);
}


	window.game = {};
	window.game.ActionsModule = {
		takeBuildingAction : takeBuildingAction,
		resizeBuildingAction : resizeBuildingAction,
		closeBuildingAction : closeBuildingAction
	}
})(window)