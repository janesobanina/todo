import './App.css';
import { ToDoList } from './ToDoList';
import image from './image.jpg'
import imageTwo from './imageTwo.jpg'

function App() {
  return (
    <div className='container'>
      <img src={ image } alt='todo list' width='250px'/>
      <h1>To Do List</h1>
      <ToDoList />
      <img src={ imageTwo } alt='ok' width='340px' className='imgTwo' />
    </div>
  );
}

export default App;
