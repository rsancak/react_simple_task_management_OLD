import Create from './management/Create';
import List from './management/List';
import { useState } from 'react';

function App({ toast }) {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, description) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        description,
      },
    ];
    setTasks(createdTasks);
  };

  const deleteTaskById = (id) => {
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };
  const editTaskById = (id, updatedTitle, updatedDescription) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, description: updatedDescription };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='container-left col-4'>
          <Create toast={toast} onCreate={createTask} />
        </div>
        <div className='container-right task-list col-8'>
          <h4>Task List</h4>
          {tasks.length ?
            <List
              toast={toast}
              tasks={tasks}
              onDelete={deleteTaskById}
              onUpdate={editTaskById}
            /> :
            <p className='alert alert-warning'>No task entered yet :(</p>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
