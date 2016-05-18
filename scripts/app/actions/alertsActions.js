define(['pixi', 'gameContainer', 'actions/actionsContainer', 'jquery', 'sweetAlert'], function(PIXI, gameContainer, actions, $, swal) {
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