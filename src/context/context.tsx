import { createContext, Dispatch, SetStateAction } from "react"
import { light, dark } from "src/styles/themes";

import { DefaultTheme } from 'styled-components';

import { usePersistState } from "src/hooks/Misc/usePersistState";

interface PersistProps {
    theme: DefaultTheme,
    setTheme : Dispatch<SetStateAction<DefaultTheme>>
}

const  initialTheme = {
    theme: light,
    setTheme: () => null
}

const AppContext = createContext<PersistProps>(initialTheme);

const Context = ({ children }) => {
    const [theme, setTheme] = usePersistState<DefaultTheme>('theme', light);

    return (
        <AppContext.Provider value={{ theme, setTheme }}>
            {children}
        </AppContext.Provider>
    )
}

export { Context, AppContext };