define(['pixi', 'app/gameContainer', 'app/actions'], function(PIXI, gameContainer, action) {
	loadResources();
	requestAnimationFrame(animate);
    
	function animate() {
		requestAnimationFrame(animate);
		gameContainer.renderer.render(gameContainer.stage);
	}
    

function loadResources() {
	gameContainer.stage.addChild(background());

	var workersContainer = createWorkersContainer();
	gameContainer.stage.addChild(workersContainer);
	
	var buildingsContainer = createBuildingsContainer();
	gameContainer.stage.addChild(buildingsContainer);

	var takenBuildingsContainer = createTakenBuildingsContainer();
	gameContainer.stage.addChild(takenBuildingsContainer);

	var takenWorkersContainer = createTakenWorkersContainer();
	gameContainer.stage.addChild(takenWorkersContainer);
}

function background() {
	var backgroundImage = PIXI.Texture.fromImage("Resources/background.jpg");
	var backgroundSprite = new PIXI.Sprite(backgroundImage);

	return backgroundSprite;
}

function createWorkersContainer(){
	var workersContainer = new PIXI.Container();
	workersContainer.position.x = 1050;
	workersContainer.position.y = 380;

	var cards = randomCardsList(6);

	for (var i = 0; i < cards.length; i++) {
		var cardTexture = new PIXI.Texture.fromImage("Resources/workers/" + cards[i] + ".jpg");
		var cardSprite = new PIXI.Sprite(cardTexture);

		if(i != cards.length - 1)
		{
			cardSprite = createWorkerCard(cardSprite);
			cardSprite.position.x = i * 110;
			cardSprite.index = i;

			addMouseOvers(cardSprite);
		}
		else{
			cardSprite.position.x = 580;
		}

		workersContainer.addChild(cardSprite);
	}

	return workersContainer;
}

function createBuildingsContainer(){
	var buildingsContainer = new PIXI.Container();
	buildingsContainer.position.x = 790;
	buildingsContainer.position.y = 220;

	var cards = randomCardsList2(6);

	for (var i = 0; i < cards.length; i++) {
		var cardTexture = PIXI.Texture.fromImage("Resources/buildings/" + cards[i] + ".jpg");
		var cardSprite = new PIXI.Sprite(cardTexture);
		

		if(i != cards.length - 1)
		{
			cardSprite = createBuildingCard(cardSprite);
			cardSprite.position.x = i * 153;
			cardSprite.index = i;

			addMouseOvers(cardSprite);
		}
		else{
			cardSprite.position.x = 795;
		}

		buildingsContainer.addChild(cardSprite);
	}

	return buildingsContainer;
}

function createTakenBuildingsContainer(){
	var takenBuildingsContainer = new PIXI.Container();
	takenBuildingsContainer.position.x = 1400;
	takenBuildingsContainer.position.y = 540;

	return takenBuildingsContainer;
}

function createTakenWorkersContainer(){
	var takenWorkersContainer = new PIXI.Container();
	takenWorkersContainer.position.x = 1000;
	takenWorkersContainer.position.y = 550;

	return takenWorkersContainer;
}

function icon(name, action){
	var texture = PIXI.Texture.fromImage("Resources/" + name + ".png");
	var sprite = new PIXI.Sprite(texture);

	sprite.position.y = 125;
	sprite.buttonMode = true;
	sprite.interactive = true;
	sprite.visible = false;

	sprite.click = function (data) {
		action(this);
	}

	return sprite;
}

function createBuildingCard(cardSprite){
	var takeSprite = new PIXI.Sprite();
	takeSprite = icon("takeS", action.takeBuildingAction);
	takeSprite.position.x = 25;
	cardSprite.addChild(takeSprite);

	var resizeSprite = new PIXI.Sprite();
	resizeSprite = icon("resizeS", action.resizeBuildingAction);
	resizeSprite.position.x = 100;
	cardSprite.addChild(resizeSprite);

	cardSprite.hitArea = new PIXI.Rectangle(0, 0, 150, 150);
	cardSprite.interactive = true;

	return cardSprite;
}

function createWorkerCard(cardSprite){
	cardSprite.interactive = true;
	cardSprite.hitArea = new PIXI.Rectangle(0, 0, 107, 150);

	var takeSprite = new PIXI.Sprite();
	takeSprite = icon("takeS", action.takeWorkerAction);
	takeSprite.position.x = 10;

	cardSprite.addChild(takeSprite);

	var resizeSprite = new PIXI.Sprite();
	resizeSprite = icon("resizeS", action.resizeWorkerAction);
	resizeSprite.position.x = 70;
	
	cardSprite.addChild(resizeSprite);

	addMouseOvers(cardSprite);

	return cardSprite;
}

function addMouseOvers(sprite){
	sprite.mouseover = function(ev){
		this.children.forEach(function(element) {
			element.visible = true;
		});
	}

	sprite.mouseout = function(ev) {
		this.children.forEach(function(element) {
			element.visible = false;
		});
	}
}
function randomCardsList(cardsCount){
	var allCards = [21, 22, 23, 24, 31, 32, 33, 34, 41, 42, 43, 44, 51, 52, 53, 54, 61, 62, 63, 64, 71, 72, 73, 74, 
	81, 82, 83, 84, 91, 92, 93, 94, 101, 102, 103, 104, "j1", "j2", "j3", "j4", "q1", "q2", "q3", "q4", "k1", "k2", "k3", "k4",
	"a1", "a2", "a3", "a4","jo1", "jo2"];
	 
	var list = [];
	
	
	for(var i = 0; i<cardsCount; i++)
	{
		var number = Math.floor(Math.random() * 53);
		if(list.indexOf(allCards[number]) === -1)
		{
			list.push(allCards[number]);
		}
		else
		{
			i--;
		}
	}
	
	return list;
}	

function randomCardsList2(cardsCount){
	var allCards = ["J1", "J2", "J3", "J4", "K1", "K2", "K3", "K4"];
	 
	var list = [];
	
	
	for(var i = 0; i<cardsCount; i++)
	{
		var number = Math.floor(Math.random() * 7);
		if(list.indexOf(allCards[number]) === -1)
		{
			list.push(allCards[number]);
		}
		else
		{
			i--;
		}
	}
	
	return list;
}})