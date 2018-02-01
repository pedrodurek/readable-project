import React from 'react'
import PropTypes from 'prop-types'
import { ButtonToolbar } from 'react-bootstrap'
import WrappedButton from './WrappedButton'

const ShowCategories = ({ categories }) => (
	<div>
		<h2 className="main-header">Categories</h2>
		<div className="content">
			<ButtonToolbar>
				<WrappedButton to={'/'}>all</WrappedButton>
				{categories.map((category) => (
					<WrappedButton key={category.name} to={`/${category.path}`}>
						{category.name}
					</WrappedButton>
				))}
			</ButtonToolbar>
		</div>
	</div>
)

ShowCategories.propTypes = {
	categories: PropTypes.array.isRequired
}

export default ShowCategories
