import '../styles/modalApp.css';
import Header from './header';
import CreateTask from './input';
import TaskList from './list';
import AppFooter from './footer';

 

function ModalApp() {

    const getTask = () => {
       
    }

    const addTask = () => {

    }

    return (
        <div className="App">
        <Header></Header>
        <CreateTask></CreateTask>
        <TaskList></TaskList>
        <AppFooter></AppFooter>
        </div>
    );
}

export default ModalApp;