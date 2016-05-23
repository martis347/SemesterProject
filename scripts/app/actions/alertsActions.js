define(['pixi', 'gameContainer', 'actions/actionsContainer', 'jquery', 'sweetAlert'], function (PIXI, gameContainer, actions, $, swal) {
    function coinsAlert() {
        swal({
            title: "Player doesn\'t have enough coins!",
            text: 'Sell actions for coins.',
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
    
    function sellSuccessfulAlert() {
        swal("Sold!", "Action sold." ,"success");
    }
    
     function buySuccessfulAlert() {
        swal("Bought!", "Action bought.", "success");
    }

    return {
        coinsAlert,
        actionsAlert,
        sellSuccessfulAlert,
        buySuccessfulAlert
    };
});