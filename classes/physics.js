class Physics {
    constructor(cellSize){
        this.cellSize = cellSize;
    }

    updateGrid(grid){
        let updatedGrid = new Grid(this.cellSize);

        for (let row = 0; row < grid.rows; row++) {
            for (let col = 0; col < grid.cols; col++) {
                let cell = grid.grid[row][col];
                if (cell.isNotEmpty()) {
                    let { nextRow, nextCol } = this.getPossibleMove(grid, cell);
                    updatedGrid.grid[nextRow][nextCol].changeState();
                }
            }
        }
        grid = null;
        return updatedGrid;
    }

    getPossibleMove(grid, cell) {
        let below = { nextRow: cell.row + 1, nextCol: cell.col };
        let belowLeft = { nextRow: cell.row + 1, nextCol: cell.col - 1 };
        let belowRight = { nextRow: cell.row + 1, nextCol: cell.col + 1 };

        let canMoveBelow = this.canMoveBelow(grid,cell);
        let canMoveBelowLeft = this.canMoveBelowLeft(grid,cell);
        let canMoveBelowRight = this.canMoveBelowRight(grid,cell);

        if (canMoveBelow) return below;
        if (canMoveBelowLeft && canMoveBelowRight) return Math.random() < 0.5 ? belowLeft : belowRight;
        if (canMoveBelowLeft) return belowLeft;
        if (canMoveBelowRight) return belowRight;

        return { nextRow: cell.row, nextCol: cell.col };
    }

    isBreakingGridLimit(grid,row,col){
        if(row > grid.rows || row < 0) return true;
        if(col > grid.cols || col < 0) return true;
        return false;
    }

    canMoveBelow(grid,cell){
        if(cell.row === grid.rows-1) return false;
        
        let nextRow = cell.row + 1;
        let nextCol = cell.col;

        if (!grid.grid[nextRow][nextCol].isEmpty()) return false;
        
        if(this.isBreakingGridLimit(grid,nextRow,nextCol)) return false;

        return true;
    }

    canMoveBelowRight(grid,cell){
        if(cell.col === grid.cols - 1 || cell.row === grid.rows - 1) return false;

        let nextRow = cell.row + 1;
        let nextCol = cell.col+1;

        if (!grid.grid[nextRow][nextCol].isEmpty()) return false;
        if(this.isBreakingGridLimit(grid,nextRow,nextCol)) return false;
        return true;
    }

    canMoveBelowLeft(grid,cell){
        if(cell.col === 0 || cell.row === grid.rows - 1) return false;
        let nextRow = cell.row + 1;
        let nextCol = cell.col-1;
        if (!grid.grid[nextRow][nextCol].isEmpty()) return false;
        if(this.isBreakingGridLimit(grid,nextRow,nextCol)) return false;

        return true;
    }
}