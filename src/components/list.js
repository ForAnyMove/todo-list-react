import Task from "./task";

import '../styles/list.css';

const loop = () => {
    ()=>{
        for(let i = 0; i< 4; i++){
            return <Task text={i}></Task>
        }  
    }
    
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