import { ref } from 'vue'
const GetPostDetails = (id) =>{
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
      try{
        let data = await fetch('http://localhost:3000/posts/'+ id)
        if(!data.ok){
          throw Error('post does not exist')
        }

        post.value= await data.json()

      }
      catch(Error){
        error.value = Error.message
        console.log(error.value)



      }

    }

    return {post,error,load}
}
export default GetPostDetails