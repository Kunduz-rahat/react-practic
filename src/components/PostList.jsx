import React from 'react'
import PostItem from './PostItem'

export default function PostList({posts}) {
	return (
		<div>
			<PostItem  posts={posts}/>
		</div>
	)
}
