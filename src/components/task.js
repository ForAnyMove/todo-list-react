import check from '../img/icon-check.svg';
import cross from '../img/icon-cross.svg';

function Task(props) {
    return (
        <li>
            <img src={check}></img>
            <p>{props.text}</p>
            <img src={cross}></img>
        </li>
    );
  }
  
  export default Task;