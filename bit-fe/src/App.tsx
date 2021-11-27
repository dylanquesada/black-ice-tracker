import React from "react";
import background from "../src/assets/images/header.jpeg";
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
      <div className="App container">
        <header className="App-header">Black Ice Tracker</header>
        <GunList guns={this.state.guns}></GunList>
      </div>
    );
  }
}

export default App;
