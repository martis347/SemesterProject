define(['pixi', 'gameContainer', 'actions/actionsContainer', 'jquery', 'sweetAlert'], function (PIXI, gameContainer, actions, $, swal) {
    function coinsAlert() {
        swal({
            title: "Player doesn\'t have enough coins!",
            text: 'Sell actions for coins',
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
    
    function buildingsHandAlert() {
        swal({
            title: "Player buildings hand is full!",
            text: 'Start building something',
            type: "error",
            confirmButtonText: "Ok"
        });
    }
    
    function workersHandAlert() {
        swal({
            title: "Player workers hand is full!",
            text: 'Start assigning workers to buildings',
            type: "error",
            confirmButtonText: "Ok"
        });
    }
    
    function buildingsQueueFullAlert() {
        swal({
            title: "Player buildings queue is full!",
            text: 'Finish buidling started buildings',
            type: "error",
            confirmButtonText: "Ok"
        });
    }

    return {
        coinsAlert,
        actionsAlert,
        sellSuccessfulAlert,
        buySuccessfulAlert,
        buildingsHandAlert,
        workersHandAlert,
        buildingsQueueFullAlert
    };
});