import { RootState } from '@/shared/lib/redux/store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ChangeTheme } from '../lib/Slice/SwitchTheme'

const SwitchThemeButton = () => {
    const Theme = useSelector((state: RootState) => state.switchTheme)
    const dispatch = useDispatch();
  return (
    <div>
        <button className='px-4 py-2 bg-teal-500 ml-4 rounded-2xl hover:bg-slate-500' type='button' onClick={()=> dispatch(ChangeTheme('default'))}>default Theme</button>
        <button className='px-4 py-2 bg-teal-500 ml-4 rounded-2xl hover:bg-slate-500' type='button' onClick={()=> dispatch(ChangeTheme('second'))}>Second Theme</button>
        <button className='px-4 py-2 bg-teal-500 ml-4 rounded-2xl hover:bg-slate-500' type='button' onClick={()=> dispatch(ChangeTheme('third'))}>Third Theme</button>
    </div>
  )
}

export default SwitchThemeButton