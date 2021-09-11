import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import "./App.css";
import FileUpload2 from "./screens/Upload";
import MinaSidor from "./screens/MinaSidor";
import Table from "./screens/Table";
import Upload from "./screens/Upload";

function App() {

  return (
      <div className="App">
        <Router>
          <Switch>

          <Route exact path="/">
              <h2>Välkomen till student Client</h2>
            </Route>
            <Route exact path="/minasidor" component={MinaSidor} />
            <Route exact path="/table" component={Table} /> 
          </Switch>
        </Router>
      </div>
  );
}


export default App;