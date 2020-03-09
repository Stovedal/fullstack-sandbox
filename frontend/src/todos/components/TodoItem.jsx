import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { TextField } from "../../shared/FormFields";
import i18n from "../../localization";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles({
  card: {
    margin: "1rem",
    borderRadius: "2rem"
  },
  toDoLine: {
    display: "flex",
    alignItems: "center"
  },
  textField: {
    flexGrow: 1,
    margin: "1rem",
  },
  standardSpace: {
    margin: "8px"
  },
  checkbox: {
    margin: "1rem"
  },
  listItemTextContainer: {
    display: "flex",
    flex: "1"
  }
});

const ToDoItem = ({ index, selected, toDo, onSelect, onUpdate, onDelete }) => {
  const [editingText, setEditingText] = useState("");

  const classes = useStyles();

  return (
    <ListItem key={index} className={classes.toDoLine}>
      <Checkbox
        className={classes.checkbox}
        edge="start"
        checked={toDo.completed}
        onChange={() => {
          const new_toDo = {
            ...toDo,
            completed: !toDo.completed
          };
          onUpdate(index, new_toDo);
        }}
      />
      <div className={classes.listItemTextContainer} onClick={() => onSelect()}>
        {selected ? (
          <TextField
            label={i18n.t("toDos.addFormLabel")}
            value={editingText}
            onChange={event => setEditingText(event.target.value)}
            onBlur={() => {
              const newToDo = {
                ...toDo,
                text: editingText
              };
              onUpdate(index, newToDo);
            }}
            onFocus={() => setEditingText(toDo.text)}
            className={classes.textField}
          />
        ) : (
          <ListItemText className={classes.textField}>{(toDo.text !== "") ? toDo.text : '- ' + i18n.t('toDos.noText') + ' -' }</ListItemText>
        )}
      </div>
      <Button
        size="small"
        color="secondary"
        className={classes.standardSpace}
        onClick={() => onDelete(toDo)}
      >
        <DeleteIcon />
      </Button>
    </ListItem>
  );
};

export default ToDoItem;
