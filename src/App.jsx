import {createBrowserRouter} from "react-router-dom"
import { Edit } from "./edit"
import { RouterProvider } from "react-router-dom"
function App() {
const route=createBrowserRouter([{
  path:"/",
  element: <Edit />

}])
return <RouterProvider router={route} />
 

}

export default App
