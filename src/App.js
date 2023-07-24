import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Page404 from "./components/pages/Page404";
import Habbit from "./components/pages/Habbit";
import Report from "./components/pages/Report";
import { useEffect } from "react";
import {
  actions,
  getHabbits,
  habbitSelector,
} from "./components/redux/reducers/habbitReducer";

function App() {
  const dispatch = useDispatch();
  const { success, error } = useSelector(habbitSelector);

  useEffect(() => {
    dispatch(getHabbits());
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error);
    } else if (success) {
      toast.success(success);
    }
  }, [error, success]);

  const browserRouter = createBrowserRouter([
    {
      path: "/",
      errorElement: <Page404 />,
      children: [
        { index: true, element: <Habbit /> },
        {
          path: "weekly-report",
          element: <Report />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <ToastContainer />
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;
