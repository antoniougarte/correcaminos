import { RouterProvider, createBrowserRouter } from "react-router-dom"


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <h1>test</h1>,
      errorElement: <h1>Error</h1>
    },
    {
      path: '/about',
      element: <h1>about</h1>,
    },
    {
      path: '/contacts',
      element: <h1>contacts</h1>,
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App