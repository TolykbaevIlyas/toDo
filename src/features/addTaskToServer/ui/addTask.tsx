import { useEffect, useRef, useState } from "react"
import { useAddTaskMutation } from "@/shared/api/TaskApi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/shared/lib/redux/store";

const AddTask = () => {
    const [title, setTitle] = useState('');
    const [titleCheck, setTitleCheck] = useState(false);
    const [description, setDescription] = useState('');
    const [descriptionCheck, setDescriptionCheck] = useState(false);
    const [checkToNull, setCheckToNull] = useState(false);
    const [addTask,{isError}] = useAddTaskMutation();
    const Theme = useSelector((state: RootState) => state.switchTheme)
    const dispatch = useDispatch();

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

    async function sendHandler({title, description,setTitle,setDescription}:any){
      if(title.length == 0 && description.length == 0){
        setCheckToNull(true);
      }else{
        await addTask({title:title, description: description, status: "in Work"}).unwrap();    
        setTitle('');
        setDescription('');
      }
    }



    
  return (
    <div>
      {Theme.ThemeName === 'default' ?
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
    : Theme.ThemeName === 'second' ?
      <div>
        <div className="flex flex-col">
          <input type="text" placeholder="Add Title" className="border-2 border-black rounded-lg m-2 p-2" value={title} onChange={(e)=> titleHandler(e)}/>
          <input type="text" placeholder="Write description" className={`border-2 border-black rounded-lg m-2 p-2 ${descriptionCheck ? 'text-red-600': 'text-black-600'}`} value={description} onChange={(e)=>descriptionHandler(e)}/>
          <button type="button" disabled={descriptionCheck} className={`text-white p-4 bg-red-600 rounded-lg m-2${descriptionCheck ? 'bg-slate-600' : 'bg-red-600'}`} onClick={()=>{sendHandler({title,description,setTitle,setDescription})}}>AddTask</button>

        </div>
        {descriptionCheck ? <div>Problem!! More than 60, delete some text</div>:<></>}
        {titleCheck ? <div>Problev!! Title has more than 20, delete some text </div> : <></>}
        {checkToNull? <div> Some input is empty</div> : <></>}

      </div>
      : Theme.ThemeName === 'third' ?
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
    : null}
    </div>
  )
}

export default AddTask
