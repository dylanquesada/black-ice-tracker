import React from "react";
import logo from "./logo.svg";
import "./App.css";
import gunsApi from "./services/api/guns/guns.service";
import { Gun } from "./core/types/models";

interface IAppState {
  guns: Gun[];
}
class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      guns: [],
    };
  }

  componentDidMount() {
    // Subscribe to changes
    gunsApi.getAll!().then((res) => {
      this.setState({
        guns: res,
      });
    });
  }

  handleChange() {
    gunsApi.getAll!().then((res) => {
      this.setState({
        guns: res,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {this.state.guns.map((gun: Gun) => (
            <li key={gun.id}>{gun.name}</li>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
