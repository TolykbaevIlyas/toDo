const Task = ({name, description,status}: any) => {
  return (
    <div className='w-72 h-52 rounded-xl border-2 border-black flex items-center m-5 cursor-grab flex-col'>
        <div className="border-b-2 border-neutral-600 w-full text-center">
          <p>{name}</p>
        </div>
        <div className="h-full w-full text-center">
          <p>{description}</p>
        </div>
        <div className="border-t-2 border-neutral-600 w-full text-center">
          <p className={`text-lime-400`}>{status}</p>
        </div>
    </div>
  )
}

export default Task