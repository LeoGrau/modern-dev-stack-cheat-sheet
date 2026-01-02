interface Employee {
  work(): void;
  writeCode(): void;
  manageTeam(): void;
  sellProducts(): void;
  seeYoutubeVideos(): void;
}

class Developer implements Employee {
  work(): void {
    console.log("Working");
  }
  writeCode(): void {
    console.log("Writing code. Centering div...");
  }

  seeYoutubeVideos(): void {
    console.log("See Youtube Videos");
  }
  
  // ❌ VIOLATION: The developer does not sell or manage.
  sellProducts(): void {
    throw new Error("I'm not a seller");
  }
  manageTeam(): void {
    throw new Error("I'm not a manager");
  }
}

class Salesman implements Employee {
  work() {
    console.log("Working");
  }
  seeYoutubeVideos(): void {
    console.log("See Youtube Videos");
  }
  sellProducts(): void {
    console.log("Selling some products");
  }

  // ❌ VIOLATION: The seller does not develop software.
  writeCode(): void {
    throw new Error("I'm not a developer");
  }
  manageTeam(): void {
    throw new Error("I'm not a manager");
  }
}
