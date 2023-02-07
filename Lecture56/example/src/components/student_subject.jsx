import React from 'react';

function StudentSubject() {
	const [name, setName] = React.useState("");
	const [subject, setSubject] = React.useState("");
	const [data, setData] = React.useState([])
	const handleSubmit = (e) => {
		e.preventDefault();
		setData((old_data) => [...old_data, { name, subject }]);
	}

	const formatOutput = (dataArray) => dataArray.map(({ name, subject }) => (
		<div>
			<h6>New Admission</h6>
			<p>A student named &quot;{name}&quot; has taken admission in the {subject} class</p>
		</div>
	))

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Name: </label>
					<input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
				</div>
				<div>
					<label htmlFor="subject">Subject: </label>
					<input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
				</div>
				<input type="submit" value="Submit" />
			</form>
			<p>
				{formatOutput(data)}
			</p>
		</>
	)
}

export default StudentSubject;