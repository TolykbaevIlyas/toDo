const Task = ({name, description}: any) => {
  return (
    <div className='w-52 h-72 rounded-xl border-2 border-black flex items-center justify-center m-5 cursor-grab flex-col'>
        <p>{name}</p>
        <p>{description}</p>
    </div>
  )
}

export default Task