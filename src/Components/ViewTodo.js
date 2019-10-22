import React from "react";
import { ListItemText, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Icon from "@material-ui/core/Icon";

const ViewTodo = ({ todo, onDelete, onEdit }) => {
  return (
    <React.Fragment>
      <ListItemText
        style={todo.isOver ? styles.over : null}
        primary={todo.content}
      />
      <Icon onClick={() => onEdit()}>create</Icon>
      <IconButton aria-label="delete" onClick={() => onDelete(todo.id)}>
        <DeleteIcon style={{ color: "white" }} />
      </IconButton>{" "}
    </React.Fragment>
  );
};

const styles = {
  over: { textDecoration: "line-through" }
};

export default ViewTodo;
