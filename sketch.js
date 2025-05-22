var grid = null;
var cellSize = 10;
var physics = null;

function setup() {
  createCanvas(400, 400);
  grid = new Grid(cellSize);
  physics = new Physics(cellSize);
}

function mousePressed(){
  if(mouseX > width || mouseY > height)
  {
    return;
  }
  let col = floor(mouseX / cellSize);
  let row = floor(mouseY / cellSize);
  grid.addPoint(row, col);
}

function mouseDragged(){
  mousePressed();
}

function draw() {
  background(220);
  grid.draw();
  grid = physics.updateGrid(grid);
}