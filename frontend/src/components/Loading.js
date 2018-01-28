import React from 'react'
import { PulseLoader } from 'react-spinners'
import PropTypes from 'prop-types'
import { If } from 'react-if'

const Loading = ({ show, fullScreen }) => {
	return (
		<If condition={show}>
			<div
				className="loading-component"
				style={{ position: fullScreen ? 'fixed' : 'absolute' }}
			>
				<PulseLoader color={'#36d7b7'} loading={show} size={30} />
			</div>
		</If>
	)
}

Loading.propTypes = {
	show: PropTypes.bool.isRequired,
	fullScreen: PropTypes.bool
}

Loading.defaultProps = {
	fullScreen: false
}

export default Loading
