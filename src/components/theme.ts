'use client'

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    typography: {
        h1: {
            fontWeight: 700,
            fontSize: '2rem',
        },
        h2: {
            fontWeight: 700,
            fontSize: '1.75rem',
        },
        body1: {
            fontSize: '1.125rem',
            fontWeight: 400,
            lineHeight: 1.33,
        }
    }
});