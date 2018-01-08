import React from 'react'
import { Dropdown, MenuItem } from 'react-bootstrap'
const Select = ({ currentSelected, options, handler }) => (
		<Dropdown id="filter-dropdown" onSelect={handler}>
			<Dropdown.Toggle>
				{currentSelected}
			</Dropdown.Toggle>
			<Dropdown.Menu>
				{options.map((option) => (
					<MenuItem 
						key={option.key} 
						eventKey={option} 
						active={option.text === currentSelected}
					>
						{option.text}
					</MenuItem>
				))}
			</Dropdown.Menu>
		</Dropdown>
)

export default Select