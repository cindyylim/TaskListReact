import React from "react";
import DoneIcon from '@material-ui/icons/Done';

function Task(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="task">
      <p>{props.content}</p>
      <button onClick={handleClick}><DoneIcon/></button>
    </div>
  );
}

export default Task;
