import React, { Fragment, useState, useEffect } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import { ToDoList } from './ToDoList'
import i18n from '../../localization'
import api from '../../api'
import { CardActions } from '@material-ui/core'
import ToggleButton from '../../shared/buttons/ToggleButton'

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
    </CardActions>
      </CardContent>
    </Card>
    {displayedLists.map((list,index) => <ToDoList key={index} list={list}/>)}
  </Fragment>
}

