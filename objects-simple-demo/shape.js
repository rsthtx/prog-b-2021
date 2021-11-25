class Shape {
  constructor(startPos, endPos) {
    this.startPos = startPos.copy()
    this.endPos = endPos.copy()
  }

  render() {
    push()
    noFill()
    rect(this.startPos.x, this.startPos.y, this.endPos.x, this.endPos.y)
    pop()
  }
}