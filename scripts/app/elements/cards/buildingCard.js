define(['pixi', 'utils/icon', 'utils/mouseOver'], function (PIXI, icon, mouseOvers) {

    var buildingCard = {
        create: function (id) {
            var cardTexture = PIXI.Texture.fromImage("Resources/buildings/" + id + ".jpg");
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

            mouseOvers.add(cardSprite);

            return cardSprite;
        }
    };
    
    return buildingCard
});