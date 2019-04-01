import React from "react";
import ReactDOM from "react-dom";

import { setupAnimation2 } from './animations';

import Cli from "./Cli";
import ReactTerminal from "./ReactTerminal";
import Matrix from "./Matrix";

class App extends React.Component {

    componentDidMount() {
        console.log(123);
        // setupAnimation();
        // setupAnimation2();
    }

	render() {

        /*
                <div className="matrix animate"></div>                  
                <Matrix />
                <ReactTerminal />
                 <canvas id="matrix"></canvas>
        */

        return (
            <div>
                {/* <canvas id="matrix"></canvas> */}
                {/* <Matrix /> */}
                <ReactTerminal />
            </div>
            
        )
	}
}

ReactDOM.render(<App />, document.getElementById("app"));