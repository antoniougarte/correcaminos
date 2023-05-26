import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>,
      errorElement: <h1>Error</h1>
    },
    {
      path: '/about',
      element: <About/>,
    },
    {
      path: '/contacts',
      element: <h1>contacts</h1>,
    }
  ])

  return (
    <>
      <Navbar/>
      <RouterProvider router={router} />
    </>
  )
}

export default App