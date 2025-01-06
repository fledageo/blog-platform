import { createBrowserRouter } from "react-router"
import "./styles/globals.scss"
import { Home } from "./pages/Home/Home"
import { RouterProvider } from "react-router"
import { Provider } from "react-redux"
import { Layout } from "./components/complex/Layout/Layout"
import { Registration } from "./pages/Registration/Registration"
import { Login } from "./pages/Login/Login"
import { store } from "./store/store"
import { AddPost } from "./pages/AddPost/AddPost"
import { FullPost } from "./pages/FullPost/FullPost"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/registration",
        element: <Registration />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/post/add",
        element: <AddPost/>
      },
      {
        path: "/post/:id",
        element: <FullPost/>
      }
    ]
  }
])

const App = () => {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  )
}
export default App