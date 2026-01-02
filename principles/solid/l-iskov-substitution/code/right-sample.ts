class Bird {
  eat() {
    console.log("Eat")
  }
}

class FlyingBird extends Bird {
  fly() {
    console.log("Fly")
  }
}

class Pigeon extends FlyingBird {}

class Penguin extends Bird {
  swim() {
    console.log("Swimming. Glu glu🐧")
  }
}

function main() {
  const pigeon = new Pigeon()
  pigeon.fly()

  const penguin = new Penguin()
  penguin.swim()
}

main()