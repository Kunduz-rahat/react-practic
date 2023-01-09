import React from 'react'
import PostItem from './PostItem'

export default function PostList({posts ,remove}) {
	return (
		<div>
		
			<PostItem  posts={posts} remove={remove}/>
		</div>
	)
}
