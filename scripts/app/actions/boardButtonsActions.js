define(['pixi', 'gameContainer', 'sweetAlert', 'actions/genericActions'], function (PIXI, gameContainer, swal, genericActions) {
    function endTurn() {
 
            genericActions.updateActions();            
        
    }  
    
    function sellActions() {
        genericActions.updateActions();
        genericActions.updateCoins();
    }
    
    function buyActions() {
        genericActions.updateActions();
        genericActions.updateCoins();
    }
    
    return {
        endTurn,
        buyActions,
        sellActions
    };
});