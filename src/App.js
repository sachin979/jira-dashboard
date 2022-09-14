import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "First Task",
      status: "Done",
    },
    {
      id: 2,
      name: "Sec Task",
      status: "To be started",
    },
    {
      id: 3,
      name: "Third Task",
      status: "Ongoing",
    },
    {
      id: 4,
      name: "First Task",
      status: "To be started",
    },
    {
      id: 5,
      name: "Fourth Task",
      status: "Ongoing",
    },
    {
      id: 6,
      name: "Fifth Task",
      status: "Done",
    },
    {
      id: 7,
      name: "Sixth Task",
      status: "Done",
    },
    {
      id: 8,
      name: "Seventh Task",
      status: "Done",
    },
  ]);
  const [tobestarted, setTobestarted] = useState(
    tasks.filter((task) => task.status === "To be started")
  );
  const [ongoing, setOngoing] = useState(tasks.filter((task) => task.status === "Ongoing"));
  const [done, setDone] = useState(tasks.filter((task) => task.status === "Done"));

  useEffect(() => {
    setTobestarted(tasks.filter((task) => task.status === "To be started"));
    setOngoing(tasks.filter((task) => task.status === "Ongoing"));
    setDone(tasks.filter((task) => task.status === "Done"));
  }, [tasks]);

  const changetoOngoing = (id) => {
    let tempTasks = tasks.map((task) => {
      if (task.id === id) return { ...task, status: "Ongoing" };
      else return task;
    });
    setTasks(tempTasks);
  };

  const changetoDone = (id) => {
    let tempTasks = tasks.map((task) => {
      if (task.id === id) return { ...task, status: "Done" };
      else return task;
    });
    setTasks(tempTasks);
  };

  return (
    <div className="App">
      <div>
        <div>To be started</div>
        {tobestarted.map((task) => (
          <div key={task.id} onClick={() => changetoOngoing(task.id)} className="task">
            {task.name}
          </div>
        ))}
      </div>
      <div>
        <div>Ongoing</div>
        {ongoing.map((task) => (
          <div key={task.id} className="task" onClick={() => changetoDone(task.id)}>
            {task.name}
          </div>
        ))}
      </div>
      <div>
        <div>Pending</div>
        {done.map((task) => (
          <div key={task.id} className="task">
            {task.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
