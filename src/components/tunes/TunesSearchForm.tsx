import React from 'react'

//styles
import './TunesSearchForm.scss'

interface Props {
	searchQuery: string
	onInputChange: (data: string) => void
	onSearchFormSubmit: (data: string) => void
}

//component
const TunesSearchForm: React.FC<Props> = (props) => {
	const { searchQuery } = props
	//submit form
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		props.onSearchFormSubmit(searchQuery)
		//alert(query)
	}

	//input change
	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		props.onInputChange(event.target.value)
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={searchQuery}
					onChange={handleInput}
					className="search"
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}
export default TunesSearchForm
