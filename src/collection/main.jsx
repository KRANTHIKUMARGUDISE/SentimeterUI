import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StyledEngineProvider } from '@mui/material/styles';
import App from '/src/App.tsx'
import '/src/index.css'

export {default as Box} from "@mui/material/Box";

export {default as Typography} from '@mui/material/Typography';
/*export {default as DashboardIcon} from '@mui/icons-material/Dashboard';
export {default as BarChartIcon} from '@mui/icons-material/BarChart';
export  {default as AddIcon} from '@mui/icons-material/Add';
export  {default as ViewListIcon}   from '@mui/icons-material/ViewList';
export  {default as EmojiEmotionsIcon}  from '@mui/icons-material/EmojiEmotions';
export  {default as TimelineIcon}  from '@mui/icons-material/Timeline';
export  {default as AutoAwesomeIcon}   from '@mui/icons-material/AutoAwesome';*/


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </StrictMode>,
)
