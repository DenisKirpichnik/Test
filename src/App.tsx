import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SecondPage } from "./pages/SecondPage/SecondPage";
import { HomePage } from "./pages/FirstPage/HomePage";
import { Sidebar } from "./components/common/sidebar/Sidebar";
import { MainWrapper } from "./components/common/SharedStyles";

const App = () => {
  return (
    <Router>
      <MainWrapper>
        <Sidebar />
        <Switch>
          <Route path="/project">
            <SecondPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </MainWrapper>
    </Router>
  );
};

export default App;
