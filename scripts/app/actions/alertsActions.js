define(['pixi', 'gameContainer', 'actions/actionsContainer', 'jquery', 'sweetAlert'], function(PIXI, gameContainer, actions, $, swal) {
    function coinsAlert() {
        swal({
            title: "Player doesn\'t have enough coins!",
            text: 'Sell actions to get more coins!',
            type: "error",
            confirmButtonText: "Ok"
        });
    }
    
    function actionsAlert() {
        {
        swal({
            title: "Player doesn\'t have enough actions!",
            text: 'End turn or buy more actions',
            type: "error",
            confirmButtonText: "Ok"
        });
    }
    }
     
    return {
        coinsAlert,
        actionsAlert
    };
});