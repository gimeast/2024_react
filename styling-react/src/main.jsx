import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SassComponent from "./components/SassComponent.jsx";
import CSSModule from "./components/CSSModule.jsx";
import StyledComponent from "./components/StyledComponent.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SassComponent />
    <CSSModule />
    <StyledComponent />
  </StrictMode>,
)
