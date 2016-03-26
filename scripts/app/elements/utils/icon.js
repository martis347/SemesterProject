define(['pixi'], function (PIXI) {

    var icon = {
        createIcon(id, action) {
            var texture = PIXI.Texture.fromImage("Resources/" + id + ".png");
            var sprite = new PIXI.Sprite(texture);

            sprite.position.y = 125;
            sprite.buttonMode = true;
            sprite.interactive = true;
            sprite.visible = false;
            sprite.id = id;

            sprite.click = function (data) {
                action(this.parent.card);
            }

            return sprite;
        }
    }

    return icon;
});