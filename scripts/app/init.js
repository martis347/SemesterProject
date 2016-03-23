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
})