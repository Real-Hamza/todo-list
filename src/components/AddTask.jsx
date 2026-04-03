export default function AddTask({
  taskList,
  setTaskList,
  task,
  setTask,
  editId,
  setEditId,
}) {
  function handleSubmit(e) {
    e.preventDefault();

    if (!task) return;

    if (editId) {
      const updated = taskList.map((item) =>
        item.id === editId ? { ...item, name: task } : item,
      );

      setTaskList(updated);
      setEditId(null);
    } else {
      const newTask = {
        id: Date.now(),
        name: task,
        time: new Date().toLocaleString(),
      };

      setTaskList([...taskList, newTask]);
    }

    setTask("");
  }

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add Task"
        />
        <button>{editId ? "Update" : "Add"}</button>
      </form>
    </section>
  );
}
