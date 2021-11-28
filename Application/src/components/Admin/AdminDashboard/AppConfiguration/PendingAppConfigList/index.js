import "./App.css";
import React from "react";
import PendingConfigurationApplication from "./components/Admin/AdminDashboard/AppConfiguration/PendingAppConfigList";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col order-first">
          <h3>Pending Configuration Application</h3>
        </div>

        <div className="links">
          <a href="https://wwww.alphaoil.com">1.AlphaOil</a>
        </div>

        <div className="links">
          <a href="https://wwww.petronasup.com">2.PetronasUp</a>
        </div>
      </div>
    </div>

  );
}

export default App;

