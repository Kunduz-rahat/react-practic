import React from 'react';
import classes from './MySelect.module.css'

export const MySelect = ({options, defaultValue}) => {
	return (
		<select className={classes.select}>
		<option disabled value=''>{defaultValue}</option>
		{
			options.map(option =>
			<option key={option.value} value={option.value}>
				{option.name}
			</option>)
		}

		</select>
	)
}
