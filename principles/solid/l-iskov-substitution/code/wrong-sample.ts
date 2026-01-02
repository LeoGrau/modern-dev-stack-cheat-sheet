/**
 * Liskov Substitution Principle
 * Definition: Subclasses must be able to replace their base classes without breaking
 * the application. If B is a child of A, you should be able to use B anywhere you use A.
 * Breaks logic.
 * --------------------------------------------------------------------------------------
 * ❌ Before (Violation): A penguin is a bird, but it doesn't fly. 
 * By inheriting from Bird and forcing the fly method, 
 * we break the logic if someone expects all birds to fly.
 */

class Bird {
  fly() {
    console.log("Coco coo, I'm flying!")
  }
}

class Penguin extends Bird {
  fly(): void {
    throw new Error("Man, I do not fucking fly.")
  }
}
 
function main() {
  let p = new Penguin()
  p.fly()
}

main()