import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";

const InputValidation = ({ 
	input, 
	label, 
	type, 
	disabled, 
	meta: { touched, error, warning } 
}) => (
	<FormGroup>
		<ControlLabel>{label}</ControlLabel>	
		<FormControl 
			{...input} 
			placeholder={label} 
			type={type} 
			disabled={disabled}
		/>
		{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
	</FormGroup>
)

InputValidation.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string,
	disabled: PropTypes.bool
}

InputValidation.defaultProps = {
	type: 'text',
	disabled: false
}

export default InputValidation