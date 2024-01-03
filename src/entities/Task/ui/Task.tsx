import { ChangeStatus } from "@/features/changeStatus";
import { useState } from "react"

const Task = ({id, name, description,status}: any) => {
  console.log();
  return (
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
  )
}

export default Task