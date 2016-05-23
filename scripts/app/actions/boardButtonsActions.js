define(['pixi', 'gameContainer', 'sweetAlert', 'actions/genericActions'], function (PIXI, gameContainer, swal, genericActions) {
    function endTurn() {
        swal({
            title: "Are you sure you want to end turn?",
            text: "You will end your turn!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "End turn",
            closeOnConfirm: true
        },
        function() {
            genericActions.updateActions();
        });      
    }
    
    return {
        endTurn
    };
});