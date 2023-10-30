import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

//components
import TheNavigation from './components/TheNavigation'
import Home from './components/Home'
import Tunes from './components/Tunes'
import About from './components/About'

//style
import './App.scss'

function App() {
	return (
		<div className="App">
			<header>
				<TheNavigation />
				{/* <nav>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/tunes">Tunes</NavLink>
					<NavLink to="/about">About</NavLink>
				</nav> */}
			</header>
			<main className="content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/tunes" element={<Tunes />} />
					<Route path="/about" element={<About />} />

					{/* <Route path="/" element={<h1>Homepage</h1>} />
					<Route
						path="/tunes"
						element={
							<div>
								<h1>Tunes</h1> <Link to="/">go home</Link>
							</div>
						}
					/>
					<Route path="/about" element={<h1>About</h1>} /> */}
				</Routes>
			</main>
			<footer>
				<TheNavigation />
			</footer>
		</div>
	)
}

export default App
