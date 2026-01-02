class PostRepository {
  save() {
    console.log("Saving database");
  }
}

class EmailService {
  send() {
    console.log("Sending notification to admin");
  }
}

class BlogService {
  private repo = new PostRepository();
  private mailer = new EmailService();

  createPost(id: number, title: string) {
    console.log("Creating Post Object", { id, title });
    this.repo.save();
    this.mailer.send();
  }
}

function main() {
  const blogService = new BlogService();
  blogService.createPost(1, "First Title");
}

main()