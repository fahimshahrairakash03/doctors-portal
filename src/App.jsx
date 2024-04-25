import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes/Routes";

function App() {
  return (
    <>
      <div className="max-w-[1440] mx-auto">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
