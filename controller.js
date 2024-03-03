const controller = {
    currentPlayer: 1,

    init: function() {
        view.init();
    },

    placeToken: function(column) {
        const result = model.addToken(column, this.currentPlayer);
        if (result) {
            view.renderBoard();
            if (model.checkWin(this.currentPlayer)) {
                setTimeout(() => {  // Delay the alert to ensure the UI updates first.
                    alert(`Player ${this.currentPlayer} wins!`);
                    model.resetBoard();
                    view.renderBoard();  // Re-render the board after resetting.
                }, 10);
            }
            this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
        }
    },
    
};

controller.init();
