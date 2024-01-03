import React from 'react'
import { Task } from '@/entities/Task';
import { useGetAllTasksQuery } from '@/features/getTaskFromServer/api/TaskApi';


const Tasks = () => {
    const {data ,error,isLoading,isFetching,currentData } = useGetAllTasksQuery();
    return (
        <div className='flex'>   
            {error ? (<>ERROR</>) 
            : isLoading ? (<>IS LOADING</>)
            : data ?
            data.map((tas:any)=> <Task key={tas.id} name={tas.task} description={tas.description}/>) : null}
        </div>

    )
}

export default Tasks