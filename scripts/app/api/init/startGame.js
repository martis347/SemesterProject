define(['jquery', 'app/gameContainer'],function($, gameContainer){
    console.log("Starting game");
    
    var userData, result;
    $.ajax({
        type: "POST",
        url: gameContainer.apiUri + "api/game/create",
        success: function (response) {
            gameContainer.userData = {
                gameGuid: response.gameGuid,
                playerGuid: response.playerGuid
            };
            result = {
                status: response.Success,
                message: response.message 
            };
        },
        dataType: "json",
        async: false
    });
    
    return result;
});