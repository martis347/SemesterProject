define(['jquery', 'gameContainer'], function($, gameContainer){
    return function() {
        
        var result;
    
        $.ajax({
            type: "POST",
            url: gameContainer.apiUri + "api/game/move/buy",
            success: function (response) {
                result = response
            },
            async: false,
            data: {GameGuid: gameContainer.userData.gameGuid, PlayerGuid: gameContainer.userData.playerGuid}
        });

        return {
            response: result.Success,
            message: result.message
        }
    }
});