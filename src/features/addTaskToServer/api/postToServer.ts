import axios from "axios";

export function postToServer({title,description,setTitle,setDescription}:any){
    axios.post('http://localhost:3001/tasks',{
      title,
      description
    })
    .then(function(res:any){
      console.log(res);
      console.log(description);
      setTitle('');
      setDescription('');
    })
  }