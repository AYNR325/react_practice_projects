import {createContext,useContext} from 'react';
//create context
export const ThemeContext= createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},
})
//context provider
export const ThemeProvider= ThemeContext.Provider

//custom hook
export default function useTheme(){
    return useContext(ThemeContext)
}