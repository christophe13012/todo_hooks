import React, { useState } from "react";
import { Input, Button } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";

const Edit = ({ todo, edit, handleEdit }) => {
  const [newTodo, setTodo] = useState(todo);
  return (
    <ListItemText>
      <Input
        style={{ backgroundColor: "white", marginRight: 7, paddingLeft: 5 }}
        value={newTodo.content}
        onChange={e => {
          const todoUpdated = { ...newTodo };
          todoUpdated.content = e.target.value;
          setTodo(todoUpdated);
        }}
      />
      <Button
        color="secondary"
        onClick={() => {
          edit(newTodo);
          handleEdit();
          setTodo("");
        }}
      >
        Valider
      </Button>
    </ListItemText>
  );
};

export default Edit;
