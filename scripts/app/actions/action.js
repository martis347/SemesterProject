define(['pixi', 'app/gameContainer', 'cards/cards', 'utils/randomCards'], function(PIXI, gameContainer, cards, random) {

    var scale = 3;
    var buildingCard = {
        x: 150,
        y: 150
    }
    var workerCard = {
        x: 107,
        y: 150
    }



    function takeBuildingAction(cardInfo) {
        var buildingsHand = gameContainer.stage.children.filter(function(item) { return item.name === "buildingsHand" })[0];
        var card = cards.building.create(cardInfo.id, ["take", "resize"]);

        if (buildingsHand.children.length < 4) {
            card.position.x = buildingsHand.children.length * 60;
            card.position.y = 0;
        }
        else if (buildingsHand.children.length < 8) {
            card.position.x = (buildingsHand.children.length % 4) * 60;
            card.position.y = 160;
        }
        else {
            return;
        }

        addNewBuildingAction(cardInfo);

        card.children.filter(function(item) { return item.name == "take" }).x = 15;
        buildingsHand.addChild(card);
    }

    function addNewBuildingAction(cardInfo) {
        var buildingsDeck = gameContainer.stage.children.filter(function(item) { return item.name === "buildingsDeck" })[0];
        var newCard = cards.building.create(random.randomCardsList2(1)[0], ["take", "resize"]);

        newCard.position.x = cardInfo.index * 153;
        newCard.card.index = cardInfo.index;
        
        var oldCardArrayIndex;
        for (var i = 0; i < buildingsDeck.children.length; i++) {
            if(buildingsDeck.children[i].card.index === cardInfo.index){
                oldCardArrayIndex = i;
                break;
            }
        }
        
        buildingsDeck.removeChildAt(oldCardArrayIndex);
        buildingsDeck.addChild(newCard);
    }

    function resizeBuildingAction(card) {

        var bigBuilding = cards.building.create(card.id, ["take", "exit"]);

        bigBuilding.position.x = (gameContainer.gameWidth / 2) - (buildingCard.x * scale) / 2;
        bigBuilding.position.y = (gameContainer.gameHeigth / 2) - (buildingCard.y * scale) / 2;

        bigBuilding.scale.x = scale;
        bigBuilding.scale.y = scale;

        bigBuilding.hitArea = new PIXI.Rectangle(0, 0, buildingCard.x, buildingCard.y);
        bigBuilding.interactive = true;

        /*closeSprite = icon("exit", closeBuildingAction);
        closeSprite.position.x = 123;
        closeSprite.position.y = -8;
        bigSprite.addChild(closeSprite);

        takeSprite = icon("takeS", takeBuildingAction);
        takeSprite.position.x = 60;
        takeSprite.position.y = 120;
        bigSprite.addChild(takeSprite);

        addMouseOvers(bigSprite);*/

        gameContainer.stage.addChild(bigBuilding);
    }

    function closeBuildingAction(sprite) {
        sprite.parent.parent.removeChild(sprite.parent);
    }

    function takeWorkerAction(sprite) {
        addNewWorkerAction(sprite.parent);
        var container = gameContainer.stage.children[4];

        var cardSprite = sprite.parent;
        cardSprite.removeChild(cardSprite.children[0]);

        if (container.children.length >= 5) {
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

    function addNewWorkerAction(sprite) {
        var cardTexture = PIXI.Texture.fromImage("Resources/workers/" + getNewCardName2() + ".jpg");
        var cardSprite = new PIXI.Sprite(cardTexture);

        cardSprite = createWorkerCard(cardSprite);
        cardSprite.position.x = sprite.index * 110;
        cardSprite.index = sprite.index;

        addMouseOvers(cardSprite);

        gameContainer.stage.children[1].addChild(cardSprite);
    }

    function resizeWorkerAction(sprite) {
        var bigTexture = sprite.parent.texture;
        var bigSprite = new PIXI.Sprite(bigTexture);


        bigSprite.scale.x = scale;
        bigSprite.scale.y = scale;

        bigSprite.position.x = (gameContainer.gameWidth / 2) - (workerCard.x * scale) / 2;
        bigSprite.position.y = (gameContainer.gameHeigth / 2) - (workerCard.y * scale) / 2

        bigSprite.hitArea = new PIXI.Rectangle(0, 0, workerCard.x, workerCard.y);
        bigSprite.interactive = true;
        bigSprite.index = sprite.parent.index;

        closeSprite = icon("exit", closeWorkerAction);
        closeSprite.position.x = 80;
        closeSprite.position.y = -8;
        bigSprite.addChild(closeSprite);

        takeSprite = icon("takeS", takeWorkerAction);
        takeSprite.position.x = 38;
        takeSprite.position.y = 120;
        bigSprite.addChild(takeSprite);

        addMouseOvers(bigSprite);

        gameContainer.stage.addChild(bigSprite);
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

    return {
        takeBuildingAction,
        resizeBuildingAction,
        closeBuildingAction,
        takeWorkerAction,
        resizeWorkerAction,
        closeWorkerAction
    }
});