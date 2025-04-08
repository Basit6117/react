	import React from 'react'
	import { useRef } from 'react'
	function Ref() {
	const countRef = useRef(0);
	const handle = () =>{
		countRef.current ++;
		console.log(`clicked-${countRef.current} times`)
	}
	console.log('i rendered')
	return (
	<div>
		<button onClick={handle}>Click</button>
	</div>
	)
	}

	export default Ref