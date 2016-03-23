define(function () {
    var add = {
        add: function (sprite) {
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
    }

    return add;
});