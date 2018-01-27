import React from 'react'
import PropTypes from 'prop-types'
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
				<WrappedButton key={category.name} url={`/${category.path}`}>
					{category.name}
				</WrappedButton>
			))}
		</ButtonToolbar>
	</div>
)

ShowCategories.propTypes = {
	categories: PropTypes.array.isRequired
}

export default ShowCategories