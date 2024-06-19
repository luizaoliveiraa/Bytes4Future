import { useEffect, useState } from "react";

const ProgressGraph = ({ selectedDay, currentMonth, currentYear }) => {
  const [tasks, setTasks] = useState({
    Read: 120,
    Work: 90,
    Focus: 150,
    Study: 370,
    Fitness: 260,
  });

  useEffect(() => {
    const fetchTasksData = async () => {
      try {
        const responses = await Promise.all([
          axios.get(`/api/db?taskName=Read&date=${selectedDay}/${currentMonth + 1}/${currentYear}`),
          axios.get(`/api/db?taskName=Work&date=${selectedDay}/${currentMonth + 1}/${currentYear}`),
          axios.get(`/api/db?taskName=Focus&date=${selectedDay}/${currentMonth + 1}/${currentYear}`),
          axios.get(`/api/db?taskName=Study&date=${selectedDay}/${currentMonth + 1}/${currentYear}`),
          axios.get(`/api/db?taskName=Fitness&date=${selectedDay}/${currentMonth + 1}/${currentYear}`),
        ]);
        const tasksData = responses.map(response => response.data[0]);
        const tasksObj = tasksData.reduce((acc, task) => {
          acc[task.taskName] = task.timeSpent;
          return acc;
        }, {});
        setTasks(tasksObj);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTasksData();
  }, [selectedDay, currentMonth, currentYear]);

  useEffect(() => {
    const storageKey = `tasks-${currentYear}-${currentMonth}-${selectedDay}`;
    localStorage.setItem(storageKey, JSON.stringify(tasks));
  }, [tasks, selectedDay, currentMonth, currentYear]);

  const totalMinutes = Object.values(tasks).reduce((acc, curr) => acc + curr, 0);

  const getColorForTask = (taskName) => {
    switch (taskName) {
      case "Read":
      return "#BA3D36";
    case "Work":
      return "#D34840";
    case "Focus":
      return "#F47501";
    case "Study":
      return "#D98E1E";
    case "Fitness":
      return "#258239";
    default:
      return "#000000";
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 pt-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-300">
        Progress - {selectedDay}/{currentMonth + 1}
      </h2>
      <div className="flex flex-wrap mb-4">
        {Object.keys(tasks).map((taskName, index) => (
          <div key={index} className="w-full md:w-1/2 xl:w-1/3 p-2 text-gray-400">
            <div className="bg-transparent h-4 rounded-full overflow-hidden">
              <div
                className="h-4 rounded-full"
                style={{ width: `${(tasks[taskName] / totalMinutes) * 100}%`, backgroundColor: getColorForTask(taskName) }}
              ></div>
            </div>
            <span className="text-lg">{taskName}</span>
            <span className="text-gray-600 ml-2">{tasks[taskName]} minutes</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressGraph;