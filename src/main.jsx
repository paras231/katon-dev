import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
)
