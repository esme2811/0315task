//let nb;
//let nb2;
//let nb3;
let nbarray = [];
let times= 50;
var isTheMousePressed = false;

// 初始內容
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); // 決定 使用 3D 方式進行渲染
  for(let i=0;i<5;i+=1){
    // 怎麼把東西放到 nbarray 袋子裡面的公式
    nbarray.push(new myBox(50,-height/2+(height/5)*i,0,50));
  }
  //nb = new myBox(50,50,0,50);
  //nb2 = new myBox(-50,150,0,25);
  //nb3 = new myBox(-150,100,0,50);
}
function draw() {
 if (isTheMousePressed) {
	  background(0);
  } else {
		background(255);
  }
  
  // 將袋子中 所有 東西 稱為 V 執行他的相關函式
  nbarray.forEach((v)=>{
    v.display();
  })
  //nb.display();
  //nb2.display();
  //nb3.display();
}

function mousePressed() {
  isTheMousePressed = true;
}
  function mouseReleased() {
  isTheMousePressed = false;
}


// 自訂一個類別物件
class myBox{
  // 怎樣建構這個物件 只執行一次
  constructor(x,y,z,size){
    this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
    this.mx = 1;
  }
  // 定義一些能力 我們呼叫時 執行 
  // 能力1:顯現這box
  display(){
   for(let i=0;i<5;i+=1){
    push();
      translate(this.x,this.y,this.z);  
      if (mouseX-width/2 > this.x-this.size/2 && 
          mouseX-width/2 < this.x+this.size/2 &&
          mouseY-height/2 > this.y-this.size/2 && 
          mouseY-height/2 < this.y+this.size/2){
          this.mx = this.mx+0.3;
        }
      noStroke();
      fill(i*80,20,i*120,i*10);
      box(this.size);
    pop();
    this.move();
     }
  }
  //能力2:移動規則
  move(){
    if (this.x>width/2){this.mx = -1*this.mx;}
    if (this.x<-width/2){this.mx = -1*this.mx;}  
    this.x = this.x + this.mx;
    rotateX(frameCount*0.001);
    rotateY(frameCount*0.001);
  }
}