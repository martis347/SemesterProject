define(['pixi', 'gameContainer', 'elements/elements', 'actions/actionsLoader', 'api/api'], function(PIXI, gameContainer, elements, actions, api) {
    return function start(){
        if (api.init.start.status) {
            loadResources();
        }
        
        requestAnimationFrame(animate);
        console.log(actions);

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
            gameContainer.stage.addChild(elements.containers.construction);
            gameContainer.stage.addChild(elements.containers.completedConstruction);
            
            var textOptions = {
                fill: '#3498db', // Set fill color to blue
                align: 'center', // Center align the text, since it's multiline
                stroke: '#34495e', // Set stroke color to a dark blue-gray color
                strokeThickness: 8, // Set stroke thickness to 20
                lineJoin: 'round' // Set the lineJoin to round instead of 'miter'
            }
            var points = new PIXI.Text('Victory Points: 0', textOptions);
            points.victoryPoints = true;
            
            points.x = 1500;
            points.y = 10;
            gameContainer.stage.addChild(points);
            
            var coins = new PIXI.Text('Coins: 20', textOptions);
            coins.playerCoins = true;
            
            coins.x = 1300;
            coins.y = 10;
            gameContainer.stage.addChild(coins);
        }
    }
});