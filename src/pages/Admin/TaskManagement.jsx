import { useState } from "react";
import TaskItemPreview from "../../components/template/Admin/Task Management/TaskItemPreview";
import { useTaskListQuery } from "../../rtk/api/Endpoint";
import { useForm } from "react-hook-form";
import { useAddTaskMutation } from "../../rtk/api/AdminEndpoint";

const TaskManagement = () => {
    const [newTaskModal, setNewTaskModal] = useState(false);
    const { data, isFetching } = useTaskListQuery(undefined);
    const { register, handleSubmit, reset } = useForm();
    const [triggerAddNewTask, { isSuccess }] = useAddTaskMutation();
    const HandleAddNewTask = async (e) => {
        await triggerAddNewTask(e);
        setNewTaskModal(false);
        reset();
    }
    return (
        <div className="p-5">
            {
                newTaskModal === true &&
                <dialog id="my_modal_1" open className="modal backdrop-blur-md">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">New Task!</h3>
                        <form onSubmit={handleSubmit(HandleAddNewTask)} className="mt-5 flex flex-col gap-3">
                            <input {...register('title')} type="text" placeholder="title of the task..." className="outline-none bg-transparent px-3 py-2 border-white border w-full rounded-md" />

                            <input {...register('points', { valueAsNumber: true })} type="number" placeholder="reward point amount..." className="outline-none bg-transparent px-3 py-2 border-white border w-full rounded-md" />

                            <input {...register('link')} placeholder="the link where the user should go..." className="outline-none bg-transparent px-3 py-2 border-white border w-full rounded-md" />

                            <input {...register('participateLimit', { valueAsNumber: true })} type="number" placeholder="how much people can paticipate this task..." className="outline-none bg-transparent px-3 py-2 border-white border w-full rounded-md" />

                            <label className="form-control outline-none bg-transparent px-3 py-2 border-white border w-full rounded-md">
                                <select {...register('category')} defaultValue={'Pick one category'} className="bg-transparent outline-none ">
                                    <option value={'Pick one category'} disabled selected>Pick one category</option>
                                    <option>Telegram</option>
                                    <option>Twitter</option>
                                    <option>CMC</option>
                                    <option>Youtube</option>
                                    <option>Comment</option>
                                    <option>Like</option>
                                    <option>Share</option>
                                    <option>Partnership</option>
                                </select>
                            </label>

                            <button type="submit" className="bg-yellow-500 py-2 text-black font-roboto font-bold rounded-md w-fit px-7">Add Task</button>
                        </form>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn" onClick={() => setNewTaskModal(false)}>Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            }
            <div className="flex justify-between items-center">
                <div className="flex justify-center items-center w-fit gap-3">
                    <p className="font-roboto text-xl text-white font-bold">All Task</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
                        <path d="M1.5 1.34888L7 7.84888L12.5 1.34888" stroke="white" strokeWidth="2" />
                    </svg>
                </div>

                <input type="text" placeholder="Search for task" className="font-roboto text-sm outline-none bg-transparent border rounded-md px-5 py-2 border-opacity-20 border-white" />
            </div>
            <div className="mt-5 flex flex-col gap-3">
                {
                    isFetching === true ? <div className="min-h-screen flex justify-center items-center">
                        <span className="loading loading-dots loading-lg"></span>
                    </div> :
                        <div className="">
                            {
                                data?.data?.map((item, index) => <TaskItemPreview data={item} key={index} />)
                            }
                        </div>
                }

                <div onClick={() => setNewTaskModal(true)} className="font-roboto text-xl text-white flex items-center gap-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path d="M7.05882 0V14.1176M0 7.05882H15" stroke="#999999" strokeWidth="1.76471" />
                    </svg>
                    <p>
                        New Task
                    </p>
                </div>
            </div>

        </div >
    );
};

export default TaskManagement;