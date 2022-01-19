import "../styles/App.css";
import { useState, useEffect } from "react";
import originalData from "../data/tasks-4.json";
import ls from "../services/localStorage";

function App() {
  // Traemos datos del fichero data y metemos en variable estado
  const [tasks, setTasks] = useState(ls.get("tasks", originalData));
  const [newTask, setNewTask] = useState("");
  const [filterTask, setFilterTask] = useState("");

  // LOCAL STORAGE
  useEffect(() => {
    ls.set("tasks", tasks);
  }, [tasks]);

  const handleNewTaskChange = (ev) => {
    setNewTask(ev.currentTarget.value);
  };
  const handleFilterChange = (ev) => {
    setFilterTask(ev.currentTarget.value);
  };

  // Función para agregar tarea
  const handleAddClick = () => {

    const newId = tasks.reduce( (record,eachTask) => record > eachTask.id ? record : eachTask.id, 0)

    const newObject = {
      id: newId +1, //tasks.length,
      task: newTask,
      completed: false,
    };
    // NO hacemos push directamente a tasks
    // tasks.push(newObject);
    if (newTask !== "") {
      // Debemos "clonar" tasks y agregarle el nuevo objeto, el setTasks NO acepta el mismo array original, necesita uno nuevo
      setTasks([...tasks, newObject]);
      // Vaciamos el input
      setNewTask("");
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  // Función manejadora del click de cada li
  const handleClick = (ev) => {
    const clickedTaskId = parseInt(ev.currentTarget.id);
    // Usamos el idClickado como index en el array e invertimos ! su propiedad completed
    const foundIndex = tasks.findIndex(eachTask=> eachTask.id === clickedTaskId)
    tasks[foundIndex].completed = !tasks[foundIndex].completed;
    setTasks([...tasks]);
  };

  const handleDeleteClick = (ev) => {
    const clickedTaskId = ev.currentTarget.id;
    // tasks.splice(clickedTaskId, 1)
    // setTasks([...tasks])
    setTasks(tasks.filter((eachTask) => eachTask.id !== parseInt(clickedTaskId)));
  };

  // Renderizar título
  const renderTitle = () => {
    return <h1>Mi lista de tareas</h1>;
  };

  // Renderizar lista
  const renderList = () => {
    return (
      tasks
        // Filtramos acorde al valor del input
        .filter((eachTask) =>
          eachTask.task.toLowerCase().includes(filterTask.toLowerCase())
        )
        // Pintamos cada elemento ya filtrado
        .map((eachTask) => {
          return (
            <div key={eachTask.id} id={eachTask.id}>
              <li
                id={eachTask.id}
                className={eachTask.completed ? "task done" : "task"}
                onClick={handleClick}
              >
                {eachTask.task}
              </li>
              <button onClick={handleDeleteClick} id={eachTask.id}>
                X
              </button>
            </div>
          );
        })
    );
  };

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter((eachTask) => eachTask.completed).length;

  const toDoTasks = tasks.filter((eachTask) => !eachTask.completed).length;

  return (
    <div>
      {renderTitle()}
      <ol>{renderList()}</ol>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Filtrar por tarea</label>
        <input
          type="text"
          name="filterTask"
          id="filterTask"
          onChange={handleFilterChange}
          value={filterTask}
        />
        <label htmlFor="">Añade una nueva tarea</label>
        <input
          type="text"
          name="newTask"
          id="idTask"
          onChange={handleNewTaskChange}
          value={newTask}
        />
        <button onClick={handleAddClick}>Agregar</button>
        <p>Tareas totales: {totalTasks}</p>
        <p>Tareas completadas: {completedTasks}</p>
        <p>Tareas pendientes: {toDoTasks}</p>
      </form>
    </div>
  );
}

export default App;
