define(['actions/actionsContainer', 'api/api'], function(actions, api) {
    function sellAction(building) {
        swal({
            title: "Are you sure you want to sell action for coins?",
            text: "You will sell your action for 5 coins!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Sell action",
            closeOnConfirm: false
        },
        function() {
            var apiResponse = api.sellActions();
            if(apiResponse.response) {
                require('actions/actionsLoader').alertsActions.sellSuccessfulAlert();
                return require('actions/actionsLoader').boardButtonsActions.sellActions();
            } else {
                return require('actions/actionsLoader').alertsActions.actionsAlert();
                
            }          
        }); 
    }
    return {
        sellAction
    };
});