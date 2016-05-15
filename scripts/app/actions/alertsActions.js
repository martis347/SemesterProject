define(['pixi', 'app/gameContainer', 'actions/actionsContainer', 'jquery'], function(PIXI, gameContainer, actions, $) {
    function coinsAlert() {
        alert('Player doesn\'t have enough coins!');
    }
     
    return {
        coinsAlert
    };
});