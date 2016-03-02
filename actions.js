(function(){

var scale = 3;
var buildingCard = {
	x : 150,
	y : 150
}
var workerCard = {
	x : 107,
	y : 150
}

function takeBuildingAction(sprite) {
}

function resizeBuildingAction(sprite) {
	var bigTexture = sprite.parent.texture;
	var bigSprite = new PIXI.Sprite(bigTexture);

	bigSprite.position.x = (window.game.gameWidth / 2) - (buildingCard.x * scale) / 2;
	bigSprite.position.y = (window.game.gameHeigth / 2) - (buildingCard.y * scale) / 2;

	bigSprite.scale.x = scale;
	bigSprite.scale.y = scale;

	bigSprite.hitArea = new PIXI.Rectangle(0, 0, buildingCard.x, buildingCard.y);
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

function takeWorkerAction(sprite) {
}

function resizeWorkerAction(sprite) {
	var bigTexture = sprite.parent.texture;
	var bigSprite = new PIXI.Sprite(bigTexture);


	bigSprite.scale.x = scale;
	bigSprite.scale.y = scale;

	bigSprite.position.x = (window.game.gameWidth / 2) - (workerCard.x * scale) / 2;
	bigSprite.position.y = (window.game.gameHeigth / 2) - (workerCard.y * scale) / 2

	bigSprite.hitArea = new PIXI.Rectangle(0, 0, workerCard.x, workerCard.y);
	bigSprite.interactive = true;

	closeSprite = icon("exitS", closeWorkerAction);
	closeSprite.position.x = 80;
	closeSprite.position.y = -8;
	bigSprite.addChild(closeSprite);

	takeSprite = icon("takeS", takeWorkerAction);
	takeSprite.position.x = 38;
	takeSprite.position.y = 120;
	bigSprite.addChild(takeSprite);

	addMouseOvers(bigSprite);

	window.game.stage.addChild(bigSprite);
}

function closeWorkerAction(sprite) {
	sprite.parent.parent.removeChild(sprite.parent);
}


	window.game = {};
	window.game.ActionsModule = {
		takeBuildingAction : takeBuildingAction,
		resizeBuildingAction : resizeBuildingAction,
		closeBuildingAction : closeBuildingAction,
		takeWorkerAction : takeWorkerAction,
		resizeWorkerAction : resizeWorkerAction,
		closeWorkerAction : closeWorkerAction
	}
})(window)