import React from 'react';
import styles from './styles.module.css'

function Age() {
	const [age, setAge] = React.useState(0);
	console.log(styles);

	return (
		<div className={styles.highlight}>
			<form>
				<label for='age_input'>Enter your age:</label>
				<input
					id='age_input'
					type='number'
					value={age}
					onChange={(event) => { setAge(event.target.value) }}
				/>
			</form>
			<div className={styles['bg-aqua']}>
				{
					(age === 0) ? <h1>You are not yet born</h1> : null
				}
				{
					age > 0 && age <= 12 && <h1>You are a kid! Enjoy!</h1>
				}
			</div>
		</div>
	)
}

export default Age;