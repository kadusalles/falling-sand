class Cell {
    constructor(row,col,cellSize) {
        this.row = row;
        this.col= col;
        this.cellSize = cellSize;
        this.state = 0;
        this.updatePosition();
    }

    updatePosition(){
        this.x = this.col * this.cellSize;
        this.y = this.row * this.cellSize;
    }

    imitate(cell){
        this.row = cell.row;
        this.col= cell.col;
        this.state = cell.state;
        this.updatePosition();
    }

    changeState(){
        this.state = this.state === 1 ? 0 : 1;
    }

    isEmpty(){
        return this.state === 0;
    }

    isNotEmpty(){
        return this.state === 1;
    }

    draw(){
        stroke(255);
        fill(this.state * 255);
        square(this.x, this.y, this.cellSize);
    }
}