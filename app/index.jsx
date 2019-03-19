import React from "react";
import ReactDOM from "react-dom";

import Cli from "./Cli";
import ReactTerminal from "./ReactTerminal";

class App extends React.Component {
	render() {
        return (
            <ReactTerminal />
        )
	}
}

ReactDOM.render(<App />, document.getElementById("app"));