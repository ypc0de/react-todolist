import { useState, useEffect } from 'react';
import Card from './components/Card';
import CreateTask from './modals/CreateTask';

function App() {
  const [modal, setModal] = useState('none');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let fetchTasks = localStorage.getItem('tasks');

    if (fetchTasks) {
      let converJson = JSON.parse(fetchTasks);
      setTasks(converJson);
    }
  }, []);

  const addTask = (newTask) => {
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const deleteTask = (taskId) => {
    let newTask = tasks.filter((task, index) => index !== taskId);
    setTasks(newTask);
    localStorage.setItem('tasks', JSON.stringify(newTask));
  };

  const updateTask = (newTask, taskId) => {
    let updatedTask = tasks.map((task, index) =>
      index === taskId ? { ...(task[index] = newTask) } : task
    );
    setTasks(updatedTask);

    localStorage.setItem('tasks', JSON.stringify(updatedTask));
  };

  return (
    <>
      <div className='header'>
        <h3>Todo List</h3>
        <button onClick={() => setModal('flex')} className='button'>
          Create Task
        </button>
      </div>
      <div className='task-container'>
        {tasks.map((task, index) => (
          <Card
            task={task}
            key={index}
            id={index}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
      <CreateTask modal={modal} addTask={addTask} closeModal={setModal} />
    </>
  );
}

export default App;
