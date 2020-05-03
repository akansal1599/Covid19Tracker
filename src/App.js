import React from 'react';
import {Route,BrowserRouter} from 'react-router-dom';

import Layout from "./components/Layout/Layout";
import Patient from './components/Patient/Patient';

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Layout>
                  <Route path="/" exact component={Patient}/>
              </Layout>
          </div>
      </BrowserRouter>
  );
}

export default App;
