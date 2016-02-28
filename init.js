var gameWidth = window.screen.width / 1.1;
var gameHeigth = window.screen.height / 1.25;
var scaleRatio = gameWidth / (1920 / 1.1);

document.getElementById('game-canvas').width = gameWidth * scaleRatio;
document.getElementById('game-canvas').heigth = gameHeigth * scaleRatio;

function init() {
	var rendererOptions = {
		antialiasing: true,
		transparent: false,
		resolution: window.devicePixelRatio,
		autoResize: false,
	}
	var renderer = PIXI.autoDetectRenderer(gameWidth, gameHeigth, {view:document.getElementById("game-canvas")}, true);
	var stage = new PIXI.Container(0x66FF99);	
	stage.scale.x = scaleRatio;
	stage.scale.y = scaleRatio;
	stage.interactive = true;


	loadResources(stage, renderer);

	var cont = new PIXI.Container();
	var cardTexture = PIXI.Texture.fromImage("Resources/workers/" + "J1" + ".jpg");
	var test = new PIXI.Sprite(cardTexture);
	test.interactive = true;
	test.hitArea =  new PIXI.Rectangle(0,0, 200, 200);
	test.click = function(ev) { console.log("clicked"); }
	test.mouseover = function(ev) { console.log("over"); }
	test.mouseout = function(ev) { console.log("out"); }
	test.position.x = 50;
	test.position.y = 50;
	cont.addChild(test);

	requestAnimationFrame(animate);
	function animate() {
		requestAnimationFrame(animate);
		renderer.render(stage);
	}
}

function loadResources(stage, renderer) {
	stage.addChild(background());

	var workersContainer = createWorkersContainer();
	stage.addChild(workersContainer);
	
	var buildingsContainer = new createBuildingsContainer();
	stage.addChild(buildingsContainer);
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
			cardSprite.buttonMode = true;
			cardSprite.interactive = true;
			cardSprite.position.x = i * 110;
			cardSprite.hitArea = new PIXI.Rectangle(0, 0, 107, 150);

			var takeSprite = new PIXI.Sprite();
			takeSprite = takeIcon();
			takeSprite.position.x = 70;

			cardSprite.addChild(takeSprite);

			var resizeSprite = new PIXI.Sprite();
			resizeSprite = resizeIcon();
			resizeSprite.position.x = 10;
			
			cardSprite.addChild(resizeSprite);

			cardSprite.click = cardSprite.touchstart = function(ev){
				console.log("click");
			}

			cardSprite.mouseover = function(ev){
				this.children.forEach(function(element) {
					element.visible = true;
				});
			}

			cardSprite.mouseout = function(ev) {
				this.children.forEach(function(element) {
					element.visible = false;
				});
			}
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
		cardSprite.hitArea = new PIXI.Rectangle(0, 0, 150, 150);

		var takeSprite = new PIXI.Sprite();
		takeSprite = takeIcon();
		takeSprite.position.x = 25;

		cardSprite.addChild(takeSprite);

		var resizeSprite = new PIXI.Sprite();
		resizeSprite = resizeIcon();
		resizeSprite.position.x = 100;
		cardSprite.addChild(resizeSprite);

		if(i != cards.length - 1)
		{
			cardSprite.buttonMode = true;
			cardSprite.interactive = true;
			cardSprite.position.x = i * 153;

			cardSprite.click = function(data){
				console.log(data);
			}

			cardSprite.click = cardSprite.touchstart = function(ev){
				console.log("click");
			}

			cardSprite.mouseover = function(ev){
				this.children.forEach(function(element) {
					element.visible = true;
				});
			}

			cardSprite.mouseout = function(ev) {
				this.children.forEach(function(element) {
					element.visible = false;
				});
			}
		}
		else{
			cardSprite.position.x = 795;
		}

		buildingsContainer.addChild(cardSprite);
	}

	return buildingsContainer;
}

function takeIcon(action){
	var take = PIXI.Texture.fromImage("Resources/takeS.png");
	var takeSprite = new PIXI.Sprite(take);

	takeSprite.position.y = 125;

	takeSprite.interactive = true;
	takeSprite.visible = false;

	takeSprite.mouseup = action;

	return takeSprite;
}

function resizeIcon(action){
	var resize = new PIXI.Texture.fromImage("Resources/resizeS.png");
	var resizeSprite = new PIXI.Sprite(resize);

	resizeSprite.position.y = 125;

	resizeSprite.interactive = true;
	resizeSprite.visible = false;

	resizeSprite.click = action;
	
	return resizeSprite;
}

function takeWorker(){
	console.log("You have taken worker!");
}

function takeBuilding(){
	console.log("You have taken building!");
}

function randomCardsList(cardsCount){
	var allCards = [21, 22, 23, 24, 31, 32, 33, 34, 41, 42, 43, 44, 51, 52, 53, 54, 61, 62, 63, 64, 71, 72, 73, 74, 
	81, 82, 83, 84, 91, 92, 93, 94, 101, 102, 103, 104, "J1", "J2", "J3", "J4", "Q1", "Q2", "Q3", "Q4", "K1", "K2", "K3", "K4",
	"A1", "A2", "A3", "A4","JO1", "JO2"];
	 
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
}