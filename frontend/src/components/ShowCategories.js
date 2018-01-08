import React from 'react'
import { ButtonToolbar } from 'react-bootstrap'
import WrappedButton from './WrappedButton'

const ShowCategories = ({ categories }) => (
	<div>
		<h2>Categories</h2>
		<ButtonToolbar>
			<WrappedButton url={'/'}>
				all
			</WrappedButton>
			{categories.map((category) => (
				<WrappedButton key={category.name} url={`/${category.path}/posts`}>
					{category.name}
				</WrappedButton>
			))}
		</ButtonToolbar>
	</div>
)

export default ShowCategories