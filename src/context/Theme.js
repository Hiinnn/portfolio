import React, { createContext } from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
    main: '#F6DF51',
    sub: '#E2D138',
    bg: '#232323',
    nav: '#181818',
    disable: '#727272',
}

const Theme = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export { Theme }
