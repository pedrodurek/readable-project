import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown, MenuItem } from 'react-bootstrap'
const Select = ({ value, options, handle, disabled, className }) => (
		<Dropdown id="filter-dropdown" className={className} onSelect={handle} disabled={disabled}>
			<Dropdown.Toggle>
				{value}
			</Dropdown.Toggle>
			<Dropdown.Menu disabled="true">
				{options.map((option) => (
					<MenuItem
						key={option.key} 
						eventKey={option} 
						active={option.text === value}
					>
						{option.text}
					</MenuItem>
				))}
			</Dropdown.Menu>
		</Dropdown>
)

Select.propTypes = {
	value: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	handle: PropTypes.func,
	disabled: PropTypes.bool,
	className: PropTypes.string,
}

Select.defaultProps = {
	handle: () => {},
	disabled: false,
	className: ''
}

export default Select