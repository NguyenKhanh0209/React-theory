import { useEffect, useState } from "react";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const Practice1 = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (!input.trim()) return;

    const newTask = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setInput("");
  };

  const handleConvertDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const formatted = date.toLocaleDateString("vi-VN");
    return formatted;
  };

  const handleFinishTask = (id: number) => {
    const updateTask = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return task;
    });
    setTasks(updateTask);
  };

  const handleDeleteTask = (id: number) => {
    const deleteTask = tasks.filter((task) => task.id !== id);
    setTasks(deleteTask);
  };
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl">Todo list</h1>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-300 rounded-md  focus:ring-blue-500 box-border"
          style={{ padding: "0.5rem 1rem" }}
        />
        <button
          className="bg-blue-700 text-white rounded-md cursor-pointer hover:bg-blue-800"
          style={{ padding: "0.5rem 1rem" }}
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>
      <div className="">
        {tasks.length === 0 ? (
          <div>There is no task yet. Please add some tasks to get started!</div>
        ) : (
          <div>
            <div className="">
              <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200 ">
                    <th className="border-r border-gray-300 p-2">Date</th>
                    <th className="border-r border-gray-300 p-2">Content</th>
                    <th className="border-r border-gray-300 p-2">Checkbox</th>
                    <th className="border-r border-gray-300 p-2">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task) => (
                    <tr key={task.id} className="hover:bg-gray-100">
                      <td className="border border-gray-300 p-2">
                        {handleConvertDate(task.id)}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {task.text}
                      </td>
                      <td className="border border-gray-300 p-2">
                        <input
                          type="checkbox"
                          checked={task.completed}
                          onChange={() => handleFinishTask(task.id)}
                        />
                      </td>
                      <td className="border border-gray-300 p-2">
                        <button
                          className="bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-600 p-2"
                          onClick={() => handleDeleteTask(task.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Practice1;
