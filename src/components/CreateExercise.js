import React, { useState } from "react"
import DatePicker from "react-datepicker"

const CreateExercise = () => {
	const [username, setUsername] = useState("")
	const [description, setDescription] = useState("")
	const [duration, setDuration] = useState(0)
	const [users, setUsers] = useState([])
	const [date, setDate] = useState(new Date())

	// handling the form submission
	const handleFormSubmit = (e) => {
		e.preventDefault()

		const exercise = {
			username,
			description,
			duration,
			date: new Date(),
		}

		window.location = "/"
	}

	return (
		<div>
			<h3>Create New Exercise Log</h3>
			<form onSubmit={handleFormSubmit}>
				<div className="form-group">
					<label>Username: </label>
					<select
						required
						className="form-control"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					>
						{users.map((user) => {
							return (
								<option key={user} value={user}>
									{user}
								</option>
							)
						})}
					</select>
				</div>
				<div className="form-group">
					<label>Description: </label>
					<input
						type="text"
						required
						className="form-control"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Duration (in minutes): </label>
					<input
						type="text"
						className="form-control"
						value={duration}
						onChange={(e) => setDuration(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Date: </label>
					<div>
						<DatePicker
							selected={date}
							onChange={(e) => setDate(e.target.value)}
						/>
					</div>
				</div>

				<div className="form-group">
					<input
						type="submit"
						value="Create Exercise Log"
						className="btn btn-primary mt-3"
					/>
				</div>
			</form>
		</div>
	)
}

export default CreateExercise
