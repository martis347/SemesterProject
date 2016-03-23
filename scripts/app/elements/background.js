define(function() {
    var background = function() {
        var backgroundImage = PIXI.Texture.fromImage("Resources/background.jpg");
        var backgroundSprite = new PIXI.Sprite(backgroundImage);

        return backgroundSprite;
    }

    return background;
});