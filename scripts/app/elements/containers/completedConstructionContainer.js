define(['pixi'], function (PIXI) {
    var container = new PIXI.Container();
    container.position.x = 800;
    container.position.y = 10;
    container.name = "completedConstruction";
    container.cards = [];

    return container;
});