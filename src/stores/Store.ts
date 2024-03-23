import { defineStore } from "pinia";
import { ref } from "vue";
import { PostService } from "../services/PostService";
import { CreatePostCommand } from "../models/CreatePostCommand";
import { Post } from "../models/Post";

export const useStore = defineStore("store", () => {
  const postService = new PostService();
  const posts = ref(new Array<Post>());
  const newPost = ref(new CreatePostCommand());

  const getPosts = async () => {
    postService.GetAllPosts().then((res) => {
      console.log(res);
      posts.value = res;
    });
  };

  const createPost = () => {
    postService.CreatePost(newPost.value).then((res) => {
      console.log(res);
      posts.value.unshift(res);
    });
  };

  return {
    posts,
    newPost,
    getPosts,
    createPost,
  };
});