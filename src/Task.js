export const Task = (props) => {
  return (
    <div
      key={props.key}
      style={{ backgroundColor: props.completed ? "green" : "black" }}
    >
      <p>
        {props.taskName} : {props.id}
      </p>
      <button onClick={() => props.completeTask(props.id)}>Complete</button>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
  );
};

// export default Task;
