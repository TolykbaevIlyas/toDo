import React from 'react'
import { Task } from '@/entities/Task';
import { useGetAllTasksQuery } from '@/shared/api/TaskApi';
import { AddTask } from '@/features/addTaskToServer';


const Tasks = () => {
    const {data ,error,isLoading,isFetching,currentData } = useGetAllTasksQuery();
    return (
        <div className=''>
            <div className='flex flex-wrap justify-center my-10'>
                <AddTask/>   
            </div>
           <div className='flex flex-wrap justify-around mx-80'>
            {error ? (<>ERROR</>) 
                : isLoading ? (<>IS LOADING</>)
                : data ?
                data.map((tas:any)=> <Task key={tas.id} name={tas.title} description={tas.description}/>) : null}
           </div>
        </div>

    )
}

export default Tasks