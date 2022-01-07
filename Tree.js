class Tree {
    constructor(x, y) {
      this.x = x;
      this.y = y 
      this.treeheight = 600;
      this.treewidth = 450;
      this.treethickness = 10;
      // var options = {
      //     isStatic: true,
      //    'restitution':0.8,
      //     'friction':1.0,
      //     'density':1.0
         
      // }
      this.tree1 = loadImage("tree.png");
     // this.tree1.scale = 0.05;
     
      this.body = Bodies.rectangle(this.x, this.y, this.treewidth, this.treethickness,{isStatic : true});
      // this.width = width;
      // this.height = height;
      //this.image = loadImage("Plucking mangoes/tree.png",treeAnimation);
      World.add(world, this.body);
      
    }
    display(){
      // image(this.tree1,337,10);
      //this.tree1.scale = 0.005
      
      
      var pos =this.body.position;
     // var angle = this.body.angle;
      push();
    
      translate(pos.x, pos.y+10);
      //rotate(angle);
      imageMode(CENTER);
      image(this.tree1,0,-this.treeheight/2, this.treewidth,this.treeheight);
    //  rect(0, 0, this.width, this.height);
      pop();
    }
 };