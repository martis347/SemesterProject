define(['pixi', 'cards/workerCard', 'api/init/init'], function (PIXI, worker, init) {
    var container = new PIXI.Container();
    container.position.x = 1050;
    container.position.y = 380;
    container.name = "workersDeck";

    var cards = init.workers;

    for (var i = 0; i < cards.Workers.length; i++) {
        var cardSprite;
        
        cardSprite = worker.create(cards.Workers[i], "S", "init");
        cardSprite.position.x = i * 110;
        cardSprite.card.index = i;

        container.addChild(cardSprite);
    }
    
    cardSprite = worker.create(cards.TopWorker, "S", "init");
    cardSprite.position.x = 580;
    cardSprite.card.index = i;
    container.addChild(cardSprite);

    return container;
});