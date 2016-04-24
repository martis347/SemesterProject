define(['pixi', 'app/gameContainer', 'cards/cards'], function(PIXI, gameContainer, cards) {
    function takeWorker(card, drawnCard) {        
        if(card.preview){
            close();
        }
        var workersHand = gameContainer.stage.children.filter(function(item) { return item.name === "workersHand" })[0];
        var newCard = cards.worker.create(card.id, "hand");
        newCard.card.placement = "construction";
        newCard.card.index = emptySpace(workersHand);

        if (newCard.card.index < 4) {
            newCard.position.x = newCard.card.index * 60;
            newCard.position.y = 0;
        }
        else if (newCard.card.index < 8) {
            newCard.position.x = (newCard.card.index % 4) * 60;
            newCard.position.y = 160;
        }
        else {
            return;
        }
        
        newCard.card.init = {};
        newCard.card.init.x = newCard.position.x;
        newCard.card.init.y = newCard.position.y;

        replaceWorker(card, drawnCard);

        newCard.children.filter(function(item) { return item.name == "take" }).x = 15;
        workersHand.addChild(newCard);
    }
    
    function emptySpace(deck) {
        if (deck.children.length === 0) {
            return 0;
        }
        var maxCard = Math.max.apply(null, deck.children.map(function(a) { return a.card.index; }));
        var allNumbers = new Array(maxCard + 2)
            .join().split(',')
            .map(function(item, index) { return index++; });
            
        var cardIndexes = deck.children.map(function(a) { return a.card.index; });

        return Math.min.apply(null, allNumbers.filter(function(i) { return cardIndexes.indexOf(i) < 0; }));
    }

    function replaceWorker(card, drawnCard) {
        var workersDeck = gameContainer.stage.children.filter(function(item) { return item.name === "workersDeck" })[0];
        
        var cardFromTop = workersDeck.children[5];
        var newCard = cards.worker.create(drawnCard.id, "init");

        cardFromTop.position.x = card.index * 110;
        cardFromTop.card.index = card.index;
        
        newCard.position.x = 580;
        newCard.card.index = 5;
        
        var oldCardArrayIndex;
        for (var i = 0; i < workersDeck.children.length; i++) {
            if(workersDeck.children[i].card.index === card.index){
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
        var bigCard = cards.worker.create(card.id, "preview" + card.placement);

        bigCard.position.x = (1745 / 2) - (gameContainer.card.workerCard.x * gameContainer.card.scale) / 2;
        bigCard.position.y = (864 / 2) - (gameContainer.card.workerCard.y * gameContainer.card.scale) / 2;

        bigCard.scale.x = gameContainer.card.scale;
        bigCard.scale.y = gameContainer.card.scale;

        bigCard.hitArea = new PIXI.Rectangle(0, 0, gameContainer.card.workerCard.x, gameContainer.card.workerCard.y);
        bigCard.interactive = true;
        
        bigCard.card.preview = true;
        bigCard.card.index = card.index;
        bigCard.card.side = "front";

        gameContainer.stage.addChild(bigCard);
    }
    
    function assign(card, target) {
        console.log("Assigning worker " + card.card.id + " to building " + target);
    }
    
    function flip(card) {
        var cardToChange = gameContainer.stage.children.filter(function(item) { if (item.card) { return item.card.id === card.id } })[0];
        if (card.side === "front") {
            cards.worker.changeTexture(cardToChange, "J1");
            cardToChange.card.side = "back";
        }
        else {
            cards.worker.changeTexture(cardToChange, card.id);   
            cardToChange.card.side = "front";                     
        }
        console.log("A");
    }
    
    return { 
        takeWorker,
        close,
        resize,
        assign,
        flip
    };
});