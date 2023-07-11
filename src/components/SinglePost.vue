<template>
    <div class="post container">
        <router-link class="r" :to="{ name: 'Details', params: { id:post.id }}">
            <h3>{{ post.title }}</h3>
        </router-link>
        <h4>{{ snippet }}</h4>

        <span v-for="tag in post.tags" :key="tag">
        #{{ tag }}
        </span>
    </div>
  
</template>

<script>
import { computed } from 'vue'
export default {
    props:['post'],
    setup(props){
        const snippet = computed(() => {
            return props.post.body.substring(0,100) + '...'

        })


        return { snippet }
    }

}
</script>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 30px auto;
  margin-top: 30px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  align-content: center;
  text-align: center;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
}

.container h3{
  cursor: pointer;
}
.container .r{
    text-decoration: none;

}

.container:hover {
  background-color: #f0f0f0;
}

</style>