export class CreatePostCommand {
    constructor(){
      this.title = "";
      this.body = "";
      this.userId = 1;
    }
    title: string;
    body: string;
    userId: number;
  }