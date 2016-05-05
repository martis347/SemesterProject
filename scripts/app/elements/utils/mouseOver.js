define(function () {
    var mouseOver = {
        add: function (sprite) {
            sprite.mouseover = function (ev) {
                if(this.card.index == 5) return;
                this.children.forEach(function (element) {
                    element.visible = true;
                });
            }

            sprite.mouseout = function (ev) {
                if(this.card.index == 5) return;
                this.children.forEach(function (element) {
                    element.visible = false;
                });
            }
        }
    }

    return mouseOver;
});