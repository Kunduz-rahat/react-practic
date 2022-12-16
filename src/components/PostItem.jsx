import React from 'react'
import MyButton from './Ui/button/MyButton'

export default function PostItem({posts}) {
	return (
		<div>
			{posts.map(post =>(
				<div className='post' key={post.id} >
				<div >
				<h2>{post.title}</h2>
					<p>{post.body}</p>
				</div>

					
			   	<MyButton >delete</MyButton>
				</div>
			)
			)}
		
		</div>
		
	)
}
