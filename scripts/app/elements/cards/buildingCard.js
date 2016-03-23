define(['pixi', 'utils/icon'], function (PIXI, icon) {

    var buildingCard = {
        create: function (id) {
            var cardTexture = PIXI.Texture.fromImage("Resources/workers/" + id + ".jpg");
            var cardSprite = new PIXI.Sprite(cardTexture);

            cardSprite.interactive = true;
            cardSprite.hitArea = new PIXI.Rectangle(0, 0, 150, 150);

            var takeSprite = new PIXI.Sprite();
            takeSprite = icon.createIcon("takeS"/*, action.takeBuildingAction*/);
            takeSprite.position.x = 25;
            cardSprite.addChild(takeSprite);

            var resizeSprite = new PIXI.Sprite();
            resizeSprite = icon.createIcon("resizeS"/*, action.resizeBuildingAction*/);
            resizeSprite.position.x = 100;

            cardSprite.addChild(resizeSprite);

            // addMouseOvers(cardSprite);

            return cardSprite;
        }
    };
    
    return buildingCard
});