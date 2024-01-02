import { useEffect, useRef, useState } from "react"

const AddTask = () => {
  useEffect(()=>{
  },[])
  
    function CheckLength(){
      if(description.length >= 60){
        setDescriptionCheck(true);

      }
    }


    const [task, setTask] = useState('');
    const [click, setClick] = useState(false);
    const [description, setDescription] = useState('');
    const [descriptionCheck, setDescriptionCheck] = useState(false);
    CheckLength();
    console.log();
    //console.log(description)
  return (
    <div>
      <input type="text" placeholder="Add Title" className="border-2 border-black rounded-lg m-2" value={task} onChange={(e)=> setTask(e.target.value)}/>
      {click ? 
        <div>
            <input type="text" placeholder="Write description" className={`border-2 border-black rounded-lg m-2 ${descriptionCheck ? 'text-red': ''}`} value={description} onChange={(e)=> setDescription(e.target.value)}/>
            <button type="button" className="p-4 bg-red-600 rounded-lg m-2">AddTask</button>
        </div> 
      : <button type="button" className="p-4 bg-red-600 rounded-lg m-2" onClick={()=> setClick(!click)}>Click Me!</button>}


    </div>
  )
}

export default AddTask
