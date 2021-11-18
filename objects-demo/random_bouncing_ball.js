class RandomBouncingBall extends BouncingBall {
  constructor(p){
    super(p)
    this.lineWidth = random(2,20)
    this._generateColorsHelper()
  }

  _generateColorsHelper(){
    this.fillColor = color(random(255), random(255),random(255),random(100,255))
    this.lineColor = color(random(255), random(255),random(255))
  }

  render(){
    push()
    fill(this.fillColor)
    stroke(this.lineColor)
    strokeWeight(this.lineWidth)

    super.render()
    pop()
  }
}