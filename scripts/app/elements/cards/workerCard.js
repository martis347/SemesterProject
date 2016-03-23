define(['pixi', 'utils/icon'], function (PIXI, icon) {

    var workerCard = {
        create: function (id) {
            var cardTexture = PIXI.Texture.fromImage("Resources/workers/" + id + ".jpg");
            var cardSprite = new PIXI.Sprite(cardTexture);

            cardSprite.interactive = true;
            cardSprite.hitArea = new PIXI.Rectangle(0, 0, 107, 150);

            var takeSprite = new PIXI.Sprite();
            takeSprite = icon.createIcon("takeS"/*, action.takeWorkerAction*/);
            takeSprite.position.x = 10;
            cardSprite.addChild(takeSprite);

            var resizeSprite = new PIXI.Sprite();
            resizeSprite = icon.createIcon("resizeS"/*, action.resizeWorkerAction*/);
            resizeSprite.position.x = 70;

            cardSprite.addChild(resizeSprite);

            // addMouseOvers(cardSprite);

            return cardSprite;
        }
    };
    
    return workerCard;
});