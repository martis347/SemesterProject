define(['pixi', 'app/gameContainer', 'cards/cards', 'utils/randomCards'], function(PIXI, gameContainer, cards, random) {
    function takeBuilding(cardInfo) {
        if (cardInfo.preview) {
            close();
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

        replaceBuilding(cardInfo);

        card.children.filter(function(item) { return item.name == "take" }).x = 15;
        buildingsHand.addChild(card);
    }

    function replaceBuilding(cardInfo) {
        var buildingsDeck = gameContainer.stage.children.filter(function(item) { return item.name === "buildingsDeck" })[0];
        var newCard = cards.building.create(random.randomCardsList2(1)[0], "init");

        newCard.position.x = cardInfo.index * 153;
        newCard.card.index = cardInfo.index;

        var oldCardArrayIndex;
        for (var i = 0; i < buildingsDeck.children.length; i++) {
            if (buildingsDeck.children[i].card.index === cardInfo.index) {
                oldCardArrayIndex = i;
                break;
            }
        }

        buildingsDeck.removeChildAt(oldCardArrayIndex);
        buildingsDeck.addChild(newCard);
    }
    
    function close() {
        for (var i = 0; i < gameContainer.stage.children.length; i++) {
            if (gameContainer.stage.children[i].card !== undefined && gameContainer.stage.children[i].card.preview) {
                gameContainer.stage.removeChildAt(i);
            }
        }
    }
    
    function resize(card) {
        
        close();
        var bigCard = cards.building.create(card.id, card.inDeck ? "previewDeck" : "previewHand");

        bigCard.position.x = (gameContainer.gameWidth / 2) ;
        bigCard.position.y = (gameContainer.gameHeigth / 2) ;

        bigCard.scale.x = gameContainer.card.scale;
        bigCard.scale.y = gameContainer.card.scale;

        bigCard.hitArea = new PIXI.Rectangle(0, 0, gameContainer.card.buildingCard.x, gameContainer.card.buildingCard.y);
        bigCard.interactive = true;
        
        bigCard.card.preview = true;
        bigCard.card.index = card.index;

        gameContainer.stage.addChild(bigCard);
    }

    return {
        takeBuilding,
        close,
        resize
    };
});