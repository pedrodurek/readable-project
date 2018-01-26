import React from 'react'
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

export default Select