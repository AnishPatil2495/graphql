import { createBrowserRouter } from "react-router-dom";
import Home from "../../container/Home";
import AddBookComponent from "../../component/AddBookPage";
import EditBookComponent from "../../component/EditBookPage";

const Router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/addbook",
    element: <AddBookComponent />
  },
  {
    path: "/editbook",
    element: <EditBookComponent />
  }
])

export default Router;