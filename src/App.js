
import { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import { MySelect } from "./components/Ui/select/MySelect";



function App() {
const [posts, setPosts] = useState([
  {id:1, title:"Javascript", body:"Description"},
  {id:2, title:"Javascript2", body:"Description2"}, 
  {id:3, title:"Javascript3", body:"Description3"}
])


const createPost = (newPost)=>{
  setPosts([...posts, newPost ])
}

const removePost =(post)=>{
setPosts(posts.filter(p=> p.id !== post.id))
}
  return (
    <div className="app">
     <PostForm create={createPost}/>
     <MySelect defaultValue='Сортировка' 
     options ={[{value: "title", name:"По названию"},
     {value: "body", name:"По описанию"}

     ]} />
     <PostList posts={posts} remove={removePost}/>
    </div>
  );
}

export default App;
