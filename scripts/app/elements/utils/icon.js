define(['pixi'], function (PIXI) {

    var create = {
        createIcon(name, action) {
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
    }

    return create;
});