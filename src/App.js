
import { useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/Ui/button/MyButton";
import MyInput from "./components/Ui/input/MyInput";



function App() {
const [posts, setPosts] = useState([
  {id:1, title:"Javascript", body:"Description"},
  {id:2, title:"Javascript2", body:"Description2"}, 
  {id:3, title:"Javascript3", body:"Description3"}
])
// const [title, setTitle] = useState('')
// const [body, setBody] = useState('')
const [post, setPost] = useState({title:'', body:''})
const addNewPost =(e)=>{
e.preventDefault()

setPosts([...posts, {...post, id:Date.now()}])
setPost({title:'', body:''})
}

  return (
    <div className="app">
      <form>
        <MyInput 
        value={post.title}
        type='text' 
        onChange ={e=> setPost({...post,title:e.target.value })}
        placeholder="Название поста"/>

        <MyInput 
        value={post.body}
        onChange ={e=> setPost({...post,body:e.target.value })}
        type='text' 
        placeholder="Описание поста"/>

        <MyButton 
        onClick={addNewPost}>
        Создать пост
        </MyButton>
      </form>
     <PostList posts={posts}/>
    </div>
  );
}

export default App;
