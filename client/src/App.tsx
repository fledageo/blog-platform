import { createBrowserRouter } from "react-router"
import "./styles/globals.scss"
import { Home } from "./pages/Home/Home"
import { RouterProvider } from "react-router"
import { Layout } from "./components/complex/Layout/Layout"
import { Registration } from "./pages/Registration/Registration"
const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/registration",
        element:<Registration/>
      }
      
    ]
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}
export default App