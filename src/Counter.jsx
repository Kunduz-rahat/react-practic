import React, {useState} from 'react'

export default function Counter() {
	const [count, setCount] = useState(0)
const ink =()=>{
	setCount(count+1)
}
const desk =()=>{
	setCount(count-1)
}
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={ink}>Ink</button>
			<button onClick={desk}>Desk</button>
		</div>
	)
}
