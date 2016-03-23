define(['pixi', 'app/gameContainer', 'elements/elements', 'app/actions'], function (PIXI, gameContainer, elements, action) {
    loadResources();
    requestAnimationFrame(animate);

    function animate() {
        requestAnimationFrame(animate);
        gameContainer.renderer.render(gameContainer.stage);
    }

    function loadResources() {
        gameContainer.stage.addChild(background());

        gameContainer.stage.addChild(elements.containers.deckBuildings);
        gameContainer.stage.addChild(elements.containers.deckWorkers);
        gameContainer.stage.addChild(elements.containers.handBuildings);
        gameContainer.stage.addChild(elements.containers.handWorkers);
    }

    function background() {
        var backgroundImage = PIXI.Texture.fromImage("Resources/background.jpg");
        var backgroundSprite = new PIXI.Sprite(backgroundImage);

        return backgroundSprite;
    }

    function icon(name, action) {
        var texture = PIXI.Texture.fromImage("Resources/" + name + ".png");
        var sprite = new PIXI.Sprite(texture);

        sprite.position.y = 125;
        sprite.buttonMode = true;
        sprite.interactive = true;
        sprite.visible = false;

        sprite.click = function (data) {
            action(this);
        }

        return sprite;
    }

    function addMouseOvers(sprite) {
        sprite.mouseover = function (ev) {
            this.children.forEach(function (element) {
                element.visible = true;
            });
        }

        sprite.mouseout = function (ev) {
            this.children.forEach(function (element) {
                element.visible = false;
            });
        }
    }
})