import { CreatePostCommand } from "../models/CreatePostCommand";
import { BaseService } from "./BaseService";

export class PostService extends BaseService {
  constructor() {
    super("posts");
  }
  GetAllPosts() {
    return this.client.Get(this.baseUrl);
  }
  CreatePost(item: CreatePostCommand) {
    return this.client.Post(this.baseUrl, item);
  }
}
