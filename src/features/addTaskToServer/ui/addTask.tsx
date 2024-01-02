import { useEffect, useRef, useState } from "react"

const AddTask = () => {
    const [task, setTask] = useState('');
    const [click, setClick] = useState(false);
    const [description, setDescription] = useState('');
    const [descriptionCheck, setDescriptionCheck] = useState(false);

    useEffect(()=>{
      
    },[click])

    function descriptionHandler(e:any){
      setDescription(e.target.value)
      if(description.length >= 60){
        setDescriptionCheck(true);
      }
      else{
        setDescriptionCheck(false)
      }
    }
  return (
    <div>
      <input type="text" placeholder="Add Title" className="border-2 border-black rounded-lg m-2" value={task} onChange={(e)=> setTask(e.target.value)}/>
      {click ? 
        <div>
            <input type="text" placeholder="Write description" className={`border-2 border-black rounded-lg m-2 ${descriptionCheck ? 'text-red-600': 'text-black-600'}`} value={description} onChange={(e)=>descriptionHandler(e)}/>
            {descriptionCheck ? <>Problem more than 60, delete some text</>:<></>}
            <button type="button" disabled={descriptionCheck ? false : true} className={`p-4 bg-red-600 rounded-lg m-2 ${descriptionCheck ? 'bg-slate-600' : 'bg-red-600'}`} onClick={()=>{setClick(!click)}}>AddTask</button>
        </div> 
      : <button type="button" className="p-4 bg-red-600 rounded-lg m-2" onClick={()=> setClick(!click)}>Click Me!</button>}


    </div>
  )
}

export default AddTask
