import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { postToServer } from "../api/postToServer";
import { useGetAllTasksQuery } from "@/features/getTaskFromServer/api/TaskApi";

const AddTask = () => {
    const [title, setTitle] = useState('');
    const [titleCheck, setTitleCheck] = useState(false);
    const [description, setDescription] = useState('');
    const [descriptionCheck, setDescriptionCheck] = useState(false);
    const [checkToNull, setCheckToNull] = useState(false);

    // console.log(description.length )

    function descriptionHandler(e:any){
      setDescription(e.target.value)
      if(description.length >= 60){
        setCheckToNull(false);
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
        setCheckToNull(false);
      }
    }

    function sendHandler({title, description,setTitle,setDescription}:any){
      if(title.length == 0 && description.length == 0){
        setCheckToNull(true);
      }else{
        console.log(title);
        postToServer({title,description,setTitle,setDescription})
        const {data ,error,isLoading,isFetching,currentData } = useGetAllTasksQuery();
        console.log(data);
      }
    }



    
  return (
    <div>
      <div className="flex">
        <input type="text" placeholder="Add Title" className="border-2 border-black rounded-lg m-2 p-2" value={title} onChange={(e)=> titleHandler(e)}/>
        <input type="text" placeholder="Write description" className={`border-2 border-black rounded-lg m-2 p-2 ${descriptionCheck ? 'text-red-600': 'text-black-600'}`} value={description} onChange={(e)=>descriptionHandler(e)}/>
        <button type="button" disabled={descriptionCheck} className={`text-white p-4 bg-red-600 rounded-lg m-2${descriptionCheck ? 'bg-slate-600' : 'bg-red-600'}`} onClick={()=>{sendHandler({title,description,setTitle,setDescription})}}>AddTask</button>

      </div>
      {descriptionCheck ? <div>Problem!! More than 60, delete some text</div>:<></>}
      {titleCheck ? <div>Problev!! Title has more than 20, delete some text </div> : <></>}
      {checkToNull? <div> Some input is empty</div> : <></>}

    </div>
  )
}

export default AddTask
