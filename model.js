const model = {
    grid: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ],

    resetBoard: function() {
        this.grid = this.grid.map(row => row.map(() => 0));
    },

    getColumnHeight: function(column) {
        return this.grid.reduce((height, row) => row[column] ? height + 1 : height, 0);
    },

    addToken: function(column, player) {
        if (this.getColumnHeight(column) < 6) {
            let rowIndex = 5 - this.getColumnHeight(column);
            this.grid[rowIndex][column] = player;
            return {row: rowIndex, column: column};
        }
        return null;
    },

    checkWin: function(player) {
        // Horizontal check
        for (let row = 0; row < 6; row++) {
            for (let col = 0; col < 4; col++) {
                if (this.grid[row][col] === player &&
                    this.grid[row][col + 1] === player &&
                    this.grid[row][col + 2] === player &&
                    this.grid[row][col + 3] === player) {
                    return true;
                }
            }
        }
        // Implement Vertical and Diagonal checks here.
        return false;
    },
};
