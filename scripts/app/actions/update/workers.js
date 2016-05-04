define(['app/gameContainer', 'cards/cards'], function(gameContainer, cards) {
    function take(takenCard, newCardInfo) {
        var workersDeck = gameContainer.stage.children.filter(function(item) { return item.name === "workersDeck" })[0];
        
        var cardFromTop = workersDeck.children[5];
        var newCard = cards.worker.create(newCardInfo.id, "init","S");

        cardFromTop.position.x = takenCard.index * 153;
        cardFromTop.card.index = takenCard.index;
        
        newCard.position.x = 795;
        newCard.card.index = 5;

        removeCard(workersDeck, card);

        workersDeck.addChild(newCard);
    }
    
    return take;
});