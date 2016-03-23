define(['pixi', 'utils/icon', 'utils/mouseOver'], function (PIXI, icon, mouseOvers) {

    var cardSprite;
    var card = {
        create: function (id, buttons) {
            var cardTexture = PIXI.Texture.fromImage("Resources/buildings/" + id + ".jpg");
            cardSprite = new PIXI.Sprite(cardTexture);

            cardSprite.interactive = true;
            cardSprite.hitArea = new PIXI.Rectangle(0, 0, 150, 150);

            addButtons(buttons);

            mouseOvers.add(cardSprite);

            return cardSprite;
        }
    };

    function addButtons(buttons) {

        for (var index in buttons) {
            switch (buttons[index]) {
                case "take":
                    takeButton(buttons[index]);
                    break;
                case "resize":
                    resizeButton(buttons[index]);
                    break;
                case "exit":
                    exitButton(buttons[index]);
                    break;

                default:
                    break;
            }
        }
    }

    function takeButton(name) {
        var takeSprite = new PIXI.Sprite();
        takeSprite = icon.createIcon(name/*, action.takeBuildingAction*/);
        takeSprite.position.x = 25;
        cardSprite.addChild(takeSprite);
    }

    function resizeButton(name) {
        var resizeSprite = new PIXI.Sprite();
        resizeSprite = icon.createIcon(name/*, action.resizeBuildingAction*/);
        resizeSprite.position.x = 100;
        cardSprite.addChild(resizeSprite);
    }

    function exitButton(name) {
        var exitSprite = new PIXI.Sprite();
        exitSprite = icon.createIcon(name/*, closeBuildingAction*/);
        exitSprite.position.x = 123;
        exitSprite.position.y = -8;
        cardSprite.addChild(exitSprite);
    }

    return card
});