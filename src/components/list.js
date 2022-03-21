import Task from "./task";

import '../styles/list.css';

const loop = () => {
    console.group(document.getElementById('todo-list'))
    return <Task text={'gdgffdg'}></Task>
    
}

function TaskList(props) {

  return (
      <ul id="todo-list" className="todo-list">
          <Task text="test task 1"></Task>
          {loop()}
      </ul>
  );
}

export default TaskList;