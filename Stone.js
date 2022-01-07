class Stone{
    constructor(x, y, r) {
      var options = {
          isStatic: false,
         'restitution':0,
          'friction':1.0,
          'density':1.2
      }
      this.x = x
      this.y = y
      this.r = r
      this.stone = loadImage("stone.png")
      this.body = Bodies.circle(this.x, this.y, this.r/2, options);
      // this.width = width;
      // this.height = height;
      //this.image = loadImage("Plucking mangoes/tree.png",treeAnimation);
      World.add(world, this.body);
    }
    display(){
     // image(this.boy,38,530)
      var pos =this.body.position;
      // var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      // rotate(angle);
      imageMode(CENTER);
      ellipseMode(RADIUS)
      image(this.stone,0,0, this.r*2, this.r*2)
    //  rect(0, 0, this.width, this.height);
      pop();
    }
 };