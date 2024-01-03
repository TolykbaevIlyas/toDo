import axios from "axios";

export function postToServer({task,description,setTask,setDescription}:any){
    axios.post('http://localhost:3001/tasks',{
      task,
      description
    })
    .then(function(res:any){
      console.log(res);
      setTask('');
      setDescription('');
    })
  }