class Vec {

  constructor(x, y) {
    this.x = x
    this.y = y
  }

  plus(vector) {
    return new Vec(this.x + vector.x, this.y + vector.y)
  }

  minus(vector) {
    return new Vec(this.x - vector.x, this.y - vector.y)
  }

  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }
}

class Group {
  static from(list) {
    return new Group(list)
  }

  constructor(list) {
    this.container = []
    for (const item of list) {
      this.add(item)
      
    }
  }

  add(item) {
    if (!this.has(item)) this.container.push(item)
  }

  delete(deletedItem) {
    if (this.has(deletedItem)) this.container = this.container.filter(item => item !== deletedItem)
  }

  has(item) {
    return this.container.includes(item)
  }
}
