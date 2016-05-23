define(['pixi'], function (PIXI) {

    var boardButton = {
        createIcon(id, action) {
            var texture = PIXI.Texture.fromImage("Resources/" + id + ".png");
            var sprite = new PIXI.Sprite(texture);

            sprite.position.y = 125;
            sprite.buttonMode = true;
            sprite.interactive = true;
            sprite.visible = true;
            sprite.id = id;

            sprite.click = function () {
                action();
            }

            return sprite;
        }
    }

    return boardButton;
});