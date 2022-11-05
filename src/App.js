import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/router";

function App() {
  return (
    <div className="App font-Montserrat">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
