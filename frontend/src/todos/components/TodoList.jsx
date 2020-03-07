import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Typography from '@material-ui/core/Typography'
import i18n from '../../localization'
import TodoItem from './TodoItem'
import api from '../../api'

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

export const TodoList = ({ list }) => {

  const classes = useStyles()
  const [todos, setTodos] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    api.getTodosByListId(list.id)
      .then(setTodos)
  })

  const handleSubmit = event => {
    event.preventDefault()
    //saveToDoList(list.id, { todos })
  }

  const onTodoChange = (index, todo) => {
    setTodos([ // immutable update
      ...todos.slice(0, index),
      todo,
      ...todos.slice(index + 1)
    ])
  }

  const onTodoDelete = (index) => {
    setTodos([ // immutable delete
      ...todos.slice(0, index),
      ...todos.slice(index + 1)
    ])
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography component='h2'>
          {list.name}
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          {todos.map((todo, index) => <TodoItem
            todo={todo}
            index={index}
            selected={selected==index}
            setSelected={(index) => setSelected(index)}
            onClick={() => setSelected(index)}
            onChange={(index, todo) => onTodoChange(index, todo)}
            onDelete={(index) => onTodoDelete(index)}
          />)}
          <CardActions>
            <Button
              type='button'
              color='primary'
              onClick={() => {
                setTodos([...todos, {}])
              }}
            >
              {i18n.t('todos.addButton')} <AddIcon />
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


