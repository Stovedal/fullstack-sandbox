import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListIcon from '@material-ui/icons/List';

const ToggleButton = ({ label, active, onToggle }) => {  
	return <ListItem
		button
		onClick={() => onToggle()}
	  >
	  <ListItemIcon >
	  <ListIcon color={active ? "secondary" : "inherit"}/>
	  </ListItemIcon>
	  <ListItemText>{label}</ListItemText> 
	</ListItem>
}

export default ToggleButton