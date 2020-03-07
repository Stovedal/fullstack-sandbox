import React, { Fragment, useState, useEffect } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Typography from '@material-ui/core/Typography'
import { TodoList } from './TodoList'
import ListIcon from '@material-ui/icons/List';
import i18n from '../../localization'
import api from '../../api'


export const ToDoLists = ({ style }) => {

  const [toDoLists, setToDoLists] = useState({})
  const [selectedList, setSelectedList] = useState(null)

  useEffect(() => {
    api.getLists()
      .then(setToDoLists)
  }, [])

  console.log(toDoLists);
  
  if (!Object.keys(toDoLists).length) return null
  return <Fragment>
    <Card style={style}>
      <CardContent>
        <Typography
          component='h2'
        >
          {i18n.t('lists.title')}
        </Typography>
        <List>
        {toDoLists.map((list) => <TodoListButton
          list={list}
          selected={selectedList == list}
          setSelected={() => setSelectedList(list)}
        />)}
        </List>
      </CardContent>
    </Card>
    {(selectedList) ? <TodoList list={selectedList}/> : null}
  </Fragment>
}
// {Object.keys(toDoLists).map((key) => <TodoList key={key} list={toDoLists[key]} selected={false} setSelected={() => setActiveList(key)}/>)}

const TodoListButton = ({ list, selected, setSelected }) => {  
  return <ListItem
    button
    onClick={() => setSelected()}
  >
  <ListItemIcon >
  <ListIcon color={selected ? "secondary" : "inherit"}/>
  </ListItemIcon>
  <ListItemText>{list.name}</ListItemText> 
</ListItem>
} 
