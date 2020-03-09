import React from 'react'
import AddIcon from '@material-ui/icons/Add'
import { Button } from '@material-ui/core'

const AddButton = ({label, onClick}) => {
	return <Button color={'secondary'} onClick={onClick}>
		<AddIcon/>
		{label}
	</Button>
}

export default AddButton