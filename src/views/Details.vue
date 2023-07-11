<template>
  <h2>Details</h2>

  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
</template>

<script>

import GetPostDetails from '../composables/GetPostDetails'
export default {
    props:['id'],
    setup(props){

        const {post,error,load}=GetPostDetails(props.id)

        load()
        return{post,error}
    }

}
</script>

<style>
h3 {
  font-size: 1.5em; /* Change the font size */
  font-weight: bold; /* Make the text bold */
  color: #333; 
  
  
}

.post{
    max-width:1200px;
    margin: 0 auto;
    
}
.post p{
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
}

.pre{
    
}
</style>