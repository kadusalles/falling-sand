class Grid {
    constructor(cellSize) {
        this.cellSize = cellSize;
        this.grid = this.createGrid();
        this.grid = this.addCells(this.grid);
    }

    forEveryCell(callback) {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                callback(row, col);
            }
        }
    }

    isNotOffGrid(row,col){
        if(row < 0 || col < 0) return false;
        return row > this.rows || col > this.cols;
    }

    createGrid() {
        this.rows = height / this.cellSize;
        this.cols = width / this.cellSize;

        let arr = new Array(this.rows);
        for (let i = 0; i < arr.length; i++) {
            arr[i] = new Array(this.cols);
        }

        return arr;
    }

    addCells(grid) {
        this.forEveryCell((row, col) => {
            grid[row][col] = new Cell(row,col,this.cellSize);
        });
        return grid;
    }

    addPoint(row, col) {
        this.grid[row][col].changeState();
    }

    draw() {
        this.forEveryCell((row, col) => {
            this.grid[row][col].draw();
        });
    }
}