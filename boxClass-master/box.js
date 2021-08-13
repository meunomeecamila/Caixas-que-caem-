class Box {
  constructor(x, y, width, height) {
    var options = {
      // os dois primeiros tem vírgula no final, e o último não
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    // push captura essa nova configuração
    push();
    // translate faz a translação da figura
    translate(pos.x,pos.y);
    // rotate faz a rotação da figura
    rotate(angle);
    // coloca a figura no centro
    rectMode(CENTER);
    // pinta a figura de branco
    fill(255);
    // x, y, comprimento e altura
    rect(0,0, this.width, this.height);
    // pop reverte para a configuração anterior
    pop();
  }
};
