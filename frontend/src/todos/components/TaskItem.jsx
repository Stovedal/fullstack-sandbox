
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'

import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import { TextField } from '../../shared/FormFields'
import i18n from '../../localization'
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
  card: {
	margin: '1rem',
	borderRadius: '2rem'
  },
  todoLine: {
    display: 'flex',
    alignItems: 'center'
  },
  textField: {
    flexGrow: 1,
    margin: '1rem',
  },
  standardSpace: {
    margin: '8px'
  },
  checkbox: {
    margin: '1rem'
  }
})

const TaskItem = ({ index, selected, setSelected, task, onClick, onChange, onDelete }) => {

	const classes = useStyles()
  
	return <ListItem onClick={() => setSelected(index)} key={index} className={classes.todoLine}>
		<Checkbox
			className={classes.checkbox}
			edge="start"
			onChange={() => {
				task.completed = !task.completed
				onChange(index, task)
			}}
			/>{
				(selected) ?
		<TextField
			label={i18n.t('tasks.addFormLabel')}
			value={task.text}
			onChange={event => {
				task.text = event.target.value
				onChange(index, task)
			}}
			className={classes.textField}
			/>:
			<ListItemText
				className={classes.textField}
			>
				{task.text}
			</ListItemText>
			}
		<Button
			size='small'
			color='secondary'
			className={classes.standardSpace}
			onClick={() => onDelete(index)}
			>
			<DeleteIcon />
		</Button>
	</ListItem>
}

export default TaskItem