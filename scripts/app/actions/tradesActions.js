define(['actions/actionsContainer', 'api/api'], function (actions, api) {
    function sellActions() {
        swal({
            title: "Are you sure you want to sell action for coins?",
            text: "You will sell one action for 5 coins!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Sell action",
            closeOnConfirm: false
        },
            function () {
                var apiResponse = api.sellActions();
                if (apiResponse.response) {
                    require('actions/actionsLoader').alertsActions.sellSuccessfulAlert();
                    return require('actions/actionsLoader').boardButtonsActions.sellActions();
                } else {
                    return require('actions/actionsLoader').alertsActions.actionsAlert();

                }
            });
    }

    function buyActions() {
        swal({
            title: "Are you sure you want to buy actions?",
            text: "You will buy one action for 10 coins!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Buy action",
            closeOnConfirm: false
        },
            function () {
                var apiResponse = api.buyActions();
                if (apiResponse.response) {
                    require('actions/actionsLoader').alertsActions.buySuccessfulAlert();
                    return require('actions/actionsLoader').boardButtonsActions.buyActions();
                } else {
                    return require('actions/actionsLoader').alertsActions.coinsAlert();
                }
            });
    }
    return {
        sellActions,
        buyActions
    };
});