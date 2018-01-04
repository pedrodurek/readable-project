import React from 'react'
import { Dropdown, MenuItem } from 'react-bootstrap'
import FaFilter from 'react-icons/lib/fa/filter'

const Filter = ({ options, handler }) => (
		<Dropdown id="filter-dropdown" onSelect={handler}>
			<Dropdown.Toggle>
				<FaFilter size={30} />
			</Dropdown.Toggle>
			<Dropdown.Menu>
				{options.map((option) => (
					<MenuItem key={option.key} eventKey={option.key}>
						<option.icon />
						{option.text}
					</MenuItem>
				))}
			</Dropdown.Menu>
		</Dropdown>
)

export default Filter