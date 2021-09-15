import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./components/Login/LoginPage";
import MaterialLayout from './components/SeekerForm/Layout/MaterialLayout';
import ViewDataPage from './components/SeekerForm/FormPage/ViewDataPage';
function App() {
  return (
    <div>
      <MaterialLayout>
        <ViewDataPage />
      </MaterialLayout>
    </div>
  );
}

export default App;


