import { createRoot } from 'react-dom/client'
import { BrowserRouter, BrowserRouterProps } from 'react-router-dom'

// CSS
import './index.css'

// Components
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)
