
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
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
const TaskItem = ({ index, selected, task, onClick, onChange, onDelete }) => {

	const classes = useStyles()
  
	return <div key={index} className={classes.todoLine}>
		<Checkbox
		className={classes.checkbox}
		edge="start"
		/>
		<TextField
		label={i18n.t('tasks.addFormLabel')}
		value={task}
		onChange={event => {
			task = event.target.value
			onChange(task, index)
		}}
		className={classes.textField}
		/>
		<Button
		size='small'
		color='secondary'
		className={classes.standardSpace}
		onClick={() => onDelete(index)}
		>
		<DeleteIcon />
		</Button>
	</div>
}

export default TaskItem