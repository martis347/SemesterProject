define(['utils/icon', 'actions/actionsContainer'], function(icon, actions) {
    var card;

    function add(buttonsPlacementType, cardSprite) {
        card = cardSprite;

        switch (buttonsPlacementType) {
            case "init":
                initButtons();
                break;
            case "previewDeck":
                previewDeckButtons();
                break;
            case "previewHand":
                previewHandButtons();
                break;
            case "hand":
                handButtons();
                break;
            default:
                break;
        }
    }

    function initButtons() {
        if(card.card.type == "building") {
            button("take", actions.takeAction, 25);
            button("resize", actions.resizeAction, 100);
        }
        else if(card.card.type == "worker") {
            button("take", actions.takeAction, 10);
            button("resize", actions.resizeAction, 70);
        }
    }

    function previewDeckButtons() {
        if(card.card.type == "building") {
            button("exit", actions.closeAction, 123, -8);
            button("take", actions.takeAction, 40);
        }
        else if(card.card.type == "worker") {
            button("exit", actions.closeAction, 90, -8);
            button("take", actions.takeAction, 40);
        }
        
    }
    
    function previewHandButtons() {
        if(card.card.type == "building") {
            button("exit", actions.closeAction, 123, -8);            
        }
        else if(card.card.type == "worker") {
            button("exit", actions.closeAction, 90, -8);                        
        }
    }

    function handButtons() {
        button("resize", actions.resizeAction, 0, 0);
    }

    function button(name, action, x, y) {
        var sprite = new PIXI.Sprite();
        sprite = icon.createIcon(name, action);
        if (y) { sprite.position.y = y }
        if (x) { sprite.position.x = x }

        card.addChild(sprite);
    }

    return {
        add
    }
});