class BlogService {
  createPost(id: number, title: string) {
    // 1. Creating logic
    console.log("Creating Post Object", { id, title });

    // 2. Database Logic
    console.log("Saving on database");

    // 3. Notification Logic
    console.log("Sending notification to administrator");
  }
}

function main() {
  const blogService = new BlogService();
  blogService.createPost(1, 'First Post'); // 1st execution
}

main();
