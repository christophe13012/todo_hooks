import React, { useState } from "react";
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  IconButton
} from "@material-ui/core";

import ViewTodo from "./ViewTodo";
import Edit from "./Edit";

const Todo = ({ todo, onDelete, checkOver, edit }) => {
  const [editMode, setEditMode] = useState(false);
  const handleEdit = () => {
    setEditMode(!editMode);
  };
  return (
    <ListItem style={{ borderBottom: "1px solid white" }}>
      <ListItemIcon>
        <Checkbox style={{ color: "white" }} onClick={() => checkOver(todo)} />
      </ListItemIcon>
      {editMode ? (
        <Edit todo={todo} edit={edit} handleEdit={handleEdit} />
      ) : (
        <ViewTodo todo={todo} onDelete={onDelete} onEdit={handleEdit} />
      )}
    </ListItem>
  );
};

export default Todo;
