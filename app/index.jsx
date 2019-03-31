import React from "react";
import ReactDOM from "react-dom";

// import { setupAnimation2 } from './animations';

import Cli from "./Cli";
import ReactTerminal from "./ReactTerminal";

class App extends React.Component {

    componentDidMount() {
        console.log(123);
        // setupAnimation();
        // setupAnimation2();
    }

	render() {
        return (
            <div>
                {/* <div className="matrix animate"></div> */}
                <ReactTerminal />
                {/* <canvas id="matrix"></canvas> */}
            </div>
            
        )
	}
}

ReactDOM.render(<App />, document.getElementById("app"));