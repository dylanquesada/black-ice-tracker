import React from "react";
import logo from "./logo.svg";
import "./App.css";
import gunsApi from "./services/api/guns/guns.service";
import { Gun } from "./core/types/models";
import { GunList } from "./ui/components/gun-list/gun-list";

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
        <header className="App-header container">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <GunList guns={this.state.guns}></GunList>
        </header>
      </div>
    );
  }
}

export default App;
