var gameWidth = window.screen.width / 1.1;
var gameHeigth = window.screen.height / 1.25;

document.getElementById('game-canvas').width = gameWidth;
document.getElementById('game-canvas').heigth = gameHeigth;

function init() {
	var rendererOptions = {
		antialiasing: true,
		transparent: false,
		resolution: window.devicePixelRatio,
		autoResize: false,
	}
	var renderer = PIXI.autoDetectRenderer(gameWidth, gameHeigth, {view:document.getElementById("game-canvas")});
	var stage = new PIXI.Container(0x66FF99);	
	loadResources(stage, renderer);
}

function loadResources(stage, renderer) {
	stage.addChild(background());
	loadCards(stage, renderer);
}

function background() {
	var backgroundImage = PIXI.Texture.fromImage("Resources/background.jpg");
	var backgroundSprite = new PIXI.Sprite(backgroundImage);

	return backgroundSprite;
}
function loadCards(stage, renderer){
	var cards = randomCardsList();
	var offset = 0;
	cards.forEach(function(card){
	
		var cardTexture = PIXI.Texture.fromImage("Resources/cards/" + card + ".png");
		var cardSprite = new PIXI.Sprite(cardTexture, 150, 150);
		
		cardSprite.buttonMode = true;
		cardSprite.interactive = true;
		cardSprite.position.x = 100 + offset;
		cardSprite.position.y = 100;
		
		cardSprite.scale.x = 0.5;
		cardSprite.scale.y = 0.5;
		
		stage.addChild(cardSprite);
		
		cardSprite.mousedown = cardSprite.touchstart = function(data){
			console.log(data);
		}			
		console.log(card);
		offset += 60;
	});

	requestAnimationFrame(animate);

	function animate() {
		requestAnimationFrame(animate);
		renderer.render(stage);
	}
}

function randomCardsList(){
	var allCards = [21, 22, 23, 24, 31, 32, 33, 34, 41, 42, 43, 44, 51, 52, 53, 54, 61, 62, 63, 64, 71, 72, 73, 74, 
	81, 82, 83, 84, 91, 92, 93, 94, 101, 102, 103, 104, "J1", "J2", "J3", "J4", "Q1", "Q2", "Q3", "Q4", "K1", "K2", "K3", "K4",
	"A1", "A2", "A3", "A4","JO1", "JO2"];
	 
	var list = [];
	
	
	for(var i = 0; i<6; i++)
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
	
	list = [81,82,83,91,92,93]
	return list;
}	