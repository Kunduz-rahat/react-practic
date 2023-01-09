import React, {useState} from 'react'
import MyButton from './Ui/button/MyButton'
import MyInput from './Ui/input/MyInput'

export default function PostForm({create}) {
	const [post, setPost] = useState({title:'', body:''})
	const addNewPost =(e)=>{
		e.preventDefault()
	const newPost ={
		...post,
		id:Date.now()
	}
	create(newPost)
		setPost({title:'', body:''})
		}
		
	return (
		
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
	
	)
}
