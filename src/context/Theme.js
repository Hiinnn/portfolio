import { createContext } from 'react'

const theme = {
    main: '#F6DF51',
    sub: '#E2D138',
    bg_nav: '#181818',
    bg_body: '#232323',
    disable: '#727272',
    text_main: "#FFFFFF",
    text_sub: "#B7B7B7",
}

const ThemeContext = createContext(theme)

export { ThemeContext }
