define(['api/api', 'sweetAlert'], function (api, swal) {
    var action = {
        take(card) {
            if (card.type === "building") {
                var apiResonse = api.takeBuilding(card);
                if (apiResonse.response) {
                    return require('actions/actionsLoader').buildingActions.takeBuilding(card, apiResonse.card);
                } else {
                    return require('actions/actionsLoader').alertsActions.actionsAlert();
                }
            }
            else if (card.type === "worker") {
                var apiResonse = api.takeWorker(card);
                if (apiResonse.response) {
                    return require('actions/actionsLoader').workerActions.takeWorker(card, apiResonse.card);
                } else {
                    return require('actions/actionsLoader').alertsActions.actionsAlert();
                }
            }
        },
        resize(card) {
            if (card.type === "building") {
                return require('actions/actionsLoader').buildingActions.resize(card);
            }
            else if (card.type === "worker") {
                return require('actions/actionsLoader').workerActions.resize(card);
            }
        },
        close(card) {
            if (card.type === "building") {
                return require('actions/actionsLoader').buildingActions.close(card);
            }
            else if (card.type === "worker") {
                return require('actions/actionsLoader').workerActions.close(card);
            }
        },
        build(card) {
            var apiResonse = api.startBuilding(card);
            if (apiResonse.response) {
                return require('actions/actionsLoader').buildingActions.build(card, apiResonse.card);
            } else {
                return require('actions/actionsLoader').alertsActions.actionsAlert();
            }
        },
        assign(card, target) {
            var apiResonse = api.assignWorker(card, target);
            if (apiResonse.success && apiResonse.enoughActions) {
                require('actions/actionsLoader').workerActions.assign(card, target);
                if (apiResonse.buildingCompleted) {
                    return require('actions/actionsLoader').genericActions.completeBuilding(target);
                }
            } else if(apiResonse.enoughActions === false) {
                return require('actions/actionsLoader').alertsActions.actionsAlert();
            } else {
                return require('actions/actionsLoader').alertsActions.coinsAlert();
            }
        },
        flip(card) {
            return require('actions/actionsLoader').buildingActions.flip(card);
        },
        addCardToHand(card) {
            return require('actions/actionsLoader').workerActions.addCardToHand(card);
        },
        endTurn() {
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
            var apiResponse = api.endTurn();
            if(apiResponse.response) {
                return require('actions/actionsLoader').boardButtonsActions.endTurn();
            }          
        });    
            
        },
        sellActions() {
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
           
        },
        buyActions() {
            swal({
            title: "Are you sure you want to buy actions?",
            text: "You will buy one action for 10 coins!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Buy action",
            closeOnConfirm: false
        },
        function() {
            var apiResponse = api.buyActions();
            if(apiResponse.response) {
                require('actions/actionsLoader').alertsActions.buySuccessfulAlert();
                return require('actions/actionsLoader').boardButtonsActions.buyActions();
            } else {
                return require('actions/actionsLoader').alertsActions.coinsAlert();
            }         
        });    
           
        }
    }

    return action;
});