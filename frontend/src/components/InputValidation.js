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
}

InputValidation.defaultProps = {
}

export default InputValidation