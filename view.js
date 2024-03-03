const view = {
    init: function() {
        this.renderBoard();
    },

    renderBoard: function() {
        const gameBoard = document.getElementById('gameBoard');
        gameBoard.innerHTML = '';
        model.grid.forEach((row, rowIndex) => {
            row.forEach((cell, columnIndex) => {
                const cellElement = document.createElement('div');
                cellElement.className = 'cell';
                cellElement.addEventListener('click', () => controller.placeToken(columnIndex));
            
                // Create a token element inside the cell if it's not empty
                if (cell === 1 || cell === 2) {
                    const tokenElement = document.createElement('div');
                    tokenElement.className = `token player${cell}`; // Add the 'token' class and the player class
                    cellElement.appendChild(tokenElement);
                }
            
                gameBoard.appendChild(cellElement);
            });
        });
    },
};
