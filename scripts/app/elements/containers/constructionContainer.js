define(['pixi'], function (PIXI) {
    var container = new PIXI.Container();
    container.position.x = 150;
    container.position.y = 400;
    container.name = "construction";

    return container;
});