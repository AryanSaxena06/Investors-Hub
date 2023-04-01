import { connect } from "react-redux";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import { getUserAuth } from "./actions";
import TrifurcatePage from "./components/TrifurcatePage";
import { useState } from "react";

function App(props) {
  const [identity, setIdentity] = useState(3);

  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/trifurcate">
            <TrifurcatePage setIdentity={setIdentity} identity={identity} />
          </Route>
          <Route path="/home">
            <Header setIdentity={setIdentity} />
            <Home identity={identity} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
