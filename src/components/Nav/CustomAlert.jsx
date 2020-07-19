import React, { useState } from 'react'
import Alert from '@material-ui/lab/Alert'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

export default function CustomAlert(props) {
	const [open, setOpen] = useState(true)
	return (
		<Collapse in={open} style={{ width: '80vw', margin: '0 auto' }}>
			<Alert
				severity="warning"
				action={
					<IconButton
						aria-label="close"
						color="inherit"
						size="small"
						onClick={() => {
							setOpen(false)
						}}
					>
						<CloseIcon fontSize="inherit" />
					</IconButton>
				}
			>
				{props.message}
			</Alert>
		</Collapse>
	)
}
