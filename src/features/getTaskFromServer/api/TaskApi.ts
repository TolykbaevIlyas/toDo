import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import { ITaskApi } from "./types";

// export function GetTaskApi(){
//     axios.get('http://localhost:3001/tasks')
//     .then(res => console.log(res))
// }

export const taskApi = createApi({
    reducerPath: 'taskApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (builder) => ({
      getAllTasks: builder.query<ITaskApi | any , string>({
        query: () => `tasks`,
      }),
    }),
  })

export default taskApi.reducer
export const { useGetAllTasksQuery } = taskApi;

// axios.post('http://localhost:3001/tasks',{
//         task,
//         description
//       })
//       .then(function(res:any){
//         console.log(res);
//         setTask('');
//         setDescription('');
//       })