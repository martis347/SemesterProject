define(['pixi', 'app/gameContainer', 'actions/actionsContainer', 'jquery'], function(PIXI, gameContainer, actions, $) {
    function coinsAlert() {
        swal({
            title: "Error!",
            text: 'Player doesn\'t have enough coins!',
            type: "error",
            confirmButtonText: "Ok"
        });
    }
     
    return {
        coinsAlert
    };
});