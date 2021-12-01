import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { getScores } from "./store/scores";
import { useEffect } from "react";


function App() {
  const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getScores())
  }, [dispatch]);

  return (
    <>
      <Navigation/>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      {/* <Footer /> */}
      
    </>
  );
}

export default App;