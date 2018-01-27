import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown, MenuItem } from 'react-bootstrap'
const Select = ({ value, options, handle, disabled }) => (
		<Dropdown id="filter-dropdown" onSelect={handle} disabled={disabled}>
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
	disabled: PropTypes.bool
}

Select.defaultProps = {
	handle: () => {},
	disabled: false
}

export default Select