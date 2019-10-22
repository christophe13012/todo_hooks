import React, { useState } from "react";
import { Input, Button } from "@material-ui/core";

const Add = ({ add }) => {
  const [todo, setTodo] = useState("");
  return (
    <div style={{ padding: 20, marginTop: 20 }}>
      <Input
        style={{ backgroundColor: "white", marginRight: 7, paddingLeft: 5 }}
        placeholder=" Entrer votre todo ici"
        value={todo}
        onChange={e => setTodo(e.target.value)}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          add(todo);
          setTodo("");
        }}
      >
        Valider
      </Button>
    </div>
  );
};

export default Add;
