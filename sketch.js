const { Engine, Composite, Bodies, Mouse, MouseConstraint, Constraint } =
  Matter;
const boxes1 = [];

let world, engine;
const boxwidth = 40;
const boxheight = 28;
let boxImg1;
let boxImg1_2;
let boxImg1_3;
let boxImg2;
let boxImg2_2;
let boxImg2_3;
let boxImg3;
let boxImg3_2;
let boxImg4;
let boxImg4_2;

function preload() {
  boxImg1 = loadImage("./images/b1.png");
  boxImg1_2 = loadImage("./images/b2.png");
  boxImg1_3 = loadImage("./images/b3.png");
  boxImg2 = loadImage("./images/gs1.png");
  boxImg2_2 = loadImage("./images/gs2.png");
  boxImg2_3 = loadImage("./images/gs3.png");
  boxImg3 = loadImage("./images/gfs1.png");
  boxImg3_2 = loadImage("./images/gfs2.png");
  boxImg4 = loadImage("./images/gms1.png");
  boxImg4_2 = loadImage("./images/gms2.png");
}

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(0, height, width * 2, 200);
  console.log(height);
  console.log(windowHeight);
  boundary_left = new Boundary(0, height / 2, 2, height, 0); // 가상왼쪽벽
  boundary_right = new Boundary(width, height / 2, 2, height, 0); // 가상오른쪽벽

  boundary_4 = new Boundary(
    (width / 100) * 40,
    (height / 100) * 80,
    1,
    height * 0.12,
    PI / 12
  );
  boundary_5 = new Boundary(
    (width / 100) * 60,
    (height / 100) * 80,
    1,
    height * 0.12,
    -PI / 12
  );

  boundary_6 = new Boundary(
    width * 0.655,
    height * 0.5,
    height / 7,
    1,
    (PI / 2) * 0.8
  );
  boundary_7 = new Boundary(
    width * 0.345,
    height * 0.5,
    height / 7,
    1,
    (-PI / 2) * 0.8
  );

  boundary_8 = new Boundary(width * 0.28, height * 0.33, width / 6, 1, PI / 6);
  boundary_9 = new Boundary(width * 0.72, height * 0.33, width / 6, 1, -PI / 6);
  boundary_10 = new Boundary(
    width * 0.22,
    height * 0.2,
    width * 0.25,
    1,
    -PI / 4
  );
  boundary_11 = new Boundary(
    width * 0.78,
    height * 0.2,
    width * 0.25,
    1,
    PI / 4
  );

  hourglass_left = new Boundary(
    width * 0.38,
    height * 0.65,
    height / 6,
    5,
    PI / 3
  );
  hourglass_right = new Boundary(
    width * 0.62,
    height * 0.65,
    height / 6,
    5,
    -PI / 3
  );

  const boxImages = [
    boxImg1,
    boxImg1_2,
    boxImg1_3,
    boxImg2,
    boxImg2_2,
    boxImg2_3,
    boxImg3,
    boxImg3_2,
    boxImg4,
    boxImg4_2,
  ];

  for (let i = 0; i < 320; i++) {
    const box = new Box(width / 2, 0.2 * i, boxwidth, boxheight, boxImages);
    boxes1.push(box);
  }
}

function draw() {
  background("white");
  c1 = color(255, 255, 255);
  c2 = color(0, 0, 0);
  for (let y = 0; y < height; y++) {
    n = map(y, 0, height, 0, 1);
    let newc = lerpColor(c1, c2, n);
    stroke(newc);
    line(0, y, width, y);
  }

  Matter.Engine.update(engine);

  for (let box of boxes1) {
    box.show();
    if (frameCount < 500) box.updateImage((height / 789) * 320);
  }
}
