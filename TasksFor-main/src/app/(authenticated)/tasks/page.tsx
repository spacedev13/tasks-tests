import { useState } from 'react';
import './tasks.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

// Tasks Component
export default function TasksPage() {
  const [tasks, setTasks] = useState([
    { idTask: 1, title: 'Task 1', isChecked: false, userId: 1 },
    { idTask: 2, title: 'Task 2', isChecked: false, userId: 2 },
    { idTask: 3, title: 'Task 3', isChecked: true, userId: 3 },
  ]);

  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.idTask === id ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.idTask !== id);
    setTasks(updatedTasks);
  };

  return (
    <>
      <h2 className="title-page">Board</h2>
      <section className="container-task">
        <section className="container-list-users">
          <div className="box-card">
            <div className="card-info card-info-active">
              <p>Lucas Brandão</p>
              <p><strong>• Department:</strong> Development</p>
              <p>
                <strong>• Tasks:</strong>
                <span>
                  <FontAwesomeIcon icon={faSquare} />
                  <span>10</span>
                </span>
                <span>
                  <FontAwesomeIcon icon={faCheckSquare} />
                  <span>10</span>
                </span>
              </p>
            </div>
            <div className="card-info">
              <p>Davi Tavares</p>
              <p><strong>• Department:</strong> Development</p>
              <p>
                <strong>• Tasks:</strong>
                <span>
                  <FontAwesomeIcon icon={faSquare} />
                  <span>10</span>
                </span>
                <span>
                  <FontAwesomeIcon icon={faCheckSquare} />
                  <span>10</span>
                </span>
              </p>
            </div>
          </div>
        </section>
        <section className="container-list-tasks">
          <div className="list-tasks">
            <p>Tasks of: Lucas Brandão</p>
            <div className="box-task">
              {/* Render tasks */}
              {tasks.map((task) => (
                <div className="task" key={task.idTask}>
                  <div>
                    <input type="checkbox" checked={task.isChecked} onChange={() => updateTask(task.idTask, { isChecked: !task.isChecked })} />
                    <input type="text" value={task.title} />
                  </div>
                  <button onClick={() => deleteTask(task.idTask)}>
                    <FontAwesomeIcon icon="trash" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="container-add-task">
            <input type="text" placeholder="New task..." />
            <button>
              <FontAwesomeIcon icon="plus" />
              Add
            </button>
          </div>
        </section>
      </section>
