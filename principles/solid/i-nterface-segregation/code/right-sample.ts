interface Workable {
  work(): void;
}

interface Codeable {
  writeCode(): void;
}

interface Salable {
  sellProduct(): void;
}

interface Manageable {
  manageTeam(): void;
}

class Developer implements Workable, Codeable {
  writeCode(): void {
    console.log("Writing Code.");
  }
  work(): void {
    console.log("Working");
  }
}

class Salesman implements Workable, Salable {
  work(): void {
    console.log("Working");
  }
  sellProduct(): void {
    console.log("Selling product");
  }
}

class Manager implements Workable, Manageable {
  work(): void {
    console.log("Working");
  }
  manageTeam(): void {
    console.log("Managing Team");
  }
}
