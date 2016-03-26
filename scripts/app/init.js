define(['pixi', 'app/gameContainer', 'elements/elements', 'actions/action'], function (PIXI, gameContainer, elements) {
    loadResources();
    requestAnimationFrame(animate);

    function animate() {
        requestAnimationFrame(animate);
        gameContainer.renderer.render(gameContainer.stage);
    }

    function loadResources() {
        gameContainer.stage.addChild(elements.background());

        gameContainer.stage.addChild(elements.containers.deckBuildings);
        gameContainer.stage.addChild(elements.containers.deckWorkers);
        gameContainer.stage.addChild(elements.containers.handBuildings);
        gameContainer.stage.addChild(elements.containers.handWorkers);
    }    
});