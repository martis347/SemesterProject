define(['utils/icon', 'actions/actions'], function(icon, actions) {
    
    function add(buttons, cardSprite) {
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

    function takeButton(name, cardSprite) {
        var sprite = new PIXI.Sprite();
        sprite = icon.createIcon(name, actions.takeBuildingAction);
        sprite.position.x = 25;
        cardSprite.addChild(sprite);
    }

    function resizeButton(name, cardSprite) {
        var sprite = new PIXI.Sprite();
        sprite = icon.createIcon(name, actions.resizeBuildingAction);
        sprite.position.x = 100;
        cardSprite.addChild(sprite);
    }

    function exitButton(name, cardSprite) {
        var sprite = new PIXI.Sprite();
        sprite = icon.createIcon(name, actions.closeBuildingAction);
        sprite.position.x = 123;
        sprite.position.y = -8;
        cardSprite.addChild(sprite);
    }

    return {
        add
    }
});