'use client';

import { createTheme } from '@mui/material/styles';

const themeFont = createTheme({
    typography: {
        fontFamily: 'var(--font-satoshi)',
    },
});

const themeFilter = createTheme({
    typography: {
        fontFamily: 'var(--font-satoshi)',
        fontSize: 14,
    },
    components: {
        MuiAutocomplete: {
            styleOverrides: {
                option: {
                    border: 'none',
                    fontFamily: 'var(--font-satoshi)',
                    padding: 0,
                },
            },
        },
    },
})

export { themeFont, themeFilter };
