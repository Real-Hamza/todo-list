export default function ShowTask({
  taskList,
  setTaskList,
  setTask,
  setEditId,
}) {
  function handleEdit(id) {
    const selected = taskList.find((item) => item.id === id);
    setTask(selected.name);
    setEditId(id);
  }

  function handleDelete(id) {
    const updated = taskList.filter((item) => item.id !== id);
    setTaskList(updated);
  }

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>

        <button className="clearAll" onClick={() => setTaskList([])}>
          Clear All
        </button>
      </div>

      <ul>
        {taskList.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>{item.time}</span>

            <i onClick={() => handleEdit(item.id)}>✏️</i>
            <i onClick={() => handleDelete(item.id)}>🗑️</i>
          </li>
        ))}
      </ul>
    </section>
  );
}
