import { useUpdateTaskMutation,useDeleteTaskMutation } from "@/shared/api/TaskApi";

const ChangeStatus = ({id}:any) => {
    const [UpdateTask,{isError}] = useUpdateTaskMutation();
    const [DeleteTask] = useDeleteTaskMutation();

    const handleDeleteTask = async (id) => {
        await DeleteTask(id).unwrap();
    }

    const handleUpdateTask = async (id,status) =>{
        await UpdateTask({id, status:status}).unwrap();
    }

    return (
        <div className="flex justify-between border-t-2 border-black ">
            <button className="w-full p-4 bg-orange-600" type='button' onClick={() => handleUpdateTask(id, "Finished")}>finished</button>
            <button className="w-full p-4 bg-emerald-600" type='button' onClick={() => handleUpdateTask(id, "in Work")}>in Work</button>
            <button className="w-full p-4 bg-orange-900" type='button' onClick={() => handleDeleteTask(id)}>Delete</button>
        </div>
    )
}

export default ChangeStatus