
import { useState, useMemo } from "react";
import { PostFilter } from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";




function App() {
const [posts, setPosts] = useState([
  {id:1, title:"qq", body:"rr"},
  {id:2, title:"aa", body:"De"}, 
  {id:3, title:"ss", body:"ee"}
])
const [filter, setFilter] = useState({
  sort:"", 
  query:""
})


//создание постов
const createPost = (newPost)=>{
  setPosts([...posts, newPost ])
}
const sortedPosts = useMemo(()=>{
  if(filter.sort){
    return [...posts].sort((a, b)=> a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
}, [filter.sort, posts])

const sortedAndSearchPosts = useMemo(()=>{
return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
}, [filter.query, sortedPosts])




// удаление постов
const removePost =(post)=>{
setPosts(posts.filter(p=> p.id !== post.id))
}
  return (
    <div className="app">
     <PostForm create={createPost}/>
     <PostFilter filter={filter} setFilter={setFilter}/>
     <PostList posts={sortedAndSearchPosts} remove={removePost} title="Посты про JS"/>
    </div>
  );
}

export default App;
