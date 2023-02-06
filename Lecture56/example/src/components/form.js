import React from 'react';
import styles from './styles.module.css';

const style = {
	form_data: {
		border: "1px solid #333",
		margin: "0.5rem 0",
		height: '50px',
		width: '300px',
	}
}

const Form = () => (
	<>
		<p>What is your first name?</p>
		<div style={style.form_data} />
		<p>What is your last name?</p>
		<div style={style.form_data} />
		<button className={styles.highlight}>Submit</button>
	</>
)

export default Form;