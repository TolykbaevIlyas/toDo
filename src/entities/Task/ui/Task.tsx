import { ChangeStatus } from "@/features/changeStatus";
import { RootState } from "@/shared/lib/redux/store";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";

const Task = ({id, name, description,status}: any) => {
  const Theme = useSelector((state: RootState) => state.switchTheme)
  const dispatch = useDispatch();
  return (
    <div>
      {Theme.ThemeName === 'default'?
      <div className='w-72 h-52 rounded-xl border-2 border-black flex items-center m-5 flex-col'>
        <div className="border-b-2 border-neutral-600 w-full text-center">
          <p>{name}</p>
        </div>
        <div className="h-full w-full text-center">
          <p>{description}</p>
        </div>
        <div className="border-t-2 border-neutral-600 w-full text-center">
          {status == "in Work" ? <p className={`text-lime-400`}>{status}</p> :
          status == "Finished" ? <p className={`text-cyan-400`}>{status}</p> :
          null}
          <ChangeStatus id={id}/>
        </div>
      </div>
      : Theme.ThemeName === 'second' ?
      <div className='w-72 h-52 rounded-xl border-2 border-black flex items-center m-5 flex-col'>
        <div className="border-b-2 border-neutral-600 w-full text-center">
          <p>{name}</p>
        </div>
        <div className="h-full w-full text-center">
          <p>{description}</p>
        </div>
        <div className="border-t-2 border-neutral-600 w-full text-center">
          {status == "in Work" ? <p className={`text-lime-400`}>{status}</p> :
          status == "Finished" ? <p className={`text-cyan-400`}>{status}</p> :
          null}
          <ChangeStatus id={id}/>
        </div>
      </div>
      : Theme.ThemeName === 'third' ?
      <div className='w-72 h-52 rounded-xl border-2 border-black flex items-center m-5 flex-col'>
        <div className="border-b-2 border-neutral-600 w-full text-center">
          <p>{name}</p>
        </div>
        <div className="h-full w-full text-center">
          <p>{description}</p>
        </div>
        <div className="border-t-2 border-neutral-600 w-full text-center">
          {status == "in Work" ? <p className={`text-lime-400`}>{status}</p> :
          status == "Finished" ? <p className={`text-cyan-400`}>{status}</p> :
          null}
          <ChangeStatus id={id}/>
        </div>
      </div>
      : null}
    </div>
    
  )
}

export default Task