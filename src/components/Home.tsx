import React, { useState, useEffect } from 'react'
//assets
import logo from '../assets/logo.svg'
//style
import './Home.scss'

const Home = () => {
	const [title, setTitle] = useState('React whee')
	const [count, setCount] = useState(1)

	useEffect(() => {
		document.title = title
	})

	return (
		<div className="home">
			<h1
				onClick={() => {
					setCount(count + 1)
					//setTitle('React whee' + '!'.repeat(count))
					setTitle((prevTitle) => prevTitle + '!')
				}}
			>
				{title}
			</h1>
			<img src={logo} className="logo" alt="logo" width="80" />
			<p>
				Hot singles in your area. <br />
				Hotter react in your&nbsp;
				<a
					href="https://react.dev/learn"
					target="_blank"
					rel="noopener noreferrer"
				>
					documentation
				</a>
				.
			</p>
		</div>
	)
}
export default Home
