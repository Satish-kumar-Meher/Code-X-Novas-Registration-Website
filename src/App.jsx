
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Registration } from './pages/Registration'
import { TermsAndConditions } from './pages/TermsAndConditions'
import { ReferalPage } from './pages/Referal'
import { Payment } from './pages/Payment'
import { ToastContainer } from 'react-toastify'
import ConfirmPage from './pages/Confirm_page'
import ScannerPage from './pages/ScannerPage'
import UsersTable from './pages/UsersTable'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Registration />,
    },
    {
      path: "/terms-cons",
      element: <TermsAndConditions/>,
    }
    ,
    {
      path: "/referal",
      element: <ReferalPage/>,
    },
    {
      path: "/payment",
      element: <Payment/>,
    },
    {
      path: "/confirm",
      element: <ConfirmPage/>,
    },
    {
      path: "/scannerpage",
      element: <ScannerPage/>,
    },
    {
      path: "/admin",
      element: <UsersTable/>,
    }
    
  ])

  return (
    <>
    <RouterProvider router={router}>
    
    </RouterProvider>
    <ToastContainer position="top-right" reverseOrder={false} />
    </>
  )
}

export default App
