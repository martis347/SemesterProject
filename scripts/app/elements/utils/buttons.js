define(['utils/icon', 'actions/actions'], function(icon, actions) {
    var card;
    
    function add(buttons, cardSprite) {
        card = cardSprite;

        for (var index in buttons) {
            switch (buttons[index]) {
                case "take":
                    takeButton(buttons[index], cardSprite);
                    break;
                case "resize":
                    resizeButton(buttons[index], cardSprite);
                    break;
                case "exit":
                    exitButton(buttons[index], cardSprite);
                    break;
                default:
                    break;
            }
        }
    }

    function takeButton(name) {
        var sprite = new PIXI.Sprite();
        sprite = icon.createIcon(name, actions.takeAction);
        sprite.position.x = 25;
        card.addChild(sprite);
    }

    function resizeButton(name) {
        var sprite = new PIXI.Sprite();
        sprite = icon.createIcon(name, actions.resizeAction);
        sprite.position.x = 100;
        card.addChild(sprite);
    }

    function exitButton(name) {
        var sprite = new PIXI.Sprite();
        sprite = icon.createIcon(name, actions.closeAction);
        sprite.position.x = 123;
        sprite.position.y = -8;
        card.addChild(sprite);
    }

    return {
        add
    }
});