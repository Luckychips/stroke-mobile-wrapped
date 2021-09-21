import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import PageCoronal from "./pages/Coronal";
import PageAxial from "./pages/Axial";
import PageSagittal from "./pages/Sagittal";

function App() {
  return (
      <Router>
          <Switch>
            <Route path="/coronal">
              <PageCoronal />
            </Route>
            <Route path="/axial">
              <PageAxial />
            </Route>
            <Route path="/sagittal">
              <PageSagittal />
            </Route>
          </Switch>
      </Router>
  );
}

export default App;
