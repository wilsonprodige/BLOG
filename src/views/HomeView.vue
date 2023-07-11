<template>
  <div class="home">
    <h1>Home page </h1>

    <div v-if="error">{{ error  }}</div>

    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading....</div>

    
    
    
    
    
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import GetPosts from '../composables/GetPosts'

export default {
  name: 'HomeView',
  setup(){

    const {posts,error,load} = GetPosts()

    load()

    
    
    
    return {  posts, error }

  },
  components:{
    PostList

  }

  }


</script>
