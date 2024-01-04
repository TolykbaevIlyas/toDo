import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IThemeConfig } from './types'


const initialState:IThemeConfig = {
    ThemeName: 'default',
}

export const switchTheme = createSlice({
  name: 'switchTheme',
  initialState,
  reducers: {
    ChangeTheme: (state:any ,action:PayloadAction<any>)=>{
      switch(action.payload){
        case 'default':
          return{
            ThemeName: 'default',
          }
        case 'second':
          return{
            ThemeName: 'second',
          }
        case 'third':
          return{
            ThemeName: 'third',
          }   
        }
      }

    },
  },
)

// Action creators are generated for each case reducer function
export const {ChangeTheme} = switchTheme.actions

export default switchTheme.reducer