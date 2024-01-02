import axios from "axios";

export function GetTaskApi(){
    axios.get('http://localhost:3001/tasks')
    .then(res => console.log(res))
}

// axios.post('http://localhost:3001/tasks',{
//         task,
//         description
//       })
//       .then(function(res:any){
//         console.log(res);
//         setTask('');
//         setDescription('');
//       })