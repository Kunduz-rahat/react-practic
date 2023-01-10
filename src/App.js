
import { useState, useMemo } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyInput from "./components/Ui/input/MyInput";
import { MySelect } from "./components/Ui/select/MySelect";



function App() {
const [posts, setPosts] = useState([
  {id:1, title:"qq", body:"rr"},
  {id:2, title:"aa", body:"De"}, 
  {id:3, title:"ss", body:"ee"}
])
const [selectedSort, setSelectedSort] = useState('')
const [searchQuery, setSearchQuery] =useState('')

//создание постов
const createPost = (newPost)=>{
  setPosts([...posts, newPost ])
}
const sortedPosts = useMemo(()=>{
  if(selectedSort){
    return [...posts].sort((a, b)=> a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
}, [selectedSort, posts])

const sortedAndSearchPosts = useMemo(()=>{
return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
}, [searchQuery, sortedPosts])

//сортировка постов
const sortPosts =(sort) =>{
  setSelectedSort(sort)
  
}

// удаление постов
const removePost =(post)=>{
setPosts(posts.filter(p=> p.id !== post.id))
}
  return (
    <div className="app">
     <PostForm create={createPost}/>
     <MyInput
      placeholder='Поиск...'
      value={searchQuery}
      onChange={e=> setSearchQuery(e.target.value)}
     />
     <MySelect defaultValue='Сортировка' 
     value={selectedSort}
     onChange={sortPosts}
     options ={[{value: "title", name:"По названию"},
     {value: "body", name:"По описанию"}

     ]} />
     {
      sortedAndSearchPosts.length?
      
      <PostList posts={sortedAndSearchPosts} remove={removePost} title="Посты про JS"/>
      : 	<h2 style={{textAlign:"center"}}>Список постов пуст</h2>}
     
    
    </div>
  );
}

export default App;
