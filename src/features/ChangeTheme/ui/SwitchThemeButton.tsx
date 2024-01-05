import { RootState } from '@/shared/lib/redux/store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ChangeTheme } from '../lib/Slice/SwitchTheme'

const SwitchThemeButton = () => {
    const Theme = useSelector((state: RootState) => state.switchTheme)
    const dispatch = useDispatch();
    //console.log(Theme)
  return (
    <div className='flex justify-end'>
    {Theme.ThemeName === 'default' ? 
    <div>
        <button className='px-4 py-2 bg-teal-500 ml-4 rounded-2xl hover:bg-slate-500' type='button' onClick={()=> dispatch(ChangeTheme('default'))}>default Theme</button>
        <button className='px-4 py-2 bg-teal-500 ml-4 rounded-2xl hover:bg-slate-500' type='button' onClick={()=> dispatch(ChangeTheme('second'))}>Second Theme</button>
        <button className='px-4 py-2 bg-teal-500 ml-4 rounded-2xl hover:bg-slate-500' type='button' onClick={()=> dispatch(ChangeTheme('third'))}>Third Theme</button>
    </div> 
    : Theme.ThemeName === 'second' ?
    <div className='flex flex-col '>
        <button className='px-4 py-2 bg-lime-600 ml-2 rounded-lg hover:bg-slate-500' type='button' onClick={()=> dispatch(ChangeTheme('default'))}>default Theme</button>
        <button className='px-4 py-2 bg-lime-600 ml-2 mt-4 rounded-lg hover:bg-slate-500' type='button' onClick={()=> dispatch(ChangeTheme('second'))}>Second Theme</button>
        <button className='px-4 py-2 bg-lime-600 ml-2 mt-4 rounded-lg hover:bg-slate-500' type='button' onClick={()=> dispatch(ChangeTheme('third'))}>Third Theme</button>
    </div> 
    : Theme.ThemeName === 'third' ?
    <div>
        <button className='px-4 py-2 bg-teal-500 ml-4 rounded-2xl hover:bg-slate-500' type='button' onClick={()=> dispatch(ChangeTheme('default'))}>default Theme</button>
        <button className='px-4 py-2 bg-teal-500 ml-4 rounded-2xl hover:bg-slate-500' type='button' onClick={()=> dispatch(ChangeTheme('second'))}>Second Theme</button>
        <button className='px-4 py-2 bg-teal-500 ml-4 rounded-2xl hover:bg-slate-500' type='button' onClick={()=> dispatch(ChangeTheme('third'))}>Third Theme</button>
    </div>
    :null}
    </div>
  )
}

export default SwitchThemeButton