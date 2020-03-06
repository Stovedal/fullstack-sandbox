import React, { Fragment, useState, useEffect } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Typography from '@material-ui/core/Typography'
import { ToDoListForm } from './ToDoListForm'
import ListIcon from '@material-ui/icons/List';
import i18n from '../../localization'
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const getPersonalTodos = () => {
  return sleep(1000).then(() => Promise.resolve({
    '0000000001': {
      id: '0000000001',
      title: 'First List',
      todos: ['First todo of first list!']
    },
    '0000000002': {
      id: '0000000002',
      title: 'Second List',
      todos: ['First todo of second list!']
    }
  }))
}

export const ToDoLists = ({ style }) => {
  const [toDoLists, setToDoLists] = useState({})
  const [activeList, setActiveList] = useState('0000000002')

  console.log(activeList);
  

  useEffect(() => {
    getPersonalTodos()
      .then(setToDoLists)
  }, [])

  if (!Object.keys(toDoLists).length) return null
  return <Fragment>
    <Card style={style}>
      <CardContent>
        <Typography
          component='h2'
        >
          {i18n.t('lists.title')}
        </Typography>
        <List style={{display: "flex"}} >
          {Object.keys(toDoLists).map((key) => <TodoList key={key} item={toDoLists[key]} selected={false} setSelected={() => setActiveList(key)}/>)}
        </List>
      </CardContent>
    </Card>
    {toDoLists[activeList] && <ToDoListForm
      key={activeList} // use key to make React recreate component to reset internal state
      toDoList={toDoLists[activeList]}
      saveToDoList={(id, { todos }) => {
        const listToUpdate = toDoLists[id]
        setToDoLists({
          ...toDoLists,
          [id]: { ...listToUpdate, todos }
        })
      }}
    />}
  </Fragment>
}

const TodoList = ({ item, selected, setSelected }) => {

  return <ListItem
    style={{ width: "20%"}}
    button
    onClick={() => setSelected()}
  >
  <ListItemIcon >
  <ListIcon color={selected ? "secondary" : "inherit"}/>

  </ListItemIcon>
  <ListItemText primary={item.title} />
</ListItem>
} 
