define(['pixi', 'utils/icon', 'utils/mouseOver'], function (PIXI, icon, mouseOvers) {

    var cardSprite;
    var card = {
        create: function (id, buttons) {
            var cardTexture = PIXI.Texture.fromImage("Resources/workers/" + id + ".jpg");
            cardSprite = new PIXI.Sprite(cardTexture);

            cardSprite.interactive = true;
            cardSprite.hitArea = new PIXI.Rectangle(0, 0, 107, 150);

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
        takeSprite = icon.createIcon(name/*, action.takeWorkerAction*/);
        takeSprite.position.x = 10;
        cardSprite.addChild(takeSprite);
    }

    function resizeButton(name) {
        var resizeSprite = new PIXI.Sprite();
        resizeSprite = icon.createIcon(name/*, action.resizeWorkerAction*/);
        resizeSprite.position.x = 70;
        cardSprite.addChild(resizeSprite);
    }

    function exitButton(name) {
        var exitSprite = new PIXI.Sprite();
        exitSprite = icon.createIcon(name/*, closeWorkerAction*/);
        exitSprite.position.x = 80;
        exitSprite.position.y = -8;
        cardSprite.addChild(exitSprite);
    }

    return card;
});