import './App.css'
import './i18n/i18n'
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import PageLayout from 'pages/pagesLayout/PageLayout'

const App = () => {
  return (
  <BrowserRouter>
    <SnackbarProvider maxSnack={5}>
      <PageLayout />
    </SnackbarProvider>
  </BrowserRouter>
  )
}

export default App
