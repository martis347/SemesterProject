define(['pixi', 'gameContainer', 'cards/cards', 'actions/actionsContainer', 'jquery', 'api/api'], function(PIXI, gameContainer, cards, actions, $, api) {
    function completeBuilding(building) {
        var constructionContainer = gameContainer.stage.children.filter(function(item) { return item.name === "construction" })[0];
        var finishedCard = constructionContainer.children.filter(function(item){return item.card.id === building})[0];
        var workers = finishedCard.children.filter(function(item){return item.card !== undefined && item.card.type === "worker"});
        
        for(var worker in workers) {
            actions.addCardToHand(workers[worker].card);
            finishedCard.removeChild(workers[worker]);
        }
        
        var completedConstructionContainer = gameContainer.stage.children.filter(function(item) { return item.name === "completedConstruction" })[0];
        finishedCard.scale.x = 0.5;
        finishedCard.scale.y = 0.5;
        
        finishedCard.card.index = completedConstructionContainer.children.length;
        
        finishedCard.position.x = finishedCard.card.index * 30;
        finishedCard.position.y = 0;
        
        completedConstructionContainer.addChild(finishedCard);
        constructionContainer.removeChild(finishedCard);
        
        updatePoints();
        updateCoins();
        updateActions();
    }
    
    function updatePoints() {
        var result;
    
        $.ajax({
            type: "POST",
            url: gameContainer.apiUri + "api/game/state",
            success: function (response) {
                result = response.Game.Players.filter(function(player){return player.Guid === gameContainer.userData.playerGuid})[0].VictoryPoints
            },
            async: false,
            data: {GameGuid: gameContainer.userData.gameGuid, PlayerGuid: gameContainer.userData.playerGuid}
        });
        
        gameContainer.stage.children.filter(function(item){return item.victoryPoints === true})[0].text = "Victory Points: " + result;
    }
    
    function updateCoins() {
        var result;
    
        $.ajax({
            type: "POST",
            url: gameContainer.apiUri + "api/game/state",
            success: function (response) {
                result = response.Game.Players.filter(function(player){return player.Guid === gameContainer.userData.playerGuid})[0].PlayerCoins
            },
            async: false,
            data: {GameGuid: gameContainer.userData.gameGuid, PlayerGuid: gameContainer.userData.playerGuid}
        });
        
        gameContainer.stage.children.filter(function(item){return item.playerCoins === true})[0].text = "Coins: " + result;
    }
    
    function updateActions() {
        var result;
    
        $.ajax({
            type: "POST",
            url: gameContainer.apiUri + "api/game/state",
            success: function (response) {
                result = response.Game.RemainingActions
            },
            async: false,
            data: {GameGuid: gameContainer.userData.gameGuid, PlayerGuid: gameContainer.userData.playerGuid}
        });
        
        gameContainer.stage.children.filter(function(item){return item.remainingActions === true})[0].text = "Actions: " + result;
    }     
    
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
            var apiResponse = api.endTurn();
            if(apiResponse.response) {
                return require('actions/actionsLoader').boardButtonsActions.endTurn();
            }          
        });  
    } 
    
    return {
        completeBuilding,
        updateActions,
        updateCoins,
        endTurn
    }
});