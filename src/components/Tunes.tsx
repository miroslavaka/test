import React, { useState } from 'react'

//children
import TunesSearchForm from '../components/tunes/TunesSearchForm'
import TunesList from '../components/tunes/TunesList'

//style
import './Tunes.scss'

//component
const Tunes = () => {
	const [searchQuery, setSearchQuery] = useState('')
	const [songs, setSongs] = useState([
		{ id: 1, artist: 'Great Artist', name: 'Great Song' },
		{ id: 2, artist: 'Samco, brat dazdoviek', name: 'Darovacka' },
		{ id: 3, artist: 'IMT Frown', name: 'Preafektovana' },
	])

	//callback
	const handleSearchFormSubmit = (data: string) => {
		const newSong = {
			id: Math.max(...songs.map((s) => s.id)) + 1,
			artist: data,
			name: data,
		}

		setSongs([...songs, newSong])
	}

	//callback
	const handleInputChange = (data: string) => {
		setSearchQuery(data)
	}

	//template
	return (
		<article className="tunes">
			<h1>Tunes</h1>
			<TunesSearchForm
				searchQuery={searchQuery}
				onInputChange={handleInputChange}
				onSearchFormSubmit={handleSearchFormSubmit}
			/>
			<TunesList songs={songs} />
		</article>
	)
}
export default Tunes
