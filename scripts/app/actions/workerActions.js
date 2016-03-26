define(['pixi', 'app/gameContainer', 'cards/cards', 'utils/randomCards'], function(PIXI, gameContainer, cards, random) {
    function takeWorker(cardInfo) {        
        if(cardInfo.preview){
            close();
        }
        var workersHand = gameContainer.stage.children.filter(function(item) { return item.name === "workersHand" })[0];
        var card = cards.worker.create(cardInfo.id, "hand");
        card.card.inDeck = false;

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

        replaceWorker(cardInfo);

        card.children.filter(function(item) { return item.name == "take" }).x = 15;
        workersHand.addChild(card);
    }

    function replaceWorker(cardInfo) {
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
    
    function close() {
        for (var i = 0; i < gameContainer.stage.children.length; i++) {
            if (gameContainer.stage.children[i].card !== undefined && gameContainer.stage.children[i].card.preview) {
                gameContainer.stage.removeChildAt(i);
            }
        }
    }
    
    function resize(card) {
        
        close();
        var bigCard = cards.worker.create(card.id, card.inDeck ? "previewDeck" : "previewHand");

        bigCard.position.x = (gameContainer.gameWidth / 2) ;
        bigCard.position.y = (gameContainer.gameHeigth / 2) ;

        bigCard.scale.x = gameContainer.card.scale;
        bigCard.scale.y = gameContainer.card.scale;

        bigCard.hitArea = new PIXI.Rectangle(0, 0, gameContainer.card.workerCard.x, gameContainer.card.workerCard.y);
        bigCard.interactive = true;
        
        bigCard.card.preview = true;
        bigCard.card.index = card.index;

        gameContainer.stage.addChild(bigCard);
    }
    
    return { 
        takeWorker,
        close,
        resize
    };
});