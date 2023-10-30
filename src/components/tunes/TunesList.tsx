import React, { useState } from 'react'

//styles
import './TunesList.scss'

//props
interface Props {
	songs: { id: number; artist: string; name: string }[]
}

//component
const TunesList: React.FC<Props> = (props) => {
	const { songs } = props
	//template
	return (
		<div>
			<ul className="tunes-list">
				{songs.map((song) => (
					<li key={song.id}>{`${song.artist} - ${song.name}`}</li>
				))}
			</ul>
		</div>
	)
}
export default TunesList
