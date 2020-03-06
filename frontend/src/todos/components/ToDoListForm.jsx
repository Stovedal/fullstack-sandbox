import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Typography from '@material-ui/core/Typography'
import { TextField } from '../../shared/FormFields'
import i18n from '../../localization'
import Checkbox from '@material-ui/core/Checkbox';
import TaskItem from './TaskItem'

const useStyles = makeStyles({
  card: {
    margin: '1rem'
  },
  todoLine: {
    display: 'flex',
    alignItems: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  }
})

export const ToDoListForm = ({ toDoList, saveToDoList }) => {

  const classes = useStyles()
  const [todos, setTodos] = useState(toDoList.todos)
  const [selected, setSelected] = useState(null)

  const handleSubmit = event => {
    event.preventDefault()
    saveToDoList(toDoList.id, { todos })
  }

  const onTaskChange = (index, task) => {
    setTodos([ // immutable update
      ...todos.slice(0, index),
      task,
      ...todos.slice(index + 1)
    ])
  }

  const onTaskDelete = (index) => {
    setTodos([ // immutable delete
      ...todos.slice(0, index),
      ...todos.slice(index + 1)
    ])
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography component='h2'>
          {toDoList.title}
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          {todos.map((task, index) => <TaskItem
            task={task}
            index={index}
            selected={selected==index}
            onClick={() => setSelected(index)}
            onChange={(index, task) => onTaskChange(index, task)}
            onDelete={(index) => onTaskDelete(index)}
          />)}
          <CardActions>
            <Button
              type='button'
              color='primary'
              onClick={() => {
                setTodos([...todos, ''])
              }}
            >
              {i18n.t('tasks.addButton')} <AddIcon />
            </Button>
            <Button type='submit' variant='contained' color='primary'>
              {i18n.t('general.save')}
            </Button>
          </CardActions>
        </form>
      </CardContent>
    </Card>
  )
}


