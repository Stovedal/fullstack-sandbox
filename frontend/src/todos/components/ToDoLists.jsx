import React, { Fragment, useState, useEffect } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import { TodoList } from './TodoList'
import i18n from '../../localization'
import api from '../../api'
import { CardActions } from '@material-ui/core'
import AddButton from './AddButton'
import ToggleButton from './ToggleButton'

export const ToDoLists = ({ style }) => {

  const [toDoLists, setToDoLists] = useState({})
  const [displayedLists, setDisplayedLists] = useState([])

  useEffect(() => {
    api.getLists()
      .then(setToDoLists)
  }, [])


  const toggleDisplayedList = (list) => {
    if(!displayedLists.includes(list)) {
      // Show list
      setDisplayedLists(displayedLists.concat(list))
    } else {
      // Hide list
      setDisplayedLists(displayedLists.filter((item) => item.id !== list.id))
    }
  }

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
        {toDoLists.map((list, index) => <ToggleButton
          key={index}
          label={list.name}
          active={displayedLists.includes(list)}
          onToggle={() => toggleDisplayedList(list)}
        />)}
        </List>
        <CardActions>
      <AddButton label={i18n.t('lists.add')} onClick={() => {}} />
    </CardActions>
      </CardContent>
    </Card>
    {displayedLists.map((list,index) => <TodoList key={index} list={list}/>)}
  </Fragment>
}

