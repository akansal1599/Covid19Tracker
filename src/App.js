import React from 'react';
import {Route,BrowserRouter} from 'react-router-dom';

import Layout from "./components/Layout/Layout";
import Patient from './components/Patient/Patient';
import Essentials from "./components/Essentials/Essentials";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Layout>
                  <Route path="/" exact component={Patient}/>
                  <Route path="/essentials" component={Essentials}/>
              </Layout>
          </div>
      </BrowserRouter>
  );
}

export default App;
