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
        if(cardInfo.preview){
            closeAction();
        }
        var buildingsHand = gameContainer.stage.children.filter(function(item) { return item.name === "buildingsHand" })[0];
        var card = cards.building.create(cardInfo.id, "hand");
        card.card.inDeck = false;
        
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
        var newCard = cards.building.create(random.randomCardsList2(1)[0], "init");

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
        
        closeAction();
        var bigCard = cards.building.create(card.id, card.inDeck ? "previewDeck" : "previewHand");

        bigCard.position.x = (gameContainer.gameWidth / 2) ;
        bigCard.position.y = (gameContainer.gameHeigth / 2) ;

        bigCard.scale.x = scale;
        bigCard.scale.y = scale;

        bigCard.hitArea = new PIXI.Rectangle(0, 0, buildingCard.x, buildingCard.y);
        bigCard.interactive = true;
        
        bigCard.card.preview = true;
        bigCard.card.index = card.index;

        gameContainer.stage.addChild(bigCard);
    }

    function closeAction() {
        for(var i = 0; i < gameContainer.stage.children.length; i++){
            if(gameContainer.stage.children[i].card !== undefined && gameContainer.stage.children[i].card.preview){
                gameContainer.stage.removeChildAt(i);
            }
        }
    }

    function takeWorkerAction(cardInfo) {
        if(cardInfo.preview){
            closeAction();
        }
        var workersHand = gameContainer.stage.children.filter(function(item) { return item.name === "workersHand" })[0];
        var card = cards.worker.create(cardInfo.id, "hand");

        if (workersHand.children.length < 4) {
            card.position.x = workersHand.children.length * 60;
            card.position.y = 0;
        }
        else if (workersHand.children.length < 8) {
            card.position.x = (workersHand.children.length % 4) * 60;
            card.position.y = 160;
        }
        else {
            return;
        }

        addNewWorkerAction(cardInfo);

        card.children.filter(function(item) { return item.name == "take" }).x = 15;
        workersHand.addChild(card);
    }

    function addNewWorkerAction(cardInfo) {
        var workersDeck = gameContainer.stage.children.filter(function(item) { return item.name === "workersDeck" })[0];
        var newCard = cards.worker.create(random.randomCardsList(1)[0], "init");

        newCard.position.x = cardInfo.index * 110;
        newCard.card.index = cardInfo.index;
        
        var oldCardArrayIndex;
        for (var i = 0; i < workersDeck.children.length; i++) {
            if(workersDeck.children[i].card.index === cardInfo.index){
                oldCardArrayIndex = i;
                break;
            }
        }
        
        workersDeck.removeChildAt(oldCardArrayIndex);
        workersDeck.addChild(newCard);
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
        closeAction,
        takeWorkerAction,
        resizeWorkerAction,
        closeWorkerAction
    }
});