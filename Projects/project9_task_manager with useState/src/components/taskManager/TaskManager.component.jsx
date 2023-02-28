import React, { useState, useRef, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import Task from "./Task.component";
import "./TaskManager.css";

const TaskManager = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  //const [tasks, setTasks] = useState([]);
  const [taskID, setTaskID] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const nameInputRef = useRef(null);

  useEffect(() => {
    nameInputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((!name && !date) || !name || !date) {
      alert("Please enter task name and date!");
    } else if (name && date && isEditing) {
      setTasks(
        tasks.map((item) => {
          if (item.id === taskID) {
            return { ...item, name: name, date: date, complete: false };
          }

          return item;
        })
      );

      setName("");
      setDate("");
      setIsEditing(false);
      setTaskID(null);
    } else {
      //tárolni kívánt task objektum template-ének létrehozása
      const newTask = {
        id: Date.now(),
        name: name,
        date: date,
        complete: false,
      };

      //itt már megvan az új objektum az inputokból
      console.log(newTask);

      //új objektum hozzáaadása a tasks változóhoz
      setTasks([...tasks, newTask]);
      setName("");
      setDate("");
    }
  };

  const editTask = (id) => {
    //itt keresem ki az ID alapján a task-ot, és mentem el egyváltozóba
    const thisTask = tasks.find((item) => item.id === id);
    setIsEditing(true);
    setTaskID(id);
    console.log(thisTask.name);
    console.log(thisTask.date);
    setName(thisTask.name);
    setDate(thisTask.date);
  };

  const deleteTask = (id) => {
    if (window.confirm("Delete this task?") === true) {
      const newTasks = tasks.filter((item) => item.id !== id);

      setTasks(newTasks);
    }
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((item) => {
        if (item.id === id) {
          return { ...item, complete: true };
        }

        return item;
      })
    );
  };

  return (
    <div className="--bg-primary">
      <h1 className="--text-center --text-light">Task Manager</h1>
      <div className="--flex-center --p">
        <div className="--card --bg-light --width-500px --p --flex-center">
          <form onSubmit={handleSubmit} className="form --form-control">
            <div>
              <label htmlFor="name">Task:</label>
              <input
                ref={nameInputRef}
                type="text"
                placeholder="Task name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="date">Task:</label>
              <input
                type="date"
                placeholder="Task name"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <button className="--btn --btn-success --btn-block">
              {isEditing ? "Edit Task" : "Save Task"}
            </button>
          </form>
        </div>
      </div>
      {/* Display Task */}

      <article className="--flex-center --my2">
        <div className="--width-500px --p">
          <h2 className="--text-light">Task List</h2>
          <hr style={{ background: "#fff" }} />

          {tasks.length === 0 ? (
            <p className="--text-light">No task added...</p>
          ) : (
            <div key={tasks.id}>
              {tasks.map((task) => {
                return (
                  <Task
                    {...task}
                    editTask={editTask}
                    deleteTask={deleteTask}
                    completeTask={completeTask}
                  />
                );
              })}
            </div>
          )}
        </div>
      </article>
    </div>
  );
};

export default TaskManager;
