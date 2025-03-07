import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [task, setTask] = useState({
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setTask((prevTask) => {
      return { ...prevTask, [name]: value };
    });
  }

  function submitTask(event) {
    props.onAdd(task);
    setTask({
      content: "",
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-task">
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={task.content}
          placeholder="Add your task"
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitTask} aria-label="add">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
