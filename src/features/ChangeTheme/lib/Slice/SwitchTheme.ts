import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IThemeConfig } from './types'




const initialState:IThemeConfig = {
    cardBackgroundColor: "string",
    cardTextColor: "string"
}

export const switchTheme = createSlice({
  name: 'switchTheme',
  initialState,
  reducers: {
    ChangeTheme: (state:any,action:PayloadAction<any>)=>{
        if(action.payload){
          return {

          }
        }
          else{
            return{

              
            }
          }
        }

    },
  },
)

// Action creators are generated for each case reducer function
export const {ChangeTheme,addTheme} = switchTheme.actions

export default switchTheme.reducer