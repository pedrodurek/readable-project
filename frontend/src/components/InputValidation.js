import React from 'react'
import PropTypes from 'prop-types'

const InputValidation = ({ 
	input, 
	label, 
	type, 
	disabled, 
	meta: { touched, error, warning } 
}) => (
	<div>
		<label>{label}</label>
		<div>
			<input {...input} placeholder={label} type={type} disabled={disabled} />
		</div>
		<div>
			{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
		</div>
	</div>
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