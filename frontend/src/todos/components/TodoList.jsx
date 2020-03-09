import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import i18n from "../../localization";
import ToDoItem from "./ToDoItem";
import api from "../../api";
import AddButton from "../../shared/buttons/AddButton";
import ListCompletionIndicator from './ListCompletionIndicator'

const useStyles = makeStyles({
  card: {
    margin: "1rem"
  },
  toDoLine: {
    display: "flex",
    alignItems: "center"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1
  }
});

export const ToDoList = ({ list }) => {
  const classes = useStyles();
  const [toDos, setToDos] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    api.getToDosByList(list).then(data => {
      if (data) {
        setToDos(data);
      } else {
        // Handle neatly
      }
    });
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
  };

  const onToDoDelete = toDo => {
    api.deleteToDo(toDo).then(success => {
      if (success) {
        setToDos(toDos.filter(item => item.id !== toDo.id));
      } else {
        // Handle neatly with error msg etc
      }
    });
  };

  const onToDoUpdate = (index, toDo) => {
    api.editToDo(toDo).then(updatedToDo => {
      if (updatedToDo) {
        const updatedToDos = toDos.slice();
        updatedToDos[index] = updatedToDo;
        setToDos(updatedToDos);
        setSelected(null);
      } else {
        // Handle neatly with error msg etc
      }
    });
  };

  const addToDo = () => {
    api.addToDo(list).then(toDo => {
      if (toDo) {
        setToDos(toDos.concat(toDo));
      } else {
        // Handle neatly with error msg etc
      }
    });
  }; 

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography component="h2">
          <ListCompletionIndicator list={toDos}/>
          {list.name}
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          {toDos.map((toDo, index) => (
            <ToDoItem
              toDo={toDo}
              key={index}
              index={index}
              selected={selected === index}
              onSelect={() => setSelected(index)}
              onUpdate={(index, toDo) => onToDoUpdate(index, toDo)}
              onDelete={toDo => onToDoDelete(toDo)}
            />
          ))}
          <CardActions>
            <AddButton
              label={i18n.t("toDos.addButton")}
              onClick={() => addToDo()}
            />
          </CardActions>
        </form>
      </CardContent>
    </Card>
  );
};
