import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { postToServer } from "../api/postToServer";

const AddTask = () => {
    const [title, setTitle] = useState('');
    const [titleCheck, setTitleCheck] = useState(false);
    const [description, setDescription] = useState('');
    const [descriptionCheck, setDescriptionCheck] = useState(false);

    // console.log(description.length )

    function descriptionHandler(e:any){
      setDescription(e.target.value)
      if(description.length >= 60){
        setDescriptionCheck(true);
      }
      else{
        setDescriptionCheck(false)
      }
    }

    function titleHandler(e:any){
      setTitle(e.target.value)
      if(description.length >= 20){
        setTitleCheck(true);
      }
      else{
        setTitleCheck(false)
      }
    }

    
  return (
    <div>
      <div className="flex">
        <input type="text" placeholder="Add Title" className="border-2 border-black rounded-lg m-2 p-2" value={title} onChange={(e)=> titleHandler(e)}/>
        <input type="text" placeholder="Write description" className={`border-2 border-black rounded-lg m-2 p-2 ${descriptionCheck ? 'text-red-600': 'text-black-600'}`} value={description} onChange={(e)=>descriptionHandler(e)}/>
        <button type="button" disabled={descriptionCheck} className={`text-white p-4 bg-red-600 rounded-lg m-2${descriptionCheck ? 'bg-slate-600' : 'bg-red-600'}`} onClick={()=>{postToServer(task,description,setTask,setDescription)}}>AddTask</button>

      </div>
      {descriptionCheck ? <div>Problem!! More than 60, delete some text</div>:<></>}
      {titleCheck ? <div>Problev!! Title has more than 20, delete some text </div> : <></>}

    </div>
  )
}

export default AddTask
