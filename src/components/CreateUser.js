import React, { useState } from "react"

const CreateUser = () => {
	const [username, setUsername] = useState("")

	const handleFormSubmit = (e) => {
		e.preventDefault()

		const user = {
			username,
		}

		console.log(user)

		window.location = "/"
	}
	return (
		<div>
			<h3>Create New User</h3>
			<form onSubmit={handleFormSubmit}>
				<div className="form-group">
					<label>Username: </label>
					<input
						type="text"
						required
						className="form-control"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<input
						type="submit"
						value="Create User"
						className="btn btn-primary mt-4"
					/>
				</div>
			</form>
		</div>
	)
}

export default CreateUser
