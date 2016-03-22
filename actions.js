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
	addNewBuildingAction(sprite.parent);
	var container = window.game.stage.children[3];

	var cardSprite = sprite.parent;
	cardSprite.removeChild(cardSprite.children[0]);

	if(container.children.length >= 4){
		cardSprite.position.x = (container.children.length % 4) * 60;
		cardSprite.position.y = 160;
	}
	else{
		cardSprite.position.x = container.children.length * 60;
		cardSprite.position.y = 0;
	}

	cardSprite.scale.x = 1;
	cardSprite.scale.y = 1;

	cardSprite.children[0].position.x = 15;

	container.addChild(cardSprite);
}

function addNewBuildingAction(sprite) {
	var cardTexture = PIXI.Texture.fromImage("Resources/buildings/" + getNewCardName() + ".jpg");
	var cardSprite = new PIXI.Sprite(cardTexture);

	cardSprite = createBuildingCard(cardSprite);
	cardSprite.position.x = sprite.index * 153;
	cardSprite.index = sprite.index;

	addMouseOvers(cardSprite);

	window.game.stage.children[2].addChild(cardSprite);
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
	bigSprite.index = sprite.parent.index;

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
	addNewWorkerAction(sprite.parent);
	var container = window.game.stage.children[4];

	var cardSprite = sprite.parent;
	cardSprite.removeChild(cardSprite.children[0]);

	if(container.children.length >= 5) {
		cardSprite.position.x = (container.children.length % 5) * 60;
		cardSprite.position.y = 160;
	}
	else {
		cardSprite.position.x = container.children.length * 60;
		cardSprite.position.y = 0;
	}

	cardSprite.scale.x = 1;
	cardSprite.scale.y = 1;

	cardSprite.children[0].position.x = 15;

	container.addChild(cardSprite);
}

function addNewWorkerAction(sprite){
	var cardTexture = PIXI.Texture.fromImage("Resources/workers/" + getNewCardName2() + ".jpg");
	var cardSprite = new PIXI.Sprite(cardTexture);

	cardSprite = createWorkerCard(cardSprite);
	cardSprite.position.x = sprite.index * 110;
	cardSprite.index = sprite.index;

	addMouseOvers(cardSprite);

	window.game.stage.children[1].addChild(cardSprite);
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
	bigSprite.index = sprite.parent.index;

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

function getNewCardName() {
	return randomCardsList2(1)[0];
}
function getNewCardName2() {
	return randomCardsList(1)[0];
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