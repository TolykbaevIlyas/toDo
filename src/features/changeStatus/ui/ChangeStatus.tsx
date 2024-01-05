import { useUpdateTaskMutation,useDeleteTaskMutation } from "@/shared/api/TaskApi";
import { RootState } from "@/shared/lib/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ChangeStatus = ({id,status}:any) => {
    const [UpdateTask,{isError}] = useUpdateTaskMutation();
    const [DeleteTask] = useDeleteTaskMutation();
    const [finished, setFinished] = useState(false);
    const [inWork, setInWork] = useState(false);
    const [Delete, setDelete] = useState(false);
    const Theme = useSelector((state: RootState) => state.switchTheme)
    const dispatch = useDispatch();

    useEffect(()=>{
        switch (status) {
            case "in Work":
                setInWork(true);
                setFinished(false);
                setDelete(false);
                console.log("inWork");
                break;
            case 'Finished': 
                setInWork(false);
                setFinished(true);
                setDelete(false);
                console.log("finished");
                break;
        }
    },[])

    const handleDeleteTask = async (id) => {
        await DeleteTask(id).unwrap();
    }

    const handleUpdateTask = async (id,status) =>{
        handleCheckToggle(status)
        await UpdateTask({id, status:status}).unwrap();
    }

    const handleCheckToggle = (status) => {
        switch (status) {
            case "in Work":
                setInWork(true);
                setFinished(false);
                setDelete(false);
                console.log("inWork");
                break;
            case 'Finished': 
                setInWork(false);
                setFinished(true);
                setDelete(false);
                console.log("finished");
                break;
        }
        // if(inWork){
        //     setInWork(true);
        //     setFinished(false);
        //     setDelete(false);
        //     console.log("inWork");
        // }
        // if(finished){
        //     setInWork(false);
        //     setFinished(true);
        //     setDelete(false);
        //     console.log("finished");
        // }
    }



    return (
        <div>
            {
                Theme.ThemeName === "default" ?
                    <div className="flex justify-between border-t-2 border-black ">
                        <button className="w-full p-4 bg-orange-600" type='button' onClick={() => handleUpdateTask(id, "Finished")}>finished</button>
                        <button className="w-full p-4 bg-emerald-600" type='button' onClick={() => handleUpdateTask(id, "in Work")}>in Work</button>
                        <button className="w-full p-4 bg-orange-900" type='button' onClick={() => handleDeleteTask(id)}>Delete</button>
                    </div>
                : Theme.ThemeName === 'second' ?
                    <div className=" border-t-2 border-black ">
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" checked={finished} onClick={()=> setFinished(!finished)} onChange={() => handleUpdateTask(id, "Finished")}/>
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Finished</span>
                        </label>

                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" checked={inWork} onClick={()=> setInWork(!inWork)} onChange={() => handleUpdateTask(id, "in Work") }/>
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">In Work</span>
                        </label>

                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" checked={Delete} onClick={()=> setDelete(!Delete)} onChange={()=> handleDeleteTask(id)}/>
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Delete</span>
                        </label>
                    </div>
                : Theme.ThemeName === 'third' ?
                    <div className="flex justify-between border-black ">
                        <div className="w-96 border-2 border-black h-96 overflow-scroll">
                            <p className="text-center border-b-2 border-black">Finished</p>
                            <div></div>
                        </div>
                        <div className="w-96 border-2 border-black h-96 overflow-scroll">
                            <p className="text-center border-b-2 border-black">in Work</p>
                            <div></div>
                        </div>
                        <div className="w-96 border-2 border-black h-96 overflow-scroll">
                            <p className="text-center border-b-2 border-black">Delete</p>
                            <div></div>
                        </div>

                        {/* <button className="w-full p-4 bg-orange-600" type='button' onClick={() => handleUpdateTask(id, "Finished")}>finished</button>
                        <button className="w-full p-4 bg-emerald-600" type='button' onClick={() => handleUpdateTask(id, "in Work")}>in Work</button>
                        <button className="w-full p-4 bg-orange-900" type='button' onClick={() => handleDeleteTask(id)}>Delete</button> */}
                    </div>
                : null
            }
        </div>
    )
}

export default ChangeStatus