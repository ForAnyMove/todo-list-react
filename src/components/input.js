import check from '../img/icon-check.svg';

import '../styles/input.css';



function CreateTask() {

    function exportNewTask(){
        let newElement = document.getElementById('create-input')
        console.log(newElement.value)
        newElement.value=''
    }

    return (
        <div className="create-container">
            <img src={check} alt="check" id="add-task" onClick={exportNewTask}></img>
            <input className="create-task" id="create-input"></input>
        </div>
    );
  }
  
  export default CreateTask;