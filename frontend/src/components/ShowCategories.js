import React from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap'

const ShowCategories = ({ categories }) => (
	<div>
		<h2>Categories</h2>
		<ButtonToolbar>
			{categories.map((category) => (
				<Button key={category.name} bsStyle="primary">
					{category.name}
				</Button>
			))}
		</ButtonToolbar>
	</div>
)

export default ShowCategories