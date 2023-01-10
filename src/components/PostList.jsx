import React from 'react'
import PostItem from './PostItem'

export default function PostList({posts ,remove, title}) {
	if(!posts.length){
		return 	<h1 style={{textAlign:"center"}}>Посты не найдены</h1>
	}
	return (
		<div>
		<h1 style={{textAlign:"center"}}>{title}</h1>
			<PostItem  posts={posts} remove={remove}/>
		</div>
	)
}
