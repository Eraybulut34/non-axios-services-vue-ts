<template>
  <form @submit.prevent="createPost">
    <div class="form">
      <input type="text" v-model="newPost.title" placeholder="Title" />
      <input type="text" v-model="newPost.body" placeholder="Body" />
      <button type="submit">Submit</button>
    </div>
  </form>
  <table class="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Body</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in posts" :key="post.id">
        <td>{{ post.title }}</td>
        <td>{{ post.body }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useStore } from "./stores/Store";

const store = useStore();
const { getPosts, createPost } = store;
const { posts, newPost } = storeToRefs(store);
onMounted(() => {
  getPosts();
});
</script>

