import Task_Details from "../components/template/Task/Task_Details";
import TaskList from "../components/template/Task/TaskList";

const Task = () => {
    return (
        <div className="min-h-screen bg-black p-5 relative">
            <Task_Details />
            <div className="mt-20 relative">
                <TaskList />
            </div>
        </div>
    );
};

export default Task;